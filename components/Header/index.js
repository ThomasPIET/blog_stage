"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import './style.css';

export default function Header() {
  const pathname = usePathname();
  const isOnCreatePostPage = pathname === "/createPost";

  return (
    <div className="container-header">
      <div className="header-left">
        <Link className="header-link" ssscroll={false} href="/">
          Home
        </Link>
        <Link className="header-link" scroll={false} href="/about">
          About
        </Link>
        <Link className="header-link" scroll={false} href="/contact">
          Contact
        </Link>
      </div>

      {!isOnCreatePostPage && (
        <Link className="header-right" scroll={false} href="/createPost">
          Create an article
        </Link>
      )}
    </div>
  );
}


