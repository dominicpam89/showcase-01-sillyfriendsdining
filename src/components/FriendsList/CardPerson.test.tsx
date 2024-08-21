import CardPerson from "./CardPerson";
import { it, expect, describe } from "vitest";
import { screen, render, within } from "@testing-library/react";
import { MockPersonType } from "@/lib/mock-data";

const mockPerson: MockPersonType = {
	id: 1,
	name: "John Doe",
	image: "https://example.com/avatar.jpg",
	balance: 1000,
};

it("renders the person's card with the correct information", () => {
	render(<CardPerson person={mockPerson} />);

	// Selection of elements
	const personCard = screen.getByLabelText("person-card");
	const avatar = within(personCard).getByLabelText("avatar");
	const info = within(personCard).getByLabelText("info");
	const infoHeading = within(info).getByRole("heading");
	const infoBalance = within(info).getByLabelText("balance");

	// Assertions
	expect(personCard).toBeVisible();
	expect(avatar).toBeVisible();
	expect(info).toBeVisible();
	expect(infoHeading).toBeVisible();
	expect(infoBalance).toBeVisible();
});

it("displays the correct name and balance", () => {
	render(<CardPerson person={mockPerson} />);

	// Check the name and balance text content
	const infoHeading = screen.getByRole("heading", { name: mockPerson.name });
	const infoBalance = screen.getByLabelText("balance");

	expect(infoHeading).toHaveTextContent(mockPerson.name);
	expect(infoBalance).toHaveTextContent(`$${mockPerson.balance}`);
});

it("handles negative balance correctly", () => {
	const mockPersonWithNegativeBalance: MockPersonType = {
		...mockPerson,
		balance: -500,
	};

	render(<CardPerson person={mockPersonWithNegativeBalance} />);

	const infoBalance = screen.getByLabelText("balance");
	expect(infoBalance).toHaveTextContent(/owe/i);
});

it("handles zero balance correctly", () => {
	const mockPersonWithZeroBalance: MockPersonType = {
		...mockPerson,
		balance: 0,
	};

	render(<CardPerson person={mockPersonWithZeroBalance} />);

	const infoBalance = screen.getByLabelText("balance");
	expect(infoBalance).toHaveTextContent(/even/i);
});

it("handles positive balance correctly", () => {
	const mockPersonWithZeroBalance: MockPersonType = {
		...mockPerson,
		balance: 500,
	};

	render(<CardPerson person={mockPersonWithZeroBalance} />);

	const infoBalance = screen.getByLabelText("balance");
	expect(infoBalance).toHaveTextContent(/owes/i);
});
