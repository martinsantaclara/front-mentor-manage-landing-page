import React from 'react';
import Link from 'next/link';
import {
    BgHeroContent,
    HeroImageWrapper,
    HeroContainer,
    HeroContent,
    HeroDescription,
    HeroTitle,
} from './heroStyles';
import { Container, Button } from '../../styles/globals';
import { RightHeroSvg } from './rightHeroSvg';
import { HeroImage } from './heroImage';

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
                <HeroImageWrapper mobile={mobile}>
                    <HeroImage />
                </HeroImageWrapper>
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
                        <Link href="/started">
                            <a href="">Get Started</a>
                        </Link>
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
