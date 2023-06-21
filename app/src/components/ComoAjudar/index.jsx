import styled from "styled-components";
import { Container, Typography } from "@mui/material";

const QuemSomos = () => {
  return (
    <ArticleContainer>
      <Container>
        <Title variant="h1">Como o Cofre TI pode te ajudar?</Title>
        <LoremIpsum>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet
          urna nec ligula fermentum, et maximus elit rhoncus. Sed vestibulum
          convallis arcu, at pharetra metus iaculis vitae. Quisque varius magna
          ut metus cursus, in vulputate metus feugiat.
        </LoremIpsum>
      </Container>
    </ArticleContainer>
  );
};

const ArticleContainer = styled.article`
  background-color: #004b8f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled(Typography)`
  color: #fff;
  text-align: center;
`;

const LoremIpsum = styled.h4`
  color: #fff;
  text-align: center;
  margin-top: 20px;
`;

export default QuemSomos;
