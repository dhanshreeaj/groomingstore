"use client";

import { CssBaseline} from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./page";
import CardIcon from "./components/cardicons";
import ProductFeatures from "./components/productfeature";
import ProductsPages from "./components/productspage";

export default function RootLayout({}:{children:React.ReactNode}){
    return(
        <html>
            <body>
                <CssBaseline/>
                <Navbar/>
                <Home/>
                <CardIcon/>
                <ProductFeatures/>
                <ProductsPages/>
            </body>
        </html>
    )
}