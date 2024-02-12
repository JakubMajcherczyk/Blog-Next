import Link from "next/link";
// import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";
import Image from "next/image";
export default function NavigationBar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="border-b-2 ">
      <Navbar fluid rounded className="max-w-screen-lg mx-auto dark:bg-sky-950">
        <NavbarBrand
          as={Link}
          href="/"
          className="flex items-center justify-between gap-3"
        >
          <Image
            src="/next.svg"
            alt="Logo"
            width="60"
            height="60"
            className="w-16 h-16"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            FIRST PROJECT - BLOG
          </span>
        </NavbarBrand>
        <Button onClick={toggleTheme}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Button>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link} href="/" active className="font-bold text-xl">
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="/about" className="font-bold text-xl">
            About
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
