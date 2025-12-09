interface TelegramWebAppMainButton {
	isVisible: boolean;
	text: string;
	color: string;
	textColor: string;

	show(): void;
	hide(): void;
	setText(text: string): void;
	setParams(params: { color?: string; textColor?: string }): void;

	onClick(callback: () => void): void;
	offClick(callback: () => void): void;
}

interface TelegramWebApp {
	initData: string;
	initDataUnsafe: Record<string, any>;
	isExpanded: boolean;
	isClosingConfirmationEnabled: boolean;
	version: string;
	colorScheme: 'light' | 'dark' | string;
	themeParams: Record<string, string>;

	MainButton: TelegramWebAppMainButton;

	ready(): void;
	close(): void;

	onEvent(event: 'themeChanged' | 'mainButtonClicked' | string, callback: () => void): void;
	offEvent(event: 'themeChanged' | 'mainButtonClicked' | string, callback: () => void): void;
}

interface Window {
	Telegram?: {
		WebApp: TelegramWebApp;
	};
}
