import React from "react";
import { Logo, Nav, StyledHeader, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flexed.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="https://raw.githubusercontent.com/bradtraversy/huddle_styled_components/6033c3b282d305910a8b1424f80e2f31f629d653/public/images/logo.svg" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src="https://raw.githubusercontent.com/bradtraversy/huddle_styled_components/6033c3b282d305910a8b1424f80e2f31f629d653/public/images/illustration-mockups.svg" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
