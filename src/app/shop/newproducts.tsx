"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, useTheme, CardMedia } from "@mui/material";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  imageUrl?: string;
}

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
      {product.imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={product.imageUrl}
          alt={product.name}
          sx={{ height: 140, objectFit: "contain", mb: 1 }}
        />
      )}
      <Typography variant="subtitle1" fontWeight="bold" mt={2}>
        {product.name}
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        ₹{product.price}
      </Typography>
      <Typography variant="body2">{product.description}</Typography>
      <Typography variant="caption" display="block">
        Stock: {product.stock}
      </Typography>
    </Box>
  );
}

export default function NewProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  const API_BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://api.stalliongrooming.com"
      : "http://localhost:3001";

  const fetchProducts = async () => {
    try {
      const res = await axios.get<Product[]>(`${API_BASE_URL}/products`);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </>
  );
}
