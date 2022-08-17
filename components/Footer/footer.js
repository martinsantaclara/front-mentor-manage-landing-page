import React from 'react';
import { useForm } from 'react-hook-form';

import Link from 'next/link';
import Image from 'next/image';
import {
    FaFacebookSquare,
    FaYoutube,
    FaTwitter,
    FaPinterest,
    FaInstagram,
} from 'react-icons/fa';
import { ButtonFooter, Container } from '../../styles/globals';
import {
    Copyright,
    FooterBody,
    FooterContainer,
    FooterForm,
    FooterIcons,
    FooterLogo,
    InputFooter,
    InputFooterError,
    ItemsLeft,
    ItemsRight,
    LogoSocialIcons,
    NavItem,
    Youtube,
} from './footerStyles';
import { NavLink } from '../Header/headerStyles';

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
                direction={'column'}
                width={'87%'}
                align={''}
            >
                <FooterBody>
                    <FooterForm onSubmit={handleSubmit(onSubmit)}>
                        <InputFooter
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
                        <InputFooterError mobile={mobile}>
                            {errors.email?.message}
                        </InputFooterError>

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
                    <NavItem mobile={mobile}>
                        <ItemsLeft>
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
                        </ItemsLeft>
                        <ItemsRight>
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
                        </ItemsRight>
                    </NavItem>
                    <LogoSocialIcons>
                        <FooterIcons mobile={mobile}>
                            <FaFacebookSquare className="social-icon"></FaFacebookSquare>
                            <Youtube mobile={mobile}>
                                <FaYoutube className="icon-youtube"></FaYoutube>
                            </Youtube>
                            <FaTwitter className="social-icon"></FaTwitter>
                            <FaPinterest className="social-icon"></FaPinterest>
                            <FaInstagram className="social-icon"></FaInstagram>
                        </FooterIcons>
                        <FooterLogo mobile={mobile}>
                            <Image
                                src="/images/footer-logo.svg"
                                alt="Footer Manage Logo"
                                width="158px"
                                height="26px"
                            ></Image>
                        </FooterLogo>
                    </LogoSocialIcons>
                </FooterBody>
                <Copyright>Copyright 2020. All Rights Reserved</Copyright>
            </Container>
        </FooterContainer>
    );
}

export default Footer;
