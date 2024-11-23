"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import {
  FormControl,
  TextField,
  Typography,
  MenuItem,
  Box,
  Stack,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ApplyJob = ({ applymodal, setapplymodal }) => {
  const [experience, setExperience] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  Modal.setAppElement("#__next");

  const handleChange = (event) => {
    setExperience(event.target.value);
  };

  const handleCheckbox = (event) => {
    setCheckbox(event.target.checked);
  };

  return (
    <Modal isOpen={applymodal} onRequestClose={() => setapplymodal(false)}>
      <Box className="flex flex-col lg:flex-row">
        {/* Left Panel */}
        <Box className="bg-white w-full lg:w-2/5 p-4">
          <Typography variant="h6" className="font-bold">
            Apply To:
          </Typography>
          <Box className="flex items-center mt-2">
            <Image
              className="w-12 h-12 rounded-full"
              src="/logo192.png"
              alt="Logo"
              width={48}
              height={48}
            />
            <Typography variant="h6" className="ml-3 font-bold">
              Vidyardi
            </Typography>
          </Box>
          <ul className="list-none mt-6">
            <li className="mb-2 font-bold">Location</li>
            <Typography variant="body2" className="text-gray-500 mb-2">
              Hyderabad
            </Typography>
            <hr className="border-gray-300 mb-4" />
            <li className="mb-2 font-bold">Job Type</li>
            <Typography variant="body2" className="text-gray-500 mb-2">
              Full Time
            </Typography>
            <hr className="border-gray-300 mb-4" />
            <li className="mb-2 font-bold">About Your Recruiter</li>
            <Typography variant="body2" className="text-gray-500 mb-4">
              Erik Nichols <br />
              Location: San Francisco <br />
              Title: Recruiting for Eng, Product, & Design
            </Typography>
            <hr className="border-gray-300 mb-4" />
            <li className="mb-2 font-bold">Experience</li>
            <Typography variant="body2" className="text-gray-500 mb-2">
              0 - 3 years
            </Typography>
            <hr className="border-gray-300 mb-4" />
            <li className="mb-2 font-bold">Salary</li>
            <Typography variant="body2" className="text-gray-500">
              4 LPA - 8 LPA
            </Typography>
          </ul>
        </Box>

        {/* Right Panel */}
        <Box className="bg-gray-100 w-full lg:w-3/5 p-5">
          <Typography variant="h5" gutterBottom>
            Your Application
          </Typography>
          <Typography variant="body2" gutterBottom>
            Complete the fields below
          </Typography>
          <FormControl fullWidth>
            <Stack spacing={3}>
              {/* Name Field */}
              <TextField label="Name" variant="outlined" required fullWidth />

              {/* Email Field */}
              <TextField label="Email" variant="outlined" required fullWidth />

              {/* Location and Experience */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="Your Location"
                  variant="outlined"
                  required
                  fullWidth
                />
                <FormControl fullWidth>
                  <TextField
                    label="Years Of Experience"
                    variant="outlined"
                    required
                    select
                    value={experience}
                    onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem value="< 1">Less than 1 year</MenuItem>
                    <MenuItem value="1 year">1 year</MenuItem>
                    <MenuItem value="2 years">2 years</MenuItem>
                    <MenuItem value="3 years">3 years</MenuItem>
                    <MenuItem value="10+ years">10+ years</MenuItem>
                  </TextField>
                </FormControl>
              </Stack>

              {/* Desired Salary */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="Desired Salary"
                  variant="outlined"
                  required
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CurrencyRupeeIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControlLabel
                  label="I'm open to work remotely"
                  control={
                    <Checkbox checked={checkbox} onChange={handleCheckbox} />
                  }
                />
              </Stack>
            </Stack>
          </FormControl>
        </Box>
      </Box>
    </Modal>
  );
};

export default ApplyJob;
