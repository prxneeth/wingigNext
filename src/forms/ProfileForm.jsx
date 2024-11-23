"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { TextField, Button } from "@mui/material";
import { useActionState } from "react";
import { updateProfileAction } from "@/app/services/profile-actions";

export function ProfileForm({ data, className }) {
  const INITIAL_STATE = {
    data: null,
    message: null,
  };

  const updateUserWithId = updateProfileAction.bind(null, data.id);

  const [formState, formAction] = useActionState(
    updateUserWithId,
    INITIAL_STATE
  );

  return (
    <form action={formAction} className={cn("space-y-4", className)}>
      <div className="space-y-3 grid">
        {formState.message}
        <div className=" space-x-3">
          <TextField
            id="username"
            name="username"
            placeholder="Username"
            defaultValue={data?.username || ""}
            disabled
            sx={{ marginRight: "10px" }}
          />

          <input type="hidden" name="id" value={data.id} />
          <TextField
            id="email"
            name="email"
            placeholder="Email"
            defaultValue={data?.email || ""}
            disabled
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="First Name"
            variant="filled"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            defaultValue={data?.firstName || ""}
          />
          <TextField
            label="Last Name"
            variant="filled"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            defaultValue={data?.lastName || ""}
          />
        </div>
        <TextField
          label="Bio"
          variant="filled"
          id="bio"
          name="bio"
          placeholder="Write your bio here..."
          multiline
          rows={4}
          defaultValue={data?.bio || ""}
        />
      </div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ backgroundColor: "rgb(29,49,59)" }}
      >
        Update
      </Button>
    </form>
  );
}
