import styled from 'styled-components';

export const FeaturesContainer = styled.section`
    padding-top: ${({ mobile }) => (mobile ? '1.625rem' : '3.3125rem')};
`;

export const FeatureHeadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({ mobile }) =>
        mobile ? '' : 'clamp(19.75rem, 19.2vw + 10.54rem, 27.81rem)'};
`;

export const FeatureHead = styled.div`
    margin: ${({ mobile }) => (mobile ? '0 1.5rem' : '0rem')};
    max-width: 29.6875rem;
`;

export const FeatureTitle = styled.h1`
    color: ${({ theme }) => theme.clrHeading};
    position: relative;
    font-size: ${({ mobile, theme }) =>
        mobile
            ? `${theme.fsHeading_sm}rem`
            : `clamp(${theme.fsHeading_md}rem, ${
                  (((theme.fsHeading_lg - theme.fsHeading_md) * 16) / 672) * 100
              }vw + ${
                  (1440 * theme.fsHeading_md - 768 * theme.fsHeading_lg) / 672
              }rem, ${theme.fsHeading_lg}rem)`};
    font-weight: ${({ mobile, theme }) =>
        mobile ? theme.fwHeading_sm : theme.fwHeading_lg};
    letter-spacing: ${({ mobile }) => (mobile ? '-0.62px' : '-0.71px')};
    line-height: ${({ mobile }) => (mobile ? '1.5' : '1.1')};
    text-align: ${({ mobile }) => (mobile ? 'center' : 'left')};
    padding: ${({ mobile }) => (mobile ? '0 1rem' : '0rem')};
`;

export const FeatureDescription = styled.p`
    color: ${({ theme }) => theme.onBackgroundOpacity};
    font-size: ${({ mobile, theme }) =>
        mobile
            ? `${theme.fsText_s}rem`
            : `clamp(${theme.fsText_s}rem, ${
                  (((theme.fsText_lg - theme.fsText_s) * 16) / 672) * 100
              }vw + ${
                  (1440 * theme.fsText_s - 768 * theme.fsText_lg) / 672
              }rem, ${theme.fsText_lg}rem)`};
    font-weight: ${({ theme }) => theme.fwRegular};
    line-height: ${({ mobile }) =>
        mobile ? '2' : 'clamp(1.25rem, 0.89vw + 0.82rem, 1.625rem)'};
    width: 90%;
    text-align: ${({ mobile }) => (mobile ? 'center' : 'left')};
    align-self: center;
    margin: ${({ mobile }) =>
        mobile
            ? '0.8125rem auto 3.375rem'
            : 'clamp(1rem, 1.19vw + 0.43rem, 1.5rem) 0 3.375rem'};
    max-width: ${({ mobile }) => (mobile ? '23.4375rem' : '21.875rem')};
`;

export const ItemsFeatures = styled.div`
    margin-left: ${({ widthScreen }) => (widthScreen > 480 ? '0rem' : '1rem')};
    display: flex;
    flex-direction: column;
    align-items: ${({ mobile }) => (mobile ? 'center' : 'flex-start')};
    width: ${({ mobile }) => (mobile ? '' : '48.65%')};
    max-width: ${({ mobile }) => (mobile ? '' : '33.75rem')};
`;

export const ItemFeature = styled.div`
    width: 100%;
    max-width: 28.125rem;
    margin-bottom: ${({ mobile }) => (mobile ? '3rem' : '2.5rem')};
`;

export const ItemFeatureHead = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ mobile, theme }) =>
        mobile ? theme.primaryLight : 'transparent'};
    /* width: 450px; */
    border-radius: ${({ widthScreen, mobile }) =>
        widthScreen > 480
            ? mobile
                ? '1.25rem'
                : '0px'
            : '1.25rem 0 0 1.25rem'};
`;

export const ItemFeatureNumber = styled.div`
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwBold};
    line-height: 1.5;
    color: ${({ theme }) => theme.onPrimary1};
    background-color: ${({ theme }) => theme.primary};
    padding: 0.5rem 1.55rem;
    border-radius: 1.25rem;
    align-self: center;
    letter-spacing: -0.29px;
`;

export const ItemFeatureTitle = styled.p`
    color: ${({ theme, mobile, dark }) =>
        mobile && dark ? theme.background : theme.onBackground};
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwBold};
    line-height: 1.5;
    letter-spacing: -0.8px;
    padding-left: ${({ mobile }) =>
        mobile
            ? 'clamp(1rem, 38.4vw - 9rem, 4rem)'
            : 'clamp(1rem, 1.79vw + 0.14rem, 1.75rem)'};
`;

export const ItemFeatureDescription = styled.p`
    color: ${({ theme }) => theme.onBackgroundOpacity};
    font-size: ${({ mobile, theme }) =>
        mobile
            ? `${theme.fsText_s}rem`
            : `clamp(${theme.fsText_s}rem, ${
                  (((theme.fsText_lg - theme.fsText_s) * 16) / 672) * 100
              }vw + ${
                  (1440 * theme.fsText_s - 768 * theme.fsText_lg) / 672
              }rem, ${theme.fsText_lg}rem)`};
    font-weight: ${({ theme }) => theme.fwRegular};
    line-height: ${({ mobile }) =>
        mobile ? '2' : 'clamp(1.25rem, 0.89vw + 0.82rem, 1.625rem)'};
    width: ${({ mobile }) => (mobile ? '96%' : '100%')};
    max-width: ${({ mobile }) => (mobile ? '25rem' : '28.125rem')};
    margin: 0.5rem auto 0;

    margin-left: ${({ mobile }) =>
        mobile ? '' : 'clamp(1.25rem, 11.16vw - 4.11rem, 5.9375rem)'};
`;
