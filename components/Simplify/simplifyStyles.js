import styled from 'styled-components';

export const SimplifyContainer = styled.section`
    margin-top: ${({ mobile }) =>
        mobile ? '1.375rem' : 'clamp(3rem, 19.64vw - 6.43rem, 11.25rem)'};
    padding: ${({ mobile }) =>
        mobile ? '5.6875rem 0 4.4375rem' : '4.125rem 0'};
    background-color: ${({ theme }) => theme.primary};
    position: relative;
    overflow: hidden;
`;

export const SimplifyTitle = styled.h1`
    font-weight: ${({ theme }) => theme.fwHeading_lg};
    font-size: ${({ theme }) => theme.fsHeading_lg}rem;
    line-height: ${({ mobile }) => (mobile ? '1.25' : '1.1')};
    text-align: ${({ mobile }) => (mobile ? 'center' : 'left')};
    letter-spacing: ${({ mobile }) => (mobile ? '-1px' : '-0.7142px')};
    color: ${({ theme }) => theme.onSecondary1};
    margin: ${({ mobile }) => (mobile ? '0 0 9px' : '0 0 0 9px')};
    max-width: ${({ mobile }) => (!mobile ? '31.25rem' : '')};
`;

export const BgSimplify = styled.div`
    position: absolute;
    top: 3.75rem;

    @media ${({ theme }) => theme.breakpoints.md} {
        opacity: 0.1;
        width: clamp(27.3rem, 56.1vw + 0.38rem, 50.875rem);
        top: -2.375rem;
        left: ${({ widthScreen }) =>
            `max(${100 - ((widthScreen - 768) / 672) * 90}px, 0.625rem)`};
    }
`;

export const BgSimplifyUp = styled.div`
    position: absolute;
    opacity: 0.1;
    top: -28.5rem;
    width: clamp(35rem, 5.95vw + 32.14rem, 37.5rem);
    right: -23.0625rem;
`;
