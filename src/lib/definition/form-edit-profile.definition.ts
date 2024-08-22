import { z } from "zod";

export const firstNameValidator = z
	.string()
	.min(3, "First name must be at least 3 characters long")
	.max(50, "First name must be no more than 50 characters long")
	.regex(/^[a-zA-Z]+$/, "First name can only contain letters");

export const lastNameValidator = z
	.string()
	.min(3, "Last name must be at least 3 characters long")
	.max(50, "Last name must be no more than 50 characters long")
	.regex(/^[a-zA-Z]+$/, "Last name can only contain letters")
	.optional();

export const emailValidator = z.string().email("Invalid email address");

export type EditProfileSchemaType = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	photo: File | undefined;
};
