type SleepConfig =
	| number
	| {
			duration?: number;
			min?: number;
			max?: number;
	  };

export const sleep = (config: SleepConfig): Promise<never> => {
	let delay = 0;
	if (typeof config === 'number') {
		delay = config;
	} else {
		const { duration, min, max } = config;

		if (duration) {
			delay = duration;
		} else if (typeof min === 'number' && typeof max === 'number') {
			delay = (min + Math.random() * max) * 1000;
		}
	}

	return new Promise((resolve) => setTimeout(resolve, delay));
};
