"use client";

import { CssBaseline,ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./page";

export default function RootLayout({children}:{children:React.ReactNode}){
    return(
        <html>
            <body>
                <CssBaseline/>
                <Navbar/>
                <Home/>
            </body>
        </html>
    )
}