"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { registerUserService, loginUserService } from "./auth-service";
import { useContext } from "react";
import { ContextErrMsg } from "@/context/context";

const config = {
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
    domain: process.env.HOST ?? "localhost",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
};

// const { setMessage, setErrors } = useContext(ContextErrMsg)

export async function registerUser(userData) {
    if (!userData.username || !userData.email || !userData.password) {
        return { error: "Missing Fields. Failed to Register." };
    }

    const responseData = await registerUserService(userData);

    if (!responseData) {
        return { error: "Something went wrong, try again." };
    }

    if (responseData.error) {
        return { error: "Failed to Register." };
    }

    const cookieStore = await cookies();
    cookieStore.set("jwt", responseData.jwt, config);

    redirect("/");
}

function validateForm(credentials) {
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

export async function loginUser(formData) {
    if (!validateForm(formData)) {

        return { error: "Please correct the errors above." }

    }

    const responseData = await loginUserService(formData);

    if (!responseData) {

        return { error: "Ops! Something went wrong. Please try again." }
    }

    if (responseData.error) {
        return { error: "Failed to Login." }
    }

    const cookieStore = await cookies();
    cookieStore.set("jwt", responseData.jwt, config);

    redirect("/");
}