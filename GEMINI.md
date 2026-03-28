## Project Overview

This is a Next.js web application for the "Mario Shots Foundation". It is built with TypeScript, styled using Tailwind CSS, and utilizes shadcn/ui components for its user interface. The application serves as a comprehensive website for the foundation, featuring various sections such as a hero section, featured programs, impact statistics, testimonials, recent posts, upcoming events, and a call to action. A notable feature is the integration of a "RIOAssistant" component, indicating the presence of an AI assistant within the application.

## Building and Running

The project uses `bun` as its package manager. Below are the essential commands for development and deployment:

*   **Development Mode:**
    ```bash
    bun dev
    ```
    This command starts the development server, typically accessible at `http://localhost:3000`.

*   **Build for Production:**
    ```bash
    bun build
    ```
    This command compiles the application for production deployment.

*   **Start Production Server:**
    ```bash
    bun start
    ```
    This command starts the Next.js production server after the application has been built.

## Development Conventions

*   **Linting:** The project uses `biome` for linting and `tsc` for TypeScript type checking. To run the linter and type checker:
    ```bash
    bun lint
    ```

*   **Formatting:** The project uses `biome` for code formatting. To format the codebase:
    ```bash
    bun format
    ```

*   **Technologies:**
    *   Next.js (React Framework)
    *   TypeScript
    *   Tailwind CSS
    *   shadcn/ui (UI Components)
    *   Radix UI (headless UI components)
    *   react-hook-form (form management)
    *   zod (schema validation)
    *   bun (package manager and runtime)
