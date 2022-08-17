import styled from 'styled-components';

export const BgRightCorner = styled.div`
    position: absolute;
    top: ${({ mobile }) => (mobile ? '0' : '-7.0625rem')};
    right: ${({ mobile }) =>
        mobile ? '0' : 'clamp(-13.125rem, 14vw - 19.84rem, -7.25rem)'};
    @media ${({ theme }) => theme.breakpoints.xxl} {
        right: clamp(-7.25rem, 45.83vw - 48.5rem, -4.5rem);
    }
`;
