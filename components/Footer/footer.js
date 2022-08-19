import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

import { ButtonFooter, Container } from '../../styles/globals';
import {
    Copyright,
    Facebook,
    FooterBody,
    FooterContainer,
    FooterForm,
    FooterIcons,
    FooterLogo,
    FooterInput,
    FooterInputError,
    Instagram,
    LeftNavItems,
    RightNavItems,
    LogoSocialIcons,
    NavItems,
    Pinterest,
    Twitter,
    YoutubeWrapper,
    Youtube,
} from './footerStyles';
import { NavLink } from '../Header/headerStyles';
import { FooterLogoSvg } from './footerLogoSvg';

function Footer({ mobile }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <FooterContainer mobile={mobile}>
            <Container
                mobile={mobile}
                flxdirection={'column'}
                widthComponent={'87%'}
                align={''}
            >
                <FooterBody>
                    <FooterForm onSubmit={handleSubmit(onSubmit)}>
                        <FooterInput
                            mobile={mobile}
                            name="email"
                            type="text"
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Email required',
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Please insert a valid email',
                                },
                            })}
                            placeholder="Updates in your inbox..."
                        />
                        <FooterInputError mobile={mobile}>
                            {errors.email?.message}
                        </FooterInputError>

                        <ButtonFooter
                            mobile={mobile}
                            align={mobile ? 'center' : 'flex-start'}
                            margin={
                                mobile
                                    ? '0 0 0 clamp(0.5rem, 7.11vw - 1.17rem, 1.5rem)'
                                    : '0 0 0 0.5rem'
                            }
                            type="submit"
                        >
                            Go
                        </ButtonFooter>
                    </FooterForm>
                    <NavItems mobile={mobile}>
                        <LeftNavItems>
                            <Link href="/">
                                <NavLink mobile={mobile} linkFooter>
                                    Home
                                </NavLink>
                            </Link>
                            <Link href="/pricing">
                                <NavLink mobile={mobile} linkFooter>
                                    Pricing
                                </NavLink>
                            </Link>

                            <Link href="/products">
                                <NavLink mobile={mobile} linkFooter>
                                    Products
                                </NavLink>
                            </Link>
                            <Link href="/about">
                                <NavLink mobile={mobile} linkFooter lastChild>
                                    About Us
                                </NavLink>
                            </Link>
                        </LeftNavItems>
                        <RightNavItems>
                            <Link href="/careers">
                                <NavLink mobile={mobile} linkFooter>
                                    Careers
                                </NavLink>
                            </Link>
                            <Link href="/community">
                                <NavLink mobile={mobile} linkFooter>
                                    Community
                                </NavLink>
                            </Link>
                            <Link href="/policy">
                                <NavLink mobile={mobile} linkFooter>
                                    Privacy Policy
                                </NavLink>
                            </Link>
                        </RightNavItems>
                    </NavItems>
                    <LogoSocialIcons>
                        <FooterIcons mobile={mobile}>
                            <Facebook />
                            <YoutubeWrapper mobile={mobile}>
                                <Youtube />
                            </YoutubeWrapper>
                            <Twitter />
                            <Pinterest />
                            <Instagram />
                        </FooterIcons>
                        <FooterLogo mobile={mobile}>
                            <FooterLogoSvg />
                        </FooterLogo>
                    </LogoSocialIcons>
                </FooterBody>
                <Copyright>Copyright 2020. All Rights Reserved</Copyright>
            </Container>
        </FooterContainer>
    );
}

export default Footer;
