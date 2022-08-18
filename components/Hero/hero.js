import React from 'react';
import Image from 'next/image';
import {
    BgHeroContent,
    ContainerHeroImage,
    HeroContainer,
    HeroContent,
    HeroDescription,
    HeroTitle,
} from './heroStyles';
import { Container, Button } from '../../styles/globals';
import { RightHeroSvg } from './rightHeroSvg';
import { HeroIllustration } from './heroIllustration';

function Hero({ mobile, widthScreen }) {
    const rightBgHeroContent =
        widthScreen < 630 ? 0 : (widthScreen - 630) * 0.52;
    return (
        <HeroContainer mobile={mobile}>
            <Container
                mobile={mobile}
                flxdirection={mobile ? 'column' : 'row-reverse'}
                widthComponent={'87%'}
                align={mobile ? 'center' : 'start'}
            >
                <ContainerHeroImage mobile={mobile}>
                    <HeroIllustration></HeroIllustration>
                    {/* <Image
                        width={540}
                        height={485}
                        alt="hero-illustration"
                        src="/images/illustration-intro1.svg"
                    ></Image> */}
                </ContainerHeroImage>
                <HeroContent mobile={mobile}>
                    <HeroTitle mobile={mobile}>
                        Bring everyone together to build better products.
                    </HeroTitle>
                    <HeroDescription mobile={mobile}>
                        Manage makes it simple for software teams to plan
                        day-to-day tasks while keeping the larger team goals in
                        view.
                    </HeroDescription>
                    <Button
                        align={mobile ? 'center' : 'flex-start'}
                        margin={mobile ? '1.25rem 0' : '0'}
                    >
                        Get Started
                    </Button>
                    <BgHeroContent
                        mobile={mobile}
                        right={rightBgHeroContent}
                        aria-hidden="true"
                    >
                        <RightHeroSvg />
                    </BgHeroContent>
                </HeroContent>
            </Container>
        </HeroContainer>
    );
}

export default Hero;
