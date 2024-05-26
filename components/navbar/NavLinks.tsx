"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const pathName = usePathname();

  const clickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      className={`${
        pathName.startsWith(href)
          ? "active text-[#14B858] h-full flex items-center duration-300"
          : "hover:text-[#14B858] h-full flex items-center duration-300"
      } ${className}`}
      onClick={clickHandler}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
