import styled from "styled-components";

const Image = styled.div`
  width: ${(props) => props.sizeWidth};
  height: 230px;
  overflow: hidden;
  & img {
    width: 100%;
  }
`;

export default Image;
