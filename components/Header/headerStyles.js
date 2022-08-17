import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: ${({ mobile }) => (mobile ? '2.5rem 0' : ' 3.5rem 0 2.5rem')};
    background-color: ${({ theme }) => theme.background};
`;

export const NavLink = styled.a`
    display: ${({ linkFooter }) => (linkFooter ? 'block' : 'inline-block')};
    font-size: ${({ mobile, theme, linkFooter }) =>
        linkFooter
            ? theme.fsText_md
            : mobile
            ? theme.fsText_lg
            : theme.fsText_xs}rem;
    font-weight: ${({ mobile, theme, linkFooter }) =>
        linkFooter ? theme.fwRegular : mobile ? theme.fwBold : theme.fwMedium};
    line-height: 1.5;
    letter-spacing: ${({ linkFooter }) => (linkFooter ? '-0.5px' : '-0.29px')};
    color: ${({ theme, linkFooter }) =>
        linkFooter ? theme.onSecondary1 : theme.onBackground};
    margin-bottom: ${({ mobile, linkFooter, lastChild }) =>
        linkFooter ? (lastChild ? 0 : 0.8125) : mobile ? 1.5 : 0}rem;
    margin-left: ${({ mobile, linkFooter }) =>
        mobile || linkFooter ? 0 : 'clamp(0.5rem, 7vw - 2.87rem, 2rem)'};
    cursor: pointer;
    &:hover {
        color: ${({ theme, linkFooter }) =>
            linkFooter ? theme.onSecondaryHover : theme.onBackgroundOpacity};
    }
    &:first-child {
        margin-left: 0;
    }
    &:nth-last-child(1) {
        margin-bottom: ${({ linkFooter }) => (linkFooter ? '' : 0)};
    }
`;

export const Links = styled.nav`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

export const WrapperLogo = styled.a`
    position: relative;
    top: 0.3125rem;
    cursor: pointer;
`;

export const DesktopMenu = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`;

export const Hamburger = styled.div`
    z-index: 2;
    cursor: pointer;
`;

export const BgMobileMenu = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: linear-gradient(
        hsla(0, 0%, 0%, 0),
        hsla(0, 0%, 0%, 0.6),
        hsla(0, 0%, 59%, 0.8)
    );
    z-index: 1;
`;
