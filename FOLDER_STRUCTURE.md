# Folder Structure Flow for optic-quizz Project

This document describes the folder structure of the optic-quizz project, explaining the purpose of each main folder and subfolder, along with a tree-like representation for clarity.

## Folder Structure Tree

```
/
├── app/
│   ├── _layout.tsx               # Layout components and routing setup
│   ├── index.tsx                 # Main entry point for the app UI
│   ├── chat/                    # Chat feature related components and screens
│   │   ├── index.tsx
│   │   ├── chatHeader.tsx
│   │   ├── emptyChatView.tsx
│   │   ├── messageContent.tsx
│   │   ├── messageItem.tsx
│   │   └── messageMultimedia.tsx
│   ├── components/              # Reusable UI components
│   │   ├── chat-search.tsx      # Chat search component
│   │   ├── gloobal/             # Global reusable components (note: "gloobal" spelling)
│   │   │   ├── AppButton.tsx
│   │   │   ├── Apptext.tsx
│   │   │   ├── AppView.tsx
│   │   │   ├── avtar.tsx
│   │   │   └── input.tsx
│   ├── login/                   # Login screen and related components
│   │   └── index.tsx
│   ├── signup/                  # Signup screen and related components
│   │   └── index.tsx
├── assets/                      # Static assets like fonts and images
│   ├── fonts/
│   │   └── SpaceMono-Regular.ttf
│   ├── images/
│   │   ├── adaptive-icon.png
│   │   ├── favicon.png
│   │   ├── icon.png
│   │   ├── paper-plane-right.jpeg
│   │   ├── partial-react-logo.png
│   │   ├── react-logo.png
│   │   ├── react-logo@2x.png
│   │   ├── react-logo@3x.png
│   │   └── splash-icon.png
├── lib/                        # Library utilities and constants
│   ├── api.tsx
│   ├── colors.ts
│   └── constanrs.ts            # Possibly a typo, should be "constants.ts"
├── store/                      # Redux or state management slices and store setup
│   ├── authSlice.ts
│   ├── index.ts
│   └── messagesSlice.ts
├── utils/                      # Utility functions and helpers
│   └── tokenManager.ts
├── app.json                   # Expo app configuration
├── package.json               # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── README.md                  # Project overview and documentation
└── FOLDER_STRUCTURE.md        # This file describing the folder structure flow

## Description of Key Folders

- **app/**: Contains the main application code including screens, components, and feature-specific folders like chat, login, and signup. The `_layout.tsx` file likely manages the app's layout and routing.
- **assets/**: Holds static assets such as fonts and images used throughout the app.
- **lib/**: Contains utility libraries and constants used across the app.
- **store/**: Contains state management logic, including slices and store configuration, likely using Redux or a similar library.
- **utils/**: Contains utility functions that assist with various tasks, such as token management.

## Notes

- The folder `app/components/gloobal/` appears to have a typo in the folder name "gloobal" which might be intended as "global".
- The file `lib/constanrs.ts` also appears to have a typo and might be intended as `constants.ts`.

This structure supports modular development by feature and functionality, making the codebase easier to maintain and scale.

---
