import { css } from '@emotion/react';

const GlobalStyle = css`
	:root {
		font-weight: 400;
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;

		// colors
		--white: #fff;
		--black: #191a20;

		--inverseGrey50: #202027;
		--inverseGrey100: #2c2c35;
		--inverseGrey200: #3c3c47;
		--inverseGrey300: #4d4d59;
		--inverseGrey400: #62626d;
		--inverseGrey500: #7e7e87;
		--inverseGrey600: #9e9ea4;
		--inverseGrey700: #c3c3c6;
		--inverseGrey800: #e4e4e5;
		--inverseGrey900: #fff;

		--grey50: #f9fafb;
		--grey100: #f2f4f6;
		--grey200: #e5e8eb;
		--grey300: #d1d6db;
		--grey400: #b0b8c1;
		--grey500: #8b95a1;
		--grey600: #6b7684;
		--grey700: #4e5968;
		--grey800: #333d4b;
		--grey900: #191f28;
		--greyOpacity50: rgba(0, 23, 51, 0.02);
		--greyOpacity100: rgba(2, 32, 71, 0.05);
		--greyOpacity200: rgba(0, 27, 55, 0.1);
		--greyOpacity300: rgba(0, 29, 58, 0.18);
		--greyOpacity400: rgba(0, 25, 54, 0.31);
		--greyOpacity500: rgba(3, 24, 50, 0.46);
		--greyOpacity600: rgba(0, 19, 43, 0.58);
		--greyOpacity700: rgba(3, 18, 40, 0.7);
		--greyOpacity800: rgba(0, 12, 30, 0.8);
		--greyOpacity900: rgba(2, 9, 19, 0.91);

		--background: #fff;
		--greyBackground: #f2f4f6;
		--layeredBackground: rgba(0, 0, 0, 0.5);

		--blue100: #c9e2ff;
		--blue200: #90c2ff;
		--blue300: #64a8ff;
		--blue400: #4593fc;
		--blue500: #3182f6;
		--blue600: #2272eb;
		--blue700: #1b64da;
		--blue800: #1957c2;
		--blue900: #194aa6;

		--orange100: #ffa927;
		--orange200: #fe9800;

		--green100: #76e4b8;
		--red: #ff4545;

		// radius
		--radius-s: 6px;
		--radius-m: 10px;
		--radius-l: 16px;
		--radius-xl: 20px;
		--radius-2xl: 24px;
		--radius-extra: 9999px;

		// padding
		--padding-base-vertical: 12px;
		--padding-base-horizontal: 16px;
		--padding-s-vertical: 4px;
		--padding-s-horizontal: 8px;
		--padding-m-vertical: 8px;
		--padding-m-horizontal: 12px;
		--padding-l-vertical: 12px;
		--padding-l-horizontal: 20px;
		--padding-xl-vertical: 18px;
		--padding-xl-horizontal: 24px;
		--padding-container: 32px;

		// font
		--line-height-base: 1.6;
		--text-h1: 56px;
		--text-h2: 48px;
		--text-h3: 36px;
		--text-h4: 32px;
		--text-h5: 24px;
		--text-h6: 20px;
		--text-h7: 17px;
		--text-size-xs: 11px;
		--text-size-s: 13px;
		--text-size-p: 15px;
		--font-regular: 400;
		--font-medium: 500;
		--font-semibold: 600;
		--font-bold: 700;
		--font-extrabold: 900;

		--nav-height: 60px;
		--transition-duration: 0.2;

		// z-index
		--nav-index: 50;
		--dimmer-index: 999;
		--modal-index: 9990;
		--toast-index: 9999;

		// react-toastify color manipulation
		--toastify-color-success: var(--color-blue-400);
		--toastify-color-error: var(--color-red);
		--toastify-font-family: 'Noto Sans KR';
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: 0;
		line-height: var(--line-height-base);
		vertical-align: baseline;
		font-family: 'Pretendard', sans-serif;
		word-break: keep-all;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}

	html {
		width: 100%;
		height: 100%;
	}

	body {
		width: 100%;
		height: 100%;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		padding: 0;
	}

	ul,
	ol,
	li {
		padding-left: 0;
		list-style-type: none;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	a,
	button {
		cursor: pointer;
	}

	button,
	input,
	select,
	textarea {
		background-color: transparent;
		border: 0;

		&:focus {
			outline: none;
			box-shadow: none;
		}
	}

	select {
		appearance: none;
		-moz-appearance: none;
		-webkit-appearance: none;
	}

	::-moz-selection {
		background: var(--color-green-10);
	}

	::selection {
		background: var(--color-green-10);
	}

	@media (prefers-reduced-motion) {
		.underlined:after {
			opacity: 0;
			transition: opacity 0.25s ease;
		}

		.underlined:hover:after,
		.underlined:focus:after,
		.active.underlined:after {
			opacity: 1;
		}
	}

	.skeleton-loading {
		position: relative;
		overflow: hidden;

		@keyframes loading {
			0% {
				transform: translateX(0);
			}
			50%,
			100% {
				transform: translateX(460px);
			}
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 45px;
			height: 100%;
			background: var(--linear-gradient);
			animation: loading 2s infinite linear;
		}
	}
`;

export default GlobalStyle;
