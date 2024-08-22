import { z } from "zod";

export const formBillSchema = z
	.object({
		bill: z
			.string()
			.transform((val) => parseFloat(val))
			.refine((val) => !isNaN(val), {
				message: "Bill must be a number.",
			})
			.refine((val) => val >= 1, {
				message: "Bill is required, unless you're a thief!",
			})
			.refine((val) => val <= 1500, {
				message:
					"What kind of stuff are you spending on? Are you royalty? Maximum is 1500!",
			}),
		expense: z
			.string()
			.transform((val) => parseFloat(val))
			.refine((val) => !isNaN(val), {
				message: "Expense must be a number.",
			}),
		friendExpense: z
			.string()
			.transform((val) => parseFloat(val))
			.refine((val) => !isNaN(val), {
				message: "Friend's expense must be a number.",
			}),
		selectPerson: z.string().refine((val) => val !== "", {
			message: "You must select a person.",
		}),
	})
	.superRefine((data, ctx) => {
		// Type assertion for data
		const { bill, expense, friendExpense } = data as {
			bill: number;
			expense: number;
			friendExpense: number;
		};

		// Check if expense is less than or equal to bill
		if (expense > bill) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Expense cannot be more than the bill amount.",
				path: ["expense"], // Path to the field that has the issue
			});
		}

		// Check if friendExpense is less than or equal to bill
		if (friendExpense > bill) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Friend's expense cannot be more than the bill amount.",
				path: ["friendExpense"], // Path to the field that has the issue
			});
		}
	});

export type FormBillSchemaType = z.infer<typeof formBillSchema>;
