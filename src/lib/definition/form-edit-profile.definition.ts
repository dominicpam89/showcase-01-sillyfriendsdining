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

// export const passwordValidator = z
// 	.string()
// 	.min(8, "Password must be at least 8 characters long") // Minimum length requirement
// 	.max(64, "Password must be no more than 64 characters long") // Maximum length requirement
// 	.regex(/[a-z]/, "Password must contain at least one lowercase letter") // At least one lowercase letter
// 	.regex(/[A-Z]/, "Password must contain at least one uppercase letter") // At least one uppercase letter
// 	.regex(/\d/, "Password must contain at least one number") // At least one number
// 	.regex(/[@$!%*?&#]/, "Password must contain at least one special character"); // At least one special character

// export const confirmationValidator = (password: string) =>
// 	z.string().refine((val) => val === password, {
// 		message: "Passwords do not match",
// 	});

export type EditProfileSchemaType = {
	firstName: string;
	lastName: string;
	email: string;
	photo: File | undefined;
};
