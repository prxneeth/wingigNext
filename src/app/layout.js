import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";
import Context from "@/context/context";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

      >
        <Context>
          <Navbar />
          {children}
          <Footer />
        </Context>
      </body>
    </html>
  );
}
