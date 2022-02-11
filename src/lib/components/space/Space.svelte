<script lang="ts">
	type Space = boolean | number;

	const DEFAULT_SPACING = '1rem';

	export let all: Space = undefined;
	export let top: Space = undefined;
	export let right: Space = undefined;
	export let bottom: Space = undefined;
	export let left: Space = undefined;

	let marginTop: string;
	let marginRight: string;
	let marginBottom: string;
	let marginLeft: string;

	const toStyleString = (styles: object): string => {
		const parsedStyles = Object.entries(styles)
			.filter(([, style]) => typeof style !== 'number' && !!style)
			.map(([key, value]) => `${key}: ${value}`);

		return parsedStyles.length > 0 ? parsedStyles.join(';') : '';
	};

	const parseSpace = (space: Space): string => {
		if (space === true) {
			return DEFAULT_SPACING;
		} else if (typeof space === 'number') {
			return `${space}rem`;
		}

		return undefined;
	};

	if (all) {
		marginTop = parseSpace(all);
		marginRight = parseSpace(all);
		marginBottom = parseSpace(all);
		marginLeft = parseSpace(all);
	} else {
		marginTop = parseSpace(top);
		marginRight = parseSpace(right);
		marginBottom = parseSpace(bottom);
		marginLeft = parseSpace(left);
	}
</script>

<div
	style={toStyleString({
		'margin-top': marginTop,
		'margin-right': marginRight,
		'margin-bottom': marginBottom,
		'margin-left': marginLeft,
	})}
>
	<slot />
</div>
