"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isOnCreatePostPage = pathname === "/createPost";

  return (
    <div className="flex justify-between sticky p-10 z-10">
      <div className="flex space-x-5">
        <Link scroll={false} href="/">
          Home
        </Link>
        <Link scroll={false} href="/about">
          About
        </Link>
        <Link scroll={false} href="/contact">
          Contact
        </Link>
      </div>

      {!isOnCreatePostPage && (
        <Link className="mr-5" scroll={false} href="/createPost">
          Create an article
        </Link>
      )}
    </div>
  );
}
