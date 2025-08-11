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
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const theme = useTheme();
  const [formData, setFormDate] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await axios.post<{ message: string }>(
        "/api/auth/signup",
        formData
      );

      alert(res.data.message);
      setShowOtpField(true);
      setSubmitted(true);
    } catch (err: any) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const res = await axios.post<{ message: string }>(
        "/api/auth/verifyemail",
        {
          email: formData.email,
          code: otp,
        }
      );

      alert(res.data.message);
    } catch (err: any) {
      alert(err.response?.data?.error || "OTP verification failed");
    }
  };

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
            <Typography variant="h5">SING UP </Typography>
            <TextField
              variant="outlined"
              label="Full Name"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={(e) =>
                setFormDate({ ...formData, name: e.target.value })
              }
            />
            <TextField
              variant="outlined"
              label="Email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={(e) =>
                setFormDate({ ...formData, email: e.target.value })
              }
            />
            <TextField
              variant="outlined"
              label="Password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={(e) =>
                setFormDate({ ...formData, password: e.target.value })
              }
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: theme.palette.background.default,
              }}
              onClick={handleSubmit}
            >
              {showOtpField && (
                <>
                  <TextField
                    label="Enter OTP"
                    fullWidth
                    margin="normal"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleOtpSubmit}
                  >
                    Verify Email
                  </Button>
                </>
              )}
              Sign Up
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
              Sign up with Goole
            </Button>
            <Typography variant="h6" fontSize={15} py={1}>
              Already have an account?
              <Link href="/signin" style={{ textDecoration: "none" }}>
                Sign In
              </Link>
            </Typography>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
