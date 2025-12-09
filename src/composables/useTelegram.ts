import { ref, onMounted } from 'vue';

export const useTelegram = () => {
	const isReady = ref(false);
	const telegram = window.Telegram?.WebApp;

	onMounted(() => {
		if (telegram) {
			telegram.ready();
			isReady.value = true;
		}
	});

	const showMainButton = (text: string) => {
		if (telegram) {
			telegram.MainButton.setText(text);
			telegram.MainButton.show();
		}
	}

	const hideMainButton = () => {
		if (telegram) {
			telegram.MainButton.hide();
		}
	}

	return {
		isReady,
		showMainButton,
		hideMainButton,
	};
}
