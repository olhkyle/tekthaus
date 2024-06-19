import { HTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	type?: 'button' | 'submit';
	disabled?: boolean;
	onClick?: () => void;
	children?: ReactNode;
	padding?: string;
	width?: string;
	height?: string;
	color?: string;
	backgroundColor?: string;
	borderRadius?: string;
}

const Button = ({
	type = 'button',
	disabled = false,
	onClick,
	children,
	padding,
	width,
	height,
	color = 'var(--black)',
	backgroundColor = 'var(--white)',
	borderRadius = 'var(--radius-s)',
	...props
}: ButtonProps) => {
	return (
		<button
			type={type}
			css={{ flex: 'inline-flex', justifyContent: 'center', alignItems: 'center', padding, color, backgroundColor, borderRadius }}
			disabled={disabled}
			onClick={onClick}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
