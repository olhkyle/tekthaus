import { CSSProperties, HTMLAttributes } from 'react';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
	display?: 'flex' | 'inline-flex';
	direction?: 'row' | 'column';
	gap?: `${string}px` | `${string}rem`;
	justifyContent?: CSSProperties['justifyContent'];
	alignItems?: CSSProperties['alignItems'];
	margin?: string;
	padding?: string;
	width?: string;
	height?: string;
}

const Flex = ({
	display = 'flex',
	direction = 'row',
	gap = '0px',
	justifyContent = 'flex-start',
	alignItems = 'center',
	margin = '0',
	padding = '0',
	...props
}: FlexProps) => {
	return (
		<div
			css={{
				display,
				flexDirection: direction,
				gap,
				justifyContent,
				alignItems,
				margin,
				padding,
			}}
			{...props}
		/>
	);
};

export default Flex;
