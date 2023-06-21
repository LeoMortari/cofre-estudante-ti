import { useState } from "react";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
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

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <LogoContainer>
          <Typography variant="h6">Logo</Typography>
        </LogoContainer>
        <NavItemsContainer>
          <NavItem>
            <Button color="inherit">Item 1</Button>
          </NavItem>
          <NavItem>
            <Button color="inherit">Item 2</Button>
          </NavItem>
        </NavItemsContainer>
        <MobileMenuButtonContainer>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={handleMobileMenuClose}
          >
            <MenuItem onClick={handleMobileMenuClose}>Item 1</MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>Item 2</MenuItem>
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
  flex-grow: 1;
`;

const NavItemsContainer = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
  }
`;

const NavItem = styled.div`
  margin-right: 10px;
`;

const MobileMenuButtonContainer = styled.div`
  display: flex;

  @media (min-width: 600px) {
    display: none;
  }
`;

export default Header;
