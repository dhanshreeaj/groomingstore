// File: components/ShopPage.tsx

"use client";
import dynamic from "next/dynamic";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Pagination,
  useTheme,
  Link,
  CardMedia,
  Card,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import News from "./News";
import ProductFeat from "./productfeat";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import NewProduct from "./newproducts";

type FilterOption = string;

interface Product {
  id: number;
  src: string;
  name: string;
  price: number;
}

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   stock: number;
//   description: string;
//   imageUrl?: string;
// }
const laptopOptions: FilterOption[] = [
  'Fits 15.6" Laptop',
  'Fits 16" Laptop',
  'Fits 17" Laptop',
  'Fits up to 16" MacBook Pro',
];
const outfitOptions: FilterOption[] = ["1-2", "2-4", "4-6"];
const shopByOptions: FilterOption[] = ["HP", "Apple", "Lenovo"];

const products: Product[] = [
  { id: 1, src: "/assets/facewash.png", name: "Facewash", price: 199 },
  { id: 2, src: "/assets/shampoo.png", name: "Shampoo", price: 199 },
  { id: 3, src: "/assets/hair_wax.png", name: "Hair wax", price: 149 },
  // add more as needed...
];

// function FilterSection({
//   title,
//   options,
//   selected,
//   onToggle,
// }: {
//   title: string;
//   options: FilterOption[];
//   selected: FilterOption[];
//   onToggle: (opt: FilterOption) => void;
// }) {
//   return (
//     <Accordion>
//       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//         <Typography>{title}</Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         {options.map((opt) => (
//           <FormControlLabel
//             key={opt}
//             control={
//               <Checkbox
//                 checked={selected.includes(opt)}
//                 onChange={() => onToggle(opt)}
//               />
//             }
//             label={opt}
//           />
//         ))}
//       </AccordionDetails>
//     </Accordion>
//   );
// }

function ProductCard({ product }: { product: Product }) {
  const theme = useTheme();
  return (
    <Box
      key={product.id}
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.paper",
        boxShadow:
          theme.palette.mode === "dark"
            ? "0px 4px 10px rgba(255, 255, 255, 0.3)"
            : theme.shadows[3],
        p: 2,
        borderRadius: 2,
        alignItems: "center",
        color: "text.secondary",
      }}
    >
      <Image
        src={product.src}
        alt={product.name}
        width={180}
        height={180}
        style={{ objectFit: "cover", borderRadius: 8 }}
      />

      {/* {product.imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={product.imageUrl}
          alt={product.name}
          sx={{ height: 140, objectFit: "contain", mb: 1 }}
        />
      )} */}
      <Typography variant="subtitle1" fontWeight="bold" mt={2}>
        {product.name}
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        ₹{product.price}
      </Typography>
      {/* <Typography variant="body2">{product.description}</Typography>
      <Typography variant="caption" display="block">
        Stock: {product.stock}
      </Typography> */}
    </Box>
  );
}

export default function ShopPage() {
  const theme = useTheme();
  const [laptopSizes, setLaptopSizes] = useState<FilterOption[]>([]);
  const [outfits, setOutfits] = useState<FilterOption[]>([]);
  const [shopBy, setShopBy] = useState<FilterOption[]>([]);
  const [page, setPage] = useState(1);
  // const searchParams = useSearchParams();

  const toggle =
    (
      state: FilterOption[],
      setter: React.Dispatch<React.SetStateAction<FilterOption[]>>
    ) =>
    (opt: FilterOption) =>
      setter((prev) =>
        prev.includes(opt) ? prev.filter((x) => x !== opt) : [...prev, opt]
      );

  const handlePageChange = useCallback(
    (_: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    []
  );

  // const [products, setProducts] = useState<Product[]>([]);
  // const API_BASE_URL =
  //   process.env.NODE_ENV === "production"
  //     ? "https://api.stalliongrooming.com"
  //     : "http://localhost:3001";

  // const fetchProducts = async () => {
  //   try {
  //     const res = await axios.get<Product[]>(`${API_BASE_URL}/products`);
  //     setProducts(res.data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <Container maxWidth="xl">
      {/* Hero */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          textAlign: { xs: "center", md: "left" },
          px: { xs: 2, md: 3 },
          py: { xs: 4, md: 14 },
          gap: 4,
          justifyContent: "space-between",
          color: theme.palette.text.primary,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          ALL PRODUCTS. <br /> ALL STORIES.
        </Typography>
        <Typography variant="subtitle1" color="text.primary">
          Effortless routines, clean formulas, no fluff. This is grooming
          without vanity.
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          py: 4,
        }}
      >
        {/* Filters */}
        {/* <Box
          sx={{
            width: { xs: "100%", md: 300 },
            boxShadow: theme.shadows[2],
            bgcolor: "background.paper",
            p: 2,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            FILTERS
          </Typography>
          <FilterSection
            title="Laptop Size"
            options={laptopOptions}
            selected={laptopSizes}
            onToggle={toggle(laptopSizes, setLaptopSizes)}
          />
          <FilterSection
            title="Outfits"
            options={outfitOptions}
            selected={outfits}
            onToggle={toggle(outfits, setOutfits)}
          />
          <FilterSection
            title="Shop By"
            options={shopByOptions}
            selected={shopBy}
            onToggle={toggle(shopBy, setShopBy)}
          />
        </Box> */}

        {/* Products Grid */}
        <Box sx={{ flex: 1 }}>
          {/* Sort / Pagination */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 2,
            }}
          >
            {/* You can add Sort controls here */}
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
              },
              gap: 3,
            }}
          >
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}

            {/* {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))} */}
            <NewProduct />
          </Box>

          {/* Pagination */}
          {/* <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              page={page}
              count={5}
              onChange={handlePageChange}
              shape="rounded"
            />
          </Box> */}
        </Box>
      </Box>

      {/* <ProductFeat /> */}
      {/* <News /> */}
    </Container>
  );
}
