# Refactor Plan: Code Structure & Readability

## 1. Analyze Current Structure
- Review the organization of `src/app`, `src/components`, and `src/lib`.
- Identify large files and areas with unclear structure.

## 2. Break Up Large Files
- Split very large files (e.g., `rio-assistant.tsx`, `donate/page.tsx`) into smaller, focused components or modules.

## 3. Standardize Naming Conventions
- Ensure consistent and descriptive naming for files, folders, and components.

## 4. Organize Components
- Group related components into subfolders.
- Move shared UI elements to a common `ui` directory.

## 5. Refactor Utility and Constants
- Clean up and document `lib/constants.ts` and `lib/utils.ts`.
- Move reusable logic to appropriate utility files.

## 6. Remove Dead Code and Duplicates
- Delete unused files, components, or code blocks.
- Consolidate duplicate logic.

## 7. Improve Documentation
- Add or update comments and JSDoc where helpful.
- Document the new structure and any major changes in `README.md` or a dedicated section.

## 8. Test and Validate
- Ensure the app builds and runs after each major refactor step.
- Run linting and formatting tools. 

---

## Refactor rio-assistant.tsx

1. [x] Extract utility functions (e.g., detectIntent, searchFAQ) to a new file (e.g., rio-utils.ts).
2. [x] Move Message type and related types to a new file (e.g., rio-types.ts).
3. [x] Extract UI subcomponents:
   - [x] ChatHeader (header with logo and controls)
   - [x] ChatMessages (message list and typing indicator)
   - [x] ChatInput (input area and send button)
4. Extract custom hooks for chat history and conversation flow if needed.
5. Refactor RIOAssistant to use new subcomponents, hooks, and utility functions.
6. Test and validate after each step. 