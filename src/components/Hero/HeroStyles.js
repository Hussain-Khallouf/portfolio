import styled from 'styled-components';

export const Img = styled.img`
  position: absolute;
  width:350px;
  height:350px;
  top: 100px;
  right: 50px;
  object-fit: cover;
  overflow: hidden;
`

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
