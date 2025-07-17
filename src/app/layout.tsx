"use client";

import { CssBaseline} from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({children}:{children:React.ReactNode}){
    return(
        <html>
            <body>
                <CssBaseline/>
                <Navbar/>
                {children}
                <Footer/>
                
            </body>
        </html>
    )
}