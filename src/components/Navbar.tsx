import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { 
  Navbar as NextUINavbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <NextUINavbar 
      maxWidth="xl" 
      className="bg-background/95 backdrop-blur-sm border-b border-border/40"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link 
            as={NavLink} 
            to="/" 
            className="font-serif text-2xl font-bold text-primary"
          >
            IndiaBloom
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              as={NavLink}
              to={item.path}
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-foreground/60 hover:text-foreground"
              }
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
        {!isAuthenticated ? (
          <>
            <NavbarItem>
              <Button
                as={NavLink}
                to="/login"
                color="primary"
                variant="flat"
                className="text-sm font-medium hover:scale-105 transition-transform"
              >
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={NavLink}
                to="/signup"
                color="primary"
                variant="flat"
                className="text-sm font-medium hover:scale-105 transition-transform"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        ) : (
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Avatar
                  as="button"
                  className="transition-transform"
                  color="primary"
                  name={user?.name}
                  size="sm"
                  src={user?.avatar}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user?.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={logout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu className="bg-background/95 backdrop-blur-sm">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              as={NavLink}
              to={item.path}
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-foreground/60 hover:text-foreground"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        {!isAuthenticated ? (
          <>
            <NavbarMenuItem>
              <Button
                as={NavLink}
                to="/login"
                color="primary"
                variant="flat"
                className="text-sm font-medium hover:scale-105 transition-transform w-full justify-start"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Button>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <Button
                as={NavLink}
                to="/signup"
                color="primary"
                variant="flat"
                className="text-sm font-medium hover:scale-105 transition-transform w-full justify-start"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Button>
            </NavbarMenuItem>
          </>
        ) : (
          <NavbarMenuItem>
            <Button
              color="danger"
              variant="light"
              onClick={() => {
                logout();
                setIsMenuOpen(false);
              }}
            >
              Log Out
            </Button>
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;
