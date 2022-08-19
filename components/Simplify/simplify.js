import React from 'react';
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
                </Button>
            </Container>
            <BgSimplify widthScreen={widthScreen} aria-hidden="true">
                {mobile ? <BgSimplifyMobile /> : <BgReview />}
            </BgSimplify>
            {!mobile && (
                <BgSimplifyUp aria-hidden="true">
                    <BgReview />
                </BgSimplifyUp>
            )}
        </SimplifyContainer>
    );
}

export default Simplify;
