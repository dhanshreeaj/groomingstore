"use client";

import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeRegistry from "./theme/ThemeRegistry";
import ThemeToggleButton from "./components/Themetoggel";
import NextTopLoader from "nextjs-toploader";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <CssBaseline />
        <ThemeRegistry>
          <NextTopLoader height={5} color="#2B8F83" />

          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
