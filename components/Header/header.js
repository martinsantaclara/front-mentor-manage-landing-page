import React from 'react';
import Link from 'next/link';
import {
    BgMobileMenu,
    DesktopMenu,
    Hamburger,
    HeaderContainer,
    LogoWrapper,
} from './headerStyles';
import NavLinks from './navlinks';
import { Container, MobileMenuContainer, Button } from '../../styles/globals';
import Logo from './logo';
import { HamburgerClose, HamburgerMenu } from './hamburger';

function Header({ mobile, mobileMenu, setMobileMenu }) {
    return (
        <HeaderContainer mobile={mobile}>
            <Container
                mobile={mobile}
                flxdirection={'row'}
                widthComponent={'87%'}
                align={'center'}
            >
                <Link href="/">
                    <LogoWrapper>
                        <Logo mobile={mobile} />
                    </LogoWrapper>
                </Link>
                {!mobile && (
                    <DesktopMenu>
                        <NavLinks mobile={mobile} flxdirection={'row'} />
                        <Button
                            align={mobile ? 'center' : 'flex-start'}
                            margin={mobile ? '1.25rem 0' : '0'}
                        >
                            <Link href="/started">
                                <a href="">Get Started</a>
                            </Link>
                        </Button>
                    </DesktopMenu>
                )}
                {mobile && !mobileMenu && (
                    <Hamburger onClick={() => setMobileMenu(true)}>
                        <HamburgerMenu />
                    </Hamburger>
                )}
                {mobile && mobileMenu && (
                    <Hamburger onClick={() => setMobileMenu(false)}>
                        <HamburgerClose />
                    </Hamburger>
                )}
            </Container>

            {mobile && mobileMenu && (
                <BgMobileMenu>
                    <MobileMenuContainer>
                        <NavLinks mobile={mobile} flxdirection={'column'} />
                    </MobileMenuContainer>
                </BgMobileMenu>
            )}
        </HeaderContainer>
    );
}

export default Header;
