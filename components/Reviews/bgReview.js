import { useTheme } from 'styled-components';

export const BgReview = () => {
    const theme = useTheme();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
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
