import CardContainer from "./CardContainer";
import { it, expect, beforeEach } from "vitest";
import { screen, render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
	render(<CardContainer />);
});

it("renders the component with all necessary elements", () => {
	// Selection of elements
	const container = screen.getByLabelText("card-container");
	const header = within(container).getByLabelText("card-header");
	const title = within(header).getByLabelText("card-title");
	const description = within(header).getByLabelText("card-description");
	const content = within(container).getByLabelText("card-content");
	const footer = within(container).getByLabelText("card-footer");
	const button = within(footer).getByRole("button", { name: /add friend/i });

	// Assertions
	expect(container).toBeVisible();
	expect(header).toBeVisible();
	expect(title).toBeVisible();
	expect(description).toBeVisible();
	expect(content).toBeVisible();
	expect(footer).toBeVisible();
	expect(button).toBeVisible();
	expect(button).toHaveTextContent("Add Friend");
});

it("toggles the form visibility when the button is clicked", async () => {
	const user = userEvent.setup();

	// Initial state: form is not visible
	let formAddFriend = screen.queryByRole("form", { name: "add-friend" });
	expect(formAddFriend).toEqual(null);

	// Click the button to show the form
	const button = screen.getByRole("button", { name: /add friend/i });
	await user.click(button);

	// Form should now be visible
	formAddFriend = screen.getByRole("form");
	expect(formAddFriend).toBeVisible();
	expect(button).toHaveTextContent("Cancel");

	// Click the button again to hide the form
	await user.click(button);

	// Form should now be hidden
	expect(formAddFriend).not.toBeVisible();
	expect(button).toHaveTextContent(/add friend/i);
});
