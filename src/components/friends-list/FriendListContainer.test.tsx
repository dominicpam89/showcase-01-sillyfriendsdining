import FriendListContainer from "./FriendListContainer";
import { it, expect, beforeEach } from "vitest";
import { screen, render, within } from "@testing-library/react";

beforeEach(() => {
	render(<FriendListContainer />);
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
