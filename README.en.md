[![Leia em Português](https://img.shields.io/badge/Idioma-Leia_em_Português-green)](#arquivo-1-readmemd)

# Corporate Portfolio and Project Showcase

This project is a business-oriented portfolio designed to present technical solutions, system architectures, and development logic in a clean and objective manner. The structure was built to facilitate maintenance and scalability, allowing the addition of new projects and content without the need to create new pages or alter the routing flow.

## Core Features

The application features a dynamic showcase system. All displayed projects, ranging from management systems and RESTful APIs to complex turn-based game mechanics, are rendered from a centralized data source. This model simulates the behavior of a database and streamlines constant site updates.

To ease navigation for recruiters and industry professionals, the main page includes a text search bar and technology filters. These filter parameters automatically reflect in the browser's URL. This makes it possible to copy the link of a specific search and share it directly with others, maintaining the exact context of the query.

The website is also fully bilingual. Using the Context API, switching between Portuguese and English happens instantly across the entire interface and the project database, without page reloads. The design is fully responsive, seamlessly adapting the cascading navigation structure and project card display for mobile device screens.

## Architecture and Technologies

The project was built on the Next.js ecosystem, using the App Router pattern for efficient, native route management. TypeScript was adopted throughout the codebase to ensure static typing, reducing runtime failures and clearly documenting data structures and interface contracts.

The user interface was designed with Tailwind CSS. This choice enabled the creation of a serious, high-contrast look suitable for the corporate context, while keeping the code clean and free of complex external styling files. Separation of concerns was strictly maintained, isolating visual components, language context rules, and static data sources.

## Directory Structure

The code organization follows best practices for modern Next.js applications. All development logic is concentrated within the src directory. Global routes and layouts reside in the app folder. Interactive visual blocks are in components, global state management logic in contexts, type definitions in types, and the simulated database in data.

## How to Run the Project

To run this application in a local environment, Node.js must be installed. After cloning the repository, navigate to the root folder and install the dependencies by running `npm install`. Next, start the development server with the `npm run dev` command. The portfolio will be accessible in the browser at `http://localhost:3000`.

## Author

Developed by Thiago Caputi. Professional focused on back-end development, API creation, and internet system structuring, combining technical knowledge in technologies such as JavaScript and database integration with agile methodologies to solve real business problems.
