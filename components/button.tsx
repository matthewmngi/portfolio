import React from 'react';

export type ButtonVariant = 'primary' | 'link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    href?: string;
    children: React.ReactNode;
}

const styles = {
    btn: {
        fontFamily: "'Crimson Text', Georgia, serif",
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        textDecoration: 'none',
        display: 'inline-block',
        border: 'none',
    } as React.CSSProperties,

    primary: {
        backgroundColor: '#242424',
        color: '#e8e8e8',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#333333',
        padding: '10px 20px',
        borderRadius: '4px',
    } as React.CSSProperties,

    link: {
        background: 'none',
        color: '#a0a0a0',
        padding: '10px 0',
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        textDecorationColor: '#333333',
    } as React.CSSProperties,
};

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    href,
    children,
    className = '',
    style,
    ...props
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const buttonStyle = {
        ...styles.btn,
        ...(variant === 'primary' ? styles.primary : styles.link),
        ...(isHovered && variant === 'primary' && {
            backgroundColor: '#2a2a2a',
            borderColor: '#444444',
        }),
        ...(isHovered && variant === 'link' && {
            color: '#e8e8e8',
            textDecorationColor: '#a0a0a0',
        }),
        ...style,
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    if (href) {
        return (
            <a
                href={href}
                style={buttonStyle}
                className={className}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            style={buttonStyle}
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </button>
    );
};