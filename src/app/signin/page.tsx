"use client";
import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";

export default function Signin() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, sm: "20%", md: "35%" },
          py: { xs: "40%", md: "10%" },
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        }}
      >
        <Container maxWidth="xl">
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              textAlign: "center",
              bgcolor: "grey",
              color: theme.palette.text.primary,
              width: { xs: 350, md: 500 },
            }}
          >
            <Typography variant="h5">SING IN USING</Typography>
            <TextField
              variant="outlined"
              label="Email"
              fullWidth
              margin="normal"
            />
            <TextField
              variant="outlined"
              label="Password"
              fullWidth
              margin="normal"
            />
            <Typography variant="subtitle2" align="right">
              Forgot Password?
            </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: theme.palette.background.default,
              }}
            >
              Sign In
            </Button>
            <Typography variant="h6" fontSize={15} py={1}>
              OR
            </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: theme.palette.background.default,
              }}
              startIcon={<FcGoogle />}
            >
              Sign In with Goole
            </Button>
            <Typography variant="h6" fontSize={15} py={1}>
              Don't have an account?
              <Link href="/signuppage" style={{ textDecoration: "none" }}>
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
