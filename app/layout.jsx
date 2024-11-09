import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { Open_Sans } from "next/font/google";

export const metadata = {
  title: "Tuscany tours",
  description: "",
};

const openSans = Open_Sans();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
