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

export async function uploadProfileImageAction(
    imageId,
    prevState,
    formData
) {
    // GET THE LOGGED IN USER
    const user = await getUserMeLoader();
    if (!user.ok)
        throw new Error("You are not authorized to perform this action.");

    const userId = user.data.id;

    // CONVERT FORM DATA TO OBJECT
    const data = Object.fromEntries(formData);

    // VALIDATE THE IMAGE
    const validatedFields = imageSchema.safeParse({
        image: data.image,
    });

    if (!validatedFields.success) {
        return {
            ...prevState,

            data: null,
            message: "Invalid Image",
        };
    }

    // DELETE PREVIOUS IMAGE IF EXISTS
    if (imageId) {
        try {
            await fileDeleteService(imageId);
        } catch (error) {
            return {
                ...prevState,
                strapiErrors: null,
                zodErrors: null,
                message: "Failed to Delete Previous Image.",
            };
        }
    }

    // UPLOAD NEW IMAGE TO MEDIA LIBRARY
    const fileUploadResponse = await fileUploadService(data.image);

    if (!fileUploadResponse) {
        return {
            ...prevState,

            message: "Ops! Something went wrong. Please try again.",
        };
    }

    if (fileUploadResponse.error) {
        return {
            ...prevState,

            message: "Failed to Upload File.",
        };
    }
    const updatedImageId = fileUploadResponse[0].id;
    const payload = { image: updatedImageId };


    const updateImageResponse = await mutateData(
        "PUT",
        `/api/users/${userId}`,
        payload
    );

    revalidatePath("/dashboard/account");

    return {
        ...prevState,
        data: updateImageResponse,

        message: "Image Uploaded",
    };
}
