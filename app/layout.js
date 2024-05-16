import { Inter } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

import Header from "@/components/Header";import { extractRouterConfig } from "uploadthing/server";

import { ourFileRouter } from '@/api/uploadthing/core';

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Blog - Thomas PIET",
  description: "Ynov Toulouse Campus",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={inter.className}>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />{children}</div>
    </div>
  );
}
