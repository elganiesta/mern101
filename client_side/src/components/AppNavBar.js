import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const AppNavBar = () => {

  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className="mb-5">
        <Container>
            <NavbarBrand href="/" className="mr-auto">Shopping List</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://google.com">Google</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavBar;