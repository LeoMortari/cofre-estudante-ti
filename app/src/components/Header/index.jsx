import { useState } from "react";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleRedirect = (callback) => {
    callback();
    setMobileMenuAnchor(null);
  };

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <LogoContainer>
          <span>COFRE TI</span>
        </LogoContainer>
        <NavItemsContainer>
          <NavItem>
            <Button
              color="inherit"
              size="large"
              href="https://www.up.edu.br/"
              target="_blank"
            >
              <Item>Faculdade</Item>
            </Button>
          </NavItem>
          <NavItem>
            <Button color="inherit" href="#artigos">
              <Item>Artigos</Item>
            </Button>
          </NavItem>
        </NavItemsContainer>
        <MobileMenuButtonContainer>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            size="large"
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={handleMobileMenuClose}
          >
            <MenuItem
              onClick={() =>
                handleRedirect(() => window.open("https://www.up.edu.br/"))
              }
            >
              <Item>Faculdade</Item>
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleRedirect(() => (window.location.hash = "#artigos"))
              }
            >
              <Item>Artigos</Item>
            </MenuItem>
          </Menu>
        </MobileMenuButtonContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  &.MuiAppBar-root {
    background-color: #fafafa;
    padding: 20px;
  }
`;

const StyledToolbar = styled(Toolbar)`
  color: #0b87f9;
`;

const LogoContainer = styled.div`
  font-family: "Michroma", sans-serif;
  flex-grow: 1;
  font-size: 20px;
`;

const NavItemsContainer = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
  }
`;

const NavItem = styled.div`
  font-family: "Lato", sans-serif;
  margin-right: 10px;
`;

const MobileMenuButtonContainer = styled.div`
  display: flex;

  @media (min-width: 600px) {
    display: none;
  }
`;

const Item = styled.span`
  font-size: 20px;

  &:hover {
    color: #004b8f;
  }
`;

export default Header;
