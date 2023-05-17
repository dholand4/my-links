import React from "react";
import {
  AvatarImage,
  Container,
  GlobalStyles,
  StyledFooter,
  StyledLink,
  StyledList,
  Subtitle,
  Title,
} from "./styles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/47678288?s=400&u=1420d5ab049e6d5eb0b45485d92cea3671959bab&v=4"
          alt="Imagem de perfil do Daniel Holanda"
        />
        <Title>Daniel Holanda</Title>
        <Subtitle>@dholand4</Subtitle>

        <StyledList>
          <li>
            <StyledLink
              href="https://instagram.com/dholand4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="https://www.linkedin.com/in/daniel-holanda-78145a22b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="https://github.com/dholand4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="mailto:danielholanda55@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contato
            </StyledLink>
          </li>
        </StyledList>

        <StyledFooter>Feito por Daniel Holanda 🧑🏾‍💻</StyledFooter>
      </Container>
    </>
  );
};

export default App;
