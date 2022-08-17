import styled from 'styled-components';

export const FooterContainer = styled.section`
    padding: ${({ mobile }) =>
        mobile
            ? '3.4375rem 0 1.625rem'
            : 'clamp(3.25rem, 1.49vw + 2.54rem, 3.875rem) 0'};
    background-color: ${({ theme }) => theme.secondary};
`;

export const FooterBody = styled.div`
    @media ${({ theme }) => theme.breakpoints.md} {
        display: flex;
        flex-direction: row-reverse;
    }
`;

export const FooterForm = styled.form`
    position: relative;
    display: flex;
    align-items: ${({ mobile }) => (mobile ? 'center' : 'flex-start')};
`;

export const InputFooter = styled.input`
    font-size: ${({ theme }) => theme.fsText_xs}rem;
    font-weight: ${({ theme }) => theme.fwRegular};
    line-height: 1.46;
    letter-spacing: -0.1px;
    color: ${({ theme }) => theme.onPlaceHolder};
    padding: 0.75rem 0 0.8125rem 1.5rem;
    border-radius: 1.375rem;
    width: ${({ mobile }) => (mobile ? '73.5%' : '12.5rem')};
    outline: ${({ theme }) => theme.onError};
    flex-grow: 1;
    border-size: 0px;

    &:active,
    &:focus {
        color: ${({ theme }) => theme.onError};
        border: 1px solid ${({ theme }) => theme.onError};
    }
`;

export const InputFooterError = styled.p`
    position: absolute;
    top: ${({ mobile }) => (mobile ? '3.25rem' : '3.4375rem')};
    left: 1rem;
    font-style: italic;
    font-size: ${({ theme }) => theme.fsText_xxs}rem;
    font-weight: ${({ theme }) => theme.fwRegular};
    line-height: 1.5;
    letter-spacing: -0.077px;
    color: ${({ theme }) => theme.onError};
`;

export const NavItem = styled.div`
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.onSecondary1};
    width: 80.642%;
    margin: ${({ mobile }) =>
        mobile
            ? '3.375rem auto 3.125rem'
            : ' 0 clamp(1.6875rem, 21.58vw - 8.67rem, 10.75rem) 0 clamp(1.6875rem, 14.58vw - 5.31rem, 7.8125rem)'};
    max-width: ${({ mobile }) => (mobile ? '21.875rem' : 'none')};
`;

export const ItemsLeft = styled.div``;

export const ItemsRight = styled.div``;

export const LogoSocialIcons = styled.div`
    @media ${({ theme }) => theme.breakpoints.md} {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    }
`;

export const FooterIcons = styled.div`
    display: flex;
    justify-content: ${({ mobile }) =>
        mobile ? 'space-around' : 'space-between'};

    width: ${({ mobile }) => (mobile ? '' : '9.625rem')};
`;

export const FooterLogo = styled.div`
    margin: ${({ mobile }) => (mobile ? '3.375rem auto 3.125rem' : '0')};
    text-align: center;

    width: ${({ mobile }) => (mobile ? '' : '9.1875rem')};
`;

export const Copyright = styled.p`
    font-size: ${({ theme }) => theme.fsText_xs}rem;
    font-weight: ${({ theme }) => theme.fwRegular};
    line-height: 1.46;
    letter-spacing: -0.2px;
    color: ${({ theme }) => theme.onSecondary2};
    text-align: center;

    @media ${({ theme }) => theme.breakpoints.md} {
        position: absolute;
        bottom: 0;
        right: 0;
    }
`;

export const Youtube = styled.div`
    position: relative;
    display: inline-flex;
    width: ${({ mobile }) => (mobile ? '2rem' : '1.25rem')};
    height: ${({ mobile }) => (mobile ? '2rem' : '1.25rem')};
    background-color: ${({ theme }) => theme.onSecondary1};
    border-radius: 50%;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${({ theme }) => theme.onSecondaryHover};
    }
`;
