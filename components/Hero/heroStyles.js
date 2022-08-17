import styled from 'styled-components';

export const HeroContainer = styled.div`
    padding: ${({ mobile }) =>
        mobile
            ? '0.5rem 0 2rem 0'
            : 'clamp(1rem, 9.52vw - 3.57rem, 5rem) 0 3.35rem 0'};
`;

export const ContainerHeroImage = styled.div`
    width: ${({ mobile }) => (mobile ? '97.5%' : '48.65%')};
    max-width: ${({ mobile }) => (mobile ? '28.125rem' : '33.75rem')};
    align-self: ${({ mobile }) => (mobile ? '' : 'flex-start')};
`;

export const HeroContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.onBackground};
    text-align: ${({ mobile }) => (mobile ? 'center' : 'left')};
    padding: ${({ mobile }) =>
        mobile ? '15px 0' : 'clamp(0rem, 7.44vw - 3.57rem, 3.125rem) 0 0'};
    width: ${({ mobile }) =>
        mobile ? '' : 'clamp(19.75rem, 19.2vw + 10.54rem, 27.81rem)'};
`;

export const HeroTitle = styled.h1`
    font-family: ${({ theme }) => theme.ffHeading};
    color: ${({ theme }) => theme.clrHeading};
    font-size: ${({ mobile, theme }) =>
        mobile
            ? `${theme.fsHeading_lg}rem`
            : `clamp(${theme.fsHeading_lg}rem, ${
                  (((theme.fsHeading_xl - theme.fsHeading_lg) * 16) / 672) * 100
              }vw + ${
                  (1440 * theme.fsHeading_lg - 768 * theme.fsHeading_xl) / 672
              }rem, ${theme.fsHeading_xl}rem)`};
    font-weight: ${({ theme }) => theme.fwHeading_lg};
    line-height: 1.25;
    letter-spacing: ${({ mobile }) => (mobile ? '-1px' : '-2px')}; ;
`;

export const HeroDescription = styled.p`
    position: relative;
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ mobile, theme }) =>
        mobile ? theme.fwLight : theme.fwRegular};
    line-height: ${({ mobile }) => (mobile ? 1.75 : 1.625)};
    color: ${({ theme }) => theme.onBackgroundOpacity};
    padding: ${({ mobile }) =>
        mobile ? '0.625rem 0' : '1rem 0 clamp(1rem, 3.57vw - 0.71rem, 2.5rem)'};
    max-width: ${({ mobile }) => (mobile ? '25rem' : '21.875rem')};
    align-self: ${({ mobile }) => (mobile ? '' : 'flex-start')};
    z-index: 1;
`;

export const BgHeroContent = styled.div`
    position: absolute;
    right: ${({ right }) => -58 - right}px;
    top: 3.0625rem;
    display: ${({ mobile }) => (mobile ? 'block' : 'none')};
`;
