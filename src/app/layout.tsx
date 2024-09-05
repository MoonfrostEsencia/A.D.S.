import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";



import css from "styled-jsx/css";
const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhilo Delivery Service",
  description: "From efficient bike rides 🚲 to affordable package delivery 📦, and reliable freight services 🚚, we provide a wide range of solutions to meet every requirement in Karsog. Explore our all-in-one service offerings designed to make your life easier and more convenient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
       
<Footer></Footer>
         </body>
    </html>
  );
}
