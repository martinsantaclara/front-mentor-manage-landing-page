import React from 'react';
import { Container } from '../../styles/globals';
import {
    FeatureDescription,
    FeatureHead,
    FeatureHeadWrapper,
    FeaturesContainer,
    FeatureTitle,
    ItemFeature,
    ItemFeatureDescription,
    ItemFeatureHead,
    ItemFeatureNumber,
    ItemFeatureTitle,
    ItemsFeatures,
} from './featuresStyles';

function Features({ mobile, widthScreen, dark }) {
    const itemsFeature = [
        {
            number: '01',
            title: 'Track company-wide progress',
            description:
                'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
        },
        {
            number: '02',
            title: 'Advanced built-in reports',
            description:
                'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
        },
        {
            number: '03',
            title: 'Everything you need in one place',
            description:
                'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
        },
    ];

    return (
        <FeaturesContainer mobile={mobile}>
            <Container
                mobile={mobile}
                direction={mobile ? 'column' : 'row'}
                width={mobile ? '100%' : '87%'}
                align={''}
            >
                <FeatureHeadWrapper mobile={mobile}>
                    <FeatureHead mobile={mobile}>
                        <FeatureTitle mobile={mobile}>
                            What’s different about Manage?
                        </FeatureTitle>
                        <FeatureDescription mobile={mobile}>
                            {' '}
                            Manage provides all the functionality your team
                            needs, without the complexity. Our software is
                            tailor-made for modern digital product teams.{' '}
                        </FeatureDescription>
                    </FeatureHead>
                </FeatureHeadWrapper>
                <ItemsFeatures widthScreen={widthScreen} mobile={mobile}>
                    {itemsFeature.map((feature, index) => {
                        return (
                            <ItemFeature mobile={mobile} key={feature.number}>
                                <ItemFeatureHead
                                    widthScreen={widthScreen}
                                    mobile={mobile}
                                >
                                    <ItemFeatureNumber>
                                        {feature.number}
                                    </ItemFeatureNumber>
                                    <ItemFeatureTitle
                                        mobile={mobile}
                                        dark={dark}
                                    >
                                        {feature.title}
                                    </ItemFeatureTitle>
                                </ItemFeatureHead>
                                <ItemFeatureDescription mobile={mobile}>
                                    {feature.description}
                                </ItemFeatureDescription>
                            </ItemFeature>
                        );
                    })}
                </ItemsFeatures>
            </Container>
        </FeaturesContainer>
    );
}

export default Features;
