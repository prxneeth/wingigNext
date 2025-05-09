"use client";
import React from "react";
import { useActionState } from "react";

import { cn } from "@/lib/utils";

import { uploadProfileImageAction } from "@/app/services/profile-actions";
import ImagePicker from "@/custom/ImagePicker";
import { Button } from "@mui/material";

const initialState = {
  message: null,
  data: null,
};

export function ProfileImageForm({ data, className }) {
  const uploadProfileImageWithIdAction = uploadProfileImageAction.bind(
    null,
    data?.id
  );

  const [formState, formAction] = useActionState(
    uploadProfileImageWithIdAction,
    initialState
  );

  console.log("formstate", formState);
  console.log("d", data.url);

  return (
    <form className={cn("space-y-4", className)} action={formAction}>
      <div className="">
        <ImagePicker
          id="image"
          name="image"
          label="Profile Image"
          defaultValue={data.url}
        />
        {/* <ZodErrors error={formState?.zodErrors?.image} />
        <StrapiErrors error={formState?.strapiErrors} /> */}
      </div>
      <div className="flex justify-end">
        <Button>update photo</Button>
      </div>
    </form>
  );
}
