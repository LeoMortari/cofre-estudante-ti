import styled from "styled-components";

import { Container } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <LogoContainer>
            <span>COFRE TI</span>
          </LogoContainer>
          <ColaboradoresContainer>
            <span>Colaboradores:</span>
            <ul>
              <li>Bruno Cardoso</li>
              <li>Gabriel Pierote</li>
              <li>Guilherme Borges</li>
              <li>Leonardo Mortari</li>
              <li>Lucas Domzy</li>
              <li>Lucas Kenzo</li>
              <li>Matheus Felippe</li>
              <li>Richard Keltrin</li>
            </ul>
          </ColaboradoresContainer>
          <RedesSociaisContainer>
            <SocialIcon>
              <GitHub fontSize="large" />
              <a href="https://github.com/LeoMortari/cofre-estudante-ti/tree/master">
                cofre-estudante-ti
              </a>
            </SocialIcon>
          </RedesSociaisContainer>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #fafafa;
  color: #0b87f9;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 10px;

    li {
      margin-bottom: 5px;
    }
  }
`;

const LogoContainer = styled.div`
  font-family: "Michroma", sans-serif;
  flex-grow: 1;
  font-size: 25px;
`;

const ColaboradoresContainer = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 10px;

  span {
    font-size: 30px;
  }

  li {
    font-size: 15px;
  }

  @media (min-width: 600px) {
    flex: 2;
  }
`;

const RedesSociaisContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  a {
    margin-left: 10px;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    flex-basis: 100%;
    justify-content: center;
    margin-top: 10px;
  }
`;

const SocialIcon = styled.div`
  margin-left: 10px;
  font-size: 18px;
`;

export default Footer;
