import React from 'react';
import Image from 'next/image';
import { Container, Button } from '../../styles/globals';
import {
    BgSimplify,
    BgSimplifyUp,
    SimplifyContainer,
    SimplifyTitle,
} from './simplifyStyles';

function Simplify({ mobile, widthScreen }) {
    return (
        <SimplifyContainer mobile={mobile}>
            <Container
                mobile={mobile}
                direction={mobile ? 'column' : 'row'}
                width={'87%'}
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
                    Get Started
                </Button>
            </Container>
            <BgSimplify widthScreen={widthScreen} aria-hidden="true">
                <Image
                    src={`/images/bg-${
                        mobile ? 'simplify-section-mobile' : 'tablet-pattern'
                    }.svg`}
                    width={`${mobile ? '94px' : '814px'}`}
                    height={`${mobile ? '302px' : '814px'}`}
                    alt=""
                ></Image>
            </BgSimplify>
            {!mobile && (
                <BgSimplifyUp aria-hidden="true">
                    <Image
                        src="/images/bg-tablet-pattern.svg"
                        width="814px"
                        height="814px"
                        alt=""
                    ></Image>
                </BgSimplifyUp>
            )}
        </SimplifyContainer>
    );
}

export default Simplify;
