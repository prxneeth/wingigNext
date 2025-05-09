"use client";

import React, { useContext, useState } from "react";
import { loginUser } from "@/app/services/auth-actions";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, TextField, Container, CssBaseline } from "@mui/material";
import { ContextErrMsg } from "@/context/context";

function SeekerLogin() {
  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });

  console.log(credentials);

  const { message, setMessage } = useContext(ContextErrMsg);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  function validateForm() {
    let isValid = true;
    let newErrors = { identifier: "", password: "" };

    if (!credentials.identifier) {
      newErrors.identifier = "Identifier is required.";
      isValid = false;
    } else if (
      credentials.identifier.length < 3 ||
      credentials.identifier.length > 20
    ) {
      newErrors.identifier = "Identifier must be between 3 and 20 characters.";
      isValid = false;
    }

    if (!credentials.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (
      credentials.password.length < 6 ||
      credentials.password.length > 100
    ) {
      newErrors.password = "Password must be between 6 and 100 characters.";
      isValid = false;
    }

    // setErrors(newErrors);
    return isValid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login submitted:", credentials);
    const result = await loginUser(credentials);
    validateForm(credentials);
    if (result?.error) {
      setMessage(result.error);
    } else {
      setMessage("Registration successful!");
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent
        color="primary"
        className="m-0 grid place-items-center rounded-b-none bg-custombg-base py-8 px-4 text-center"
      >
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
          Jobseeker Login
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
          {
            <Typography
              color="error"
              sx={{ textAlign: "center", margin: "5px" }}
            >
              {message}
            </Typography>
          }
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="identifier"
              autoComplete="email"
              autoFocus
              value={credentials.identifier}
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
            Don't have an account?{" "}
            <Button sx={{ fontSize: "13px" }} href="/seekerReg">
              Sign up
            </Button>
          </Typography>
        </CardActions>
      </Container>
    </Card>
  );
}

export default SeekerLogin;
