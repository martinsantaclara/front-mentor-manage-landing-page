import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    align-items: ${({ align }) => align};
    width: ${({ width }) => width};
    max-width: ${({ mobile, reviews }) =>
        mobile ? '31.25rem' : reviews ? '' : '69.375rem'};
    margin: 0 auto;
`;

export const ContainerMobileMenu = styled.div`
    margin: 0 auto;
    width: 87%;
    display: flex;
    justify-content: space-between;
    top: 6.4375rem;
    position: relative;
    background-color: ${({ theme }) => theme.surface};
    flex-direction: column;
    padding: 2.5rem 0;
    max-width: 25rem;
`;

export const Button = styled.button`
    position: relative;
    font-size: ${({ theme }) => theme.fsText_xs}rem;
    font-weight: ${({ theme }) => theme.fwBold};
    line-height: 1.4;
    color: ${({ theme, inverted }) =>
        inverted ? theme.btnInvertedClr : theme.btnClr};
    background-color: ${({ theme, inverted }) =>
        inverted ? theme.btnInvertedBg : theme.btnBg};
    padding: 0.8125rem 1.875rem;
    align-self: ${({ align }) => align};
    margin: ${({ margin }) => margin};
    box-shadow: 0rem 0.9375rem 0.9375rem -0.625rem ${({ theme, inverted }) => (inverted ? theme.btnInvertedShadow : theme.btnShadow)};
    border-radius: 1.375rem;
    border: none;
    cursor: pointer;
    z-index: 1;

    &:hover {
        background-color: ${({ theme, inverted }) =>
            inverted ? theme.btnInvertedHoverBg : theme.btnHoverBg};
        color: ${({ theme, inverted }) =>
            inverted ? theme.btnInvertedHoverClr : theme.btnHoverClr};
    }
`;

export const ButtonFooter = styled(Button)`
    top: ${({ mobile }) => (mobile ? '2px' : '4px')};
    padding: 0.8125rem ${({ mobile }) => (mobile ? '1.875rem' : '1.45rem')};
    box-shadow: none;
`;
