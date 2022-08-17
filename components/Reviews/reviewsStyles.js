import styled from 'styled-components';

export const ReviewsContainer = styled.section`
    position: relative;
    padding-top: clamp(0.625rem, 14.29vw - 6.23rem, 6.625rem);
`;

export const BgLeftReviews = styled.div`
    display: none;

    @media ${({ theme }) => theme.breakpoints.md} {
        display: block;
        position: absolute;
        top: ${({ widthScreen }) =>
            `max(${-270 - ((widthScreen - 768) / 672) * 120}px,-24.375rem)`};
        left: -33.0625rem;
        width: clamp(36.5625rem, 26.04vw + 24.0625rem, 47.5rem);
    }
`;

export const ReviewsTitle = styled.h1`
    color: ${({ theme }) => theme.clrHeading};
    font-size: ${({ mobile, theme }) =>
        mobile
            ? `${theme.fsHeading_md}rem`
            : `clamp(${theme.fsHeading_md}rem, ${
                  (((theme.fsHeading_lg - theme.fsHeading_md) * 16) / 672) * 100
              }vw + ${
                  (1440 * theme.fsHeading_md - 768 * theme.fsHeading_lg) / 672
              }rem, ${theme.fsHeading_lg}rem)`};
    font-weight: ${({ mobile, theme }) =>
        mobile ? theme.fwHeading_md : theme.fwHeading_lg};
    letter-spacing: ${({ mobile }) => (mobile ? '-0.66px' : '-0.71px')};
    line-height: ${({ mobile }) => (mobile ? '1.41' : '1.1')};
    text-align: center;
    padding-bottom: ${({ mobile }) =>
        mobile ? '6.125rem' : 'clamp(4.375rem, 4.46vw + 2.23rem, 6.25rem)'};
`;

// ancho review 540
// left: ${(props) => props.widthScreen / 2 - 840 - 570 * props.position}px;

// ancho review 340
// left: ${(props) => props.widthScreen / 2 - 540 - 370 * props.position}px;

export const ItemsReviewStyle = styled.div`
    margin: 0 1rem;

    @media ${({ theme }) => theme.breakpoints.md} {
        position: relative;
        display: flex;
        height: 13.9375rem;
        left: ${({ widthScreen, position }) =>
            widthScreen / 2 - 840 - 570 * position}px;
        transition: left 1s ease;
        margin: 0;
    }
`;

export const ItemReviewDesktop = styled.div`
    display: ${({ mobile }) => (!mobile ? 'flex' : '')};
`;

export const ItemReview = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.surface};
    padding-top: 3.75rem;
    display: ${({ show }) => (show ? 'block' : 'none')};

    @media ${({ theme }) => theme.breakpoints.md} {
        min-width: 33.75rem;
        max-width: 33.75rem;
    }
`;

export const ReviewImage = styled.div`
    position: absolute;
    top: -2.25rem;
    left: calc(50% - 1.875rem);
`;

export const ReviewName = styled.p`
    color: ${({ theme }) => theme.onBackground};
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwBold};
    text-align: center;
    line-height: 1.5;
    letter-spacing: -0.29px;
`;

export const ReviewDescription = styled.div`
    color: ${({ theme }) => theme.onBackgroundOpacity};
    padding: 1.1875rem 0 2.625rem 0;
    font-size: ${({ mobile, theme }) =>
        mobile ? theme.fsText_s : theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwRegular};
    line-height: 1.625;
    text-align: center;
    width: 87%;
    margin: 0 auto;
    max-width: ${({ mobile }) => (mobile ? '' : '28.9375rem')};
`;

export const OnlyMargin = styled.div`
    width: 1.875rem;
`;

export const ReviewBtns = styled.div`
    display: flex;
    justify-content: space-between;
    width: 13%;
    margin: 1.625rem auto 1.6875rem;
`;

export const ReviewBtn = styled.a`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: ${({ active, theme }) =>
        active ? theme.primary : theme.onPrimary1};
    border: 1px solid ${({ theme }) => theme.primary};
`;
