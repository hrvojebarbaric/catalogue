# Catalogue - React + TypeScript + Vite

## Quick start

Install dependencies:

- npm i

Create .env file in project root and add:

- VITE_API_BASE_URL=https://dummyjson.com

To start the development server, use the following command:

- npm run dev

## 1. Introduction

Welcome to the documentation for the catalogue React application. This app is designed for job interview. The documentation will guide you through the setup, usage, and contribution process for the project.

## 2. Project Structure

This section outlines the general structure of the project and provides an overview of the key folders and files.

- src/: Contains all the source code for the application.
- public/: Contains the static assets and the main HTML file.
- node_modules/: Contains all the npm packages installed.

## 3. Installation and Setup

Prerequisites
Before setting up the project, ensure you have the following installed:

- Node.js (>= 20.x.x)

### Steps to Set Up the Project

Clone the repository:

- git clone https://github.com/hrvojebarbaric/catalogue.git
- cd react-app

Install dependencies:

- npm i

Create .env file in project root and add:

- VITE_API_BASE_URL=https://dummyjson.com

## 4. Running the Application

To start the development server, use the following command:

- npm run dev

## 5. Environment Variables

The application uses environment variables to manage configuration. These are defined in the .env file in the root directory. Common variables include:

VITE_API_BASE_URL: The base URL for the API.
VITE_APP_ENV: The environment in which the app is running (development, production, etc.).

## 6. Folder Structure

The project is organized into the following folders:

- src/components/: Contains all the React components with styled components files and type files for TS.
- src/utils/: Contains centralized file for API functions and error handling.
- src/constants/: Contains static constants.

## 7. Routing

Routing in this app is managed using React Router. Right now this is SPA so there is no routes.

## 8. API Integration

This project use React Query along with a centralized file for API functions and error handling. All API functions and hooks are in a central files. You can find this files in utils/api/. Right now we only have one file products.ts.

## 9. Styling

Styling is managed using Styled Components. Global styles are stored in globalStyle.ts.

## 10. Testing

Tests are written using Vites and React Testing Library.
Right now we do not have any tests because we do not have helper functions.

### Running Tests

To run the tests, use the following command:

- npm test

## 11. Deployment

Deployment is configured for platforms like Netlify, Vercel, or any other preferred service.

### Example Deployment with Netlify

Create a production build:

- npm run build
- Deploy the build/ directory to Netlify.
