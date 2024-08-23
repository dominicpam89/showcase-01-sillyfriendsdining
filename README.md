# Showcase-01

## Overview

Showcase-01 is a modern web application built with React and Vite. It leverages Firebase for authentication and Firestore for real-time data storage. The app is designed to manage a list of friends, track balances, and split bills, offering a seamless user experience with interactive UI components powered by Radix UI and ShadCN. The project is equipped with TypeScript for type safety, Tailwind CSS for styling, and TanStack Query for state management.

## Features

-  **Authentication**: Firebase authentication with email and password.
-  **Friends Management**: Add, update, and track friends and their balances.
-  **Bill Splitting**: Easily split bills between friends and track expenses.
-  **UI Components**: Utilizes Radix UI and ShadCN for interactive and accessible UI elements.
-  **Form Handling**: React Hook Form with Zod for form validation and management.
-  **State Management**: TanStack Query for fetching and managing server state.
-  **Testing**: Comprehensive unit testing with Vitest and React Testing Library.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/showcase-01.git
cd showcase-01
npm install
```

## Available Scripts

In the project directory, you can run the following commands:

-  **npm run dev**: Starts the development server using Vite.
-  **npm run build**: Builds the project for production. It compiles TypeScript and bundles the assets.
-  **npm run preview**: Previews the production build locally.
-  **npm run lint**: Runs ESLint to lint the codebase.
-  **npm run test**: Runs the test suite in watch mode using Vitest.
-  **npm run test:ui**: Opens the Vitest UI for running and managing tests.
-  **npm run test**:coverage: Generates test coverage reports.

## Project Structure

-  **src/components**: Contains the React components, including forms, UI elements, and layout components.
-  **src/lib**: Includes custom hooks, service functions for Firebase, and global context for managing application-wide state.
-  **src/definition**: Houses TypeScript type definitions and Zod schemas for form validation.
-  **src/styles**: Contains the Tailwind CSS configuration and global styles.

## Key Files

-  **global.context.hook.ts**: Manages the global authentication state and provides functions for user login, registration, and logout.
-  **FriendsList.tsx**: Displays a list of friends retrieved from Firestore, with loading and error handling.
-  **FriendBalance.tsx**: Shows the balance between the user and a specific friend, indicating who owes money to whom.
-  **FormBill.tsx**: A form component for splitting bills between friends, with dynamic fields based on the person paying.
-

## Dependencies

The project uses the following key dependencies:

-  **React**: A JavaScript library for building user interfaces.
-  **Vite**: A fast build tool for modern web development.
-  **Firebase**: Provides authentication and real-time database services.
-  **Tailwind CSS**: A utility-first CSS framework for styling.
-  **TanStack Query**: A powerful data-fetching library for React.
-  **React Hook Form**: A powerful libraries to manage form
-  **Zod**: TypeScript-first schema declaration and validation library.
-  **Vitest**: A fast unit testing framework for Vite projects.

## Development and Testing

During development, use the dev script to start the local server. The app supports hot module replacement (HMR) for an efficient development experience.

For testing, the project uses Vitest along with React Testing Library. Run npm run test to start the tests in watch mode or npm run test:coverage to generate a coverage report.
