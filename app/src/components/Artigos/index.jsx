import styled from "styled-components";
import { Container } from "@mui/material";

const Artigos = () => {
  return (
    <ArticleContainer>
      <Container>
        <Organize>
          <Left>
            <h3>Artigos</h3>
            <Explicacao>
              Os artigos presentes neste site são (e somente) de origem
              informativa. Não recebemos nada para publicar os tópicos. Todos os
              artigos encontram um passo a passo quando acessados.
            </Explicacao>
          </Left>
          <Right>
            <ul>
              <li>
                <a href="https://github.com/LeoMortari/cofre-estudante-ti/blob/master/GitHub%20Pro/githubPro.md">
                  GitHub Pro
                </a>
              </li>
            </ul>
          </Right>
        </Organize>
      </Container>
    </ArticleContainer>
  );
};

const Organize = styled.div`
  display: flex;
  gap: 20rem;
  font-size: 25px;
  margin-top: -10rem;

  @media (max-width: 600px) {
    display: block;
    margin-top: 5rem;
    gap: 10px;
  }
`;

const Left = styled.div`
  max-width: 50%;
  margin-left: 50px;

  h3 {
    font-size: 50px;
    margin-bottom: 10rem;
    color: #fff;
  }

  @media (max-width: 600px) {
    margin-bottom: 8rem;
    max-width: 100%;
    text-align: center;
  }
`;

const Right = styled.div`
  max-width: 50%;

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      color: #004b8f;
    }
  }

  @media (max-width: 600px) {
    margin-top: 10rem;
    max-width: 100%;
    text-align: center;
    font-size: 30px;
  }
`;

const Explicacao = styled.span`
  color: #fff;
  text-align: start;
  margin-top: 20px;
`;

const ArticleContainer = styled.article`
  background-color: #0b87f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Artigos;