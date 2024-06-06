import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

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
        {children}</div>
    </div>
  );
}
