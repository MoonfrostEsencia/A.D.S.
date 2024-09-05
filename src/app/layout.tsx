import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";



import css from "styled-jsx/css";
const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creativa Gx",
  description: "Welcome to Creativa Gx",
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
