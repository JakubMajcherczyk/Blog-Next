import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
export default function NavigationBar() {
  return (
    <div className="border-b-2">
      <Navbar fluid rounded className="max-w-screen-lg mx-auto">
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
