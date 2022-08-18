import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Button } from '../../styles/globals';
import {
    BgSimplify,
    BgSimplifyUp,
    SimplifyContainer,
    SimplifyTitle,
} from './simplifyStyles';
import { BgReview } from '../Reviews/bgReview';
import { BgSimplifyMobile } from './bgSimplifyMobile';

function Simplify({ mobile, widthScreen }) {
    return (
        <SimplifyContainer mobile={mobile}>
            <Container
                mobile={mobile}
                flxdirection={mobile ? 'column' : 'row'}
                widthComponent={'87%'}
                align={'center'}
            >
                <SimplifyTitle mobile={mobile}>
                    Simplify how your team works today.
                </SimplifyTitle>
                <Button
                    align={'center'}
                    margin={
                        mobile ? '1.25rem 0' : '1.25rem 0.3125rem 1.25rem 0'
                    }
                    inverted
                >
                    <Link href="/started">
                        <a href="">Get Started</a>
                    </Link>
                    {/* Get Started */}
                </Button>
            </Container>
            <BgSimplify widthScreen={widthScreen} aria-hidden="true">
                {mobile ? <BgSimplifyMobile /> : <BgReview />}
                {/* 
                <Image
                    src={`/images/bg-${
                        mobile ? 'simplify-section-mobile' : 'tablet-pattern'
                    }.svg`}
                    width={`${mobile ? '94px' : '814px'}`}
                    height={`${mobile ? '302px' : '814px'}`}
                    alt=""
                ></Image> */}
            </BgSimplify>
            {!mobile && (
                <BgSimplifyUp aria-hidden="true">
                    <BgReview />
                    {/* <Image
                        src="/images/bg-tablet-pattern.svg"
                        width="814px"
                        height="814px"
                        alt=""
                    ></Image> */}
                </BgSimplifyUp>
            )}
        </SimplifyContainer>
    );
}

export default Simplify;
