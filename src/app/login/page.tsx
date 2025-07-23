"use client";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

export default function Login() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          py: 15,
        }}
      >
        <Container maxWidth="xl">
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: 300, md: 400 },
              px: { xs: 2, md: 4 },
              py: { xs: 2, md: 8 },
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              color: theme.palette.text.secondary,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                width: { xs: "90%", sm: 400 },
                textAlign: "center",
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
              }}
            >
              <Typography variant="h5">Login</Typography>
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
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: theme.palette.background.default,
                }}
              >
                Login
              </Button>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
}
