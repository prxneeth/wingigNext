"use server";
import qs from "qs";
import { changeData } from "./change-data";
import { revalidatePath } from "next/cache";

export async function updateProfileAction(
    userId,
    prevState,
    formData
) {
    const rawFormData = Object.fromEntries(formData);

    const query = qs.stringify({
        populate: "*",
    });

    const payload = {
        firstName: rawFormData.firstName,
        lastName: rawFormData.lastName,
        bio: rawFormData.bio,
    };


    const responseData = await changeData("PUT", `/api/users/${userId}?${query}`, payload)

    if (!responseData) {
        return {
            ...prevState,

            message: "Ops! Something went wrong. Please try again.",
        };
    }

    if (responseData.error) {
        return {
            ...prevState,

            message: "Failed to Update Profile.",
        };
    }

    revalidatePath("/dashboard/account");

    return {
        ...prevState,
        message: "Profile Updated",
        data: responseData,

    };
}