import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Container } from '../../styles/globals';
import {
    BgLeftReviews,
    ItemReview,
    ItemReviewDesktop,
    ItemsReviewStyle,
    OnlyMargin,
    ReviewBtn,
    ReviewBtns,
    ReviewDescription,
    ReviewImage,
    ReviewName,
    ReviewsContainer,
    ReviewsTitle,
} from './reviewsStyles';

const positionCalc = (widthScreen) => {
    const pos = Math.floor((widthScreen / 2 - 300) / 570);
    return pos;
};

const Reviews = ({ mobile, widthScreen }) => {
    const [itemIndex, setItemIndex] = useState(1);
    const [count, setCount] = useState(1);
    const [position, setPosition] = useState(positionCalc(widthScreen));

    const ItemsReview = [
        {
            name: 'Anisha Li',
            image: 'anisha',
            description:
                '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
        },
        {
            name: 'Ali Bravo',
            image: 'ali',
            description:
                '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
        },
        {
            name: 'Richard Watts',
            image: 'richard',
            description:
                '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
        },
        {
            name: 'Shanai Gough',
            image: 'shanai',
            description:
                '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
        },
    ];

    useEffect(() => {
        if (!mobile) {
            const interval = setInterval(() => {
                let newPosition = position + count;

                // ancho review de 540
                const left = widthScreen / 2 - 840 - 570 * newPosition;
                const offsetReview = 570 * ItemsReview.length - 30 + left;

                // ancho review de 340
                // const left = widthScreen / 2 - 540 - 370 * newPosition;
                // const offsetReview = 370 * ItemsReview.length - 30 + left;

                if (count === -1 && left > widthScreen) {
                    newPosition = position + 1;
                    setCount(1);
                } else if (count === 1 && offsetReview < 0) {
                    newPosition = position - 1;
                    setCount(-1);
                }
                setPosition(newPosition);
            }, 7500);

            return () => clearInterval(interval);
        }
    });

    return (
        <ReviewsContainer id="reviews">
            <Container
                mobile={mobile}
                direction={'column'}
                width={'100%'}
                align={''}
                reviews
            >
                <BgLeftReviews widthScreen={widthScreen} aria-hidden="true">
                    <Image
                        src="/images/bg-tablet-pattern.svg"
                        alt=""
                        width="814px"
                        height="814px"
                    ></Image>
                </BgLeftReviews>
                <ReviewsTitle mobile={mobile}>What they’ve said</ReviewsTitle>
                <ItemsReviewStyle
                    mobile={mobile}
                    widthScreen={widthScreen}
                    position={position}
                >
                    {ItemsReview.map((item, index) => {
                        return (
                            <ItemReviewDesktop mobile={mobile} key={item.name}>
                                <ItemReview
                                    show={itemIndex === index || !mobile}
                                >
                                    <ReviewImage>
                                        <Image
                                            src={`/images/avatar-${item.image}.png`}
                                            width="72px"
                                            height="72px"
                                            alt={`avatar-${item.image}`}
                                        ></Image>
                                    </ReviewImage>
                                    <ReviewName>{item.name}</ReviewName>
                                    <ReviewDescription mobile={mobile}>
                                        {item.description}
                                    </ReviewDescription>
                                </ItemReview>
                                {!mobile && <OnlyMargin></OnlyMargin>}
                            </ItemReviewDesktop>
                        );
                    })}
                </ItemsReviewStyle>
                {mobile && (
                    <ReviewBtns>
                        {ItemsReview.map((item, index) => (
                            <ReviewBtn
                                active={itemIndex === index}
                                key={item.name}
                                href="#reviews"
                                onClick={() => setItemIndex(index)}
                            ></ReviewBtn>
                        ))}
                    </ReviewBtns>
                )}
                <Button
                    align={'center'}
                    margin={mobile ? '1.25rem 0' : '3rem 0 0'}
                >
                    Get Started
                </Button>
            </Container>
        </ReviewsContainer>
    );
};

export default Reviews;
