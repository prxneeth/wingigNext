"use client";

import React, { useContext, useState } from "react";

import { registerUser } from "@/app/services/auth-actions";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, TextField, Container, CssBaseline } from "@mui/material";
import { ContextErrMsg } from "@/context/context";

function SeekerReg() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { message, setMessage } = useContext(ContextErrMsg);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Registration submitted:", credentials);
    const result = await registerUser(credentials);
    if (result?.error) {
      setMessage(result.error);
    } else {
      setMessage("Registration successful!");
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className="m-0 grid place-items-center rounded-b-none bg-custombg-base py-8 px-4 text-center">
        <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white bg-slate-400">
          <div className=" flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/727/727399.png"
              className="h-20 w-20"
            />
          </div>
        </div>

        <Typography
          variant="h5"
          color="primary"
          gutterBottom
          sx={{ color: "white" }}
        >
          Register
        </Typography>
      </CardContent>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {
              <Typography
                color="error"
                sx={{ textAlign: "center", margin: "5px" }}
              >
                {message}
              </Typography>
            }
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={credentials.username}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={credentials.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={credentials.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "rgb(29,49,59)" }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ fontSize: "13px" }}>
            Already have an account?{" "}
            <Button sx={{ fontSize: "13px" }} href="/seekerLogin">
              Login
            </Button>
          </Typography>
        </CardActions>
      </Container>
    </Card>
  );
}

export default SeekerReg;
