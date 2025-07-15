"use client";

import { CssBaseline} from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./page";
import CardIcon from "./components/cardicons";

export default function RootLayout({children}:{children:React.ReactNode}){
    return(
        <html>
            <body>
                <CssBaseline/>
                <Navbar/>
                <Home/>
                <CardIcon/>
            </body>
        </html>
    )
}