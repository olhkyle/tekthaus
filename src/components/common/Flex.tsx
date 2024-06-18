import { HTMLAttributes } from 'react';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
	display?: 'flex' | 'inline-flex';
	direction?: 'row' | 'column';
	gap?: `${number}px` | `${number}rem`;
	justifyContent?: 'flex-start' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-end';
	alignItems?: 'flex-start' | 'center' | 'flex-end';
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
