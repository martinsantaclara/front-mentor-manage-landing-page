import { useTheme } from 'styled-components';

export const UpperCornerMobile = () => {
    const theme = useTheme();
    return (
        <svg
            width="319"
            height="342"
            viewBox="0 0 319 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width="244"
                height="542"
                rx="122"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 505.893 8.64111)"
                fill={theme.primaryLight}
            />
        </svg>
    );
};

export const UpperCornerDesktop = () => {
    const theme = useTheme();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={`clamp(${36.5625}rem, ${26.04}vw + ${24.0625}rem, ${47.5}rem)`}
            height={`clamp(${36.5625}rem, ${26.04}vw + ${24.0625}rem, ${47.5}rem)`}
            viewBox="0 0 814 814"
        >
            <rect
                width="436"
                height="970"
                x="774"
                y="-62"
                fill={theme.primaryLight}
                fillRule="evenodd"
                rx="218"
                transform="rotate(45 718.814 -291.157)"
            />
        </svg>
    );
};
