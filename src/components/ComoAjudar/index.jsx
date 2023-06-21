import styled from "styled-components";
import { Container } from "@mui/material";

const QuemSomos = () => {
  return (
    <ArticleContainer>
      <Container>
        <Title>Como o Cofre TI pode te ajudar?</Title>
        <Informative>
          O COFRE TI é uma plataforma que disponibiliza artigos sobre produtos,
          servíços e afins, que estudantes de Tecnologia tem direito por serem
          estudantes. Mas os mesmo não sabem
        </Informative>
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

const Title = styled.h1`
  color: #fff;
  font-size: 44px;
  text-align: center;
  font-family: "Architects Daughter", cursive;
  margin-bottom: 100px;
`;

const Informative = styled.h4`
  color: #fff;
  text-align: center;
  margin-top: 20px;
  text-indent: 0;
  font-family: "Acme", sans-serif;
  font-size: 25px;
`;

export default QuemSomos;
