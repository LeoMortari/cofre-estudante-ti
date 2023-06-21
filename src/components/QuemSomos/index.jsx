import styled from "styled-components";
import { Container } from "@mui/material";

const QuemSomos = () => {
  return (
    <ArticleContainer>
      <Container>
        <Title>QUEM SOMOS</Title>
        <Informative>
          Somos estudantes de Análise e Desenvolvimento de Sistemas, do primeiro
          e último ano do curso. Que tivemos essa motivação depois de vermos que
          existes vários serviços e recursos que é direito do estudante, e que
          as empresas disponibilizam muitas vezes de forma gratuita.
        </Informative>
      </Container>
    </ArticleContainer>
  );
};

const ArticleContainer = styled.article`
  background-color: #0b87f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 44px;
  text-align: center;
  font-family: "Doppio One", sans-serif;
  margin-bottom: 100px;
`;

const Informative = styled.h4`
  color: #fff;
  text-align: center;
  margin-top: 20px;
  text-indent: 0;
  font-family: "Alata", sans-serif;
  font-size: 25px;
`;

export default QuemSomos;
