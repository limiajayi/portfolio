# Portfolio Source Structure

## Project Overview

This portfolio is built with React and TypeScript using Vite as the build tool. The application is organized into feature-based folders with corresponding styles, making it modular and maintainable.

## Folder Structure

### `components/`

The main components directory is organized into logical feature folders:

#### `home/`
Contains components related to the home/landing section of the portfolio.
- **Home.tsx** - Main home container that combines About and Work sections
- **About.tsx** - About me section displaying personal information
- **Work.tsx** - Work experience section

#### `projects/`
Handles the display and management of GitHub projects using React Context.
- **Projects.tsx** - Grid container that maps through and displays all projects
- **Project.tsx** - Individual project card component that wraps Description with ProjectContextProvider
- **Description.tsx** - Displays project name, description, and language; consumes ProjectContext
- **ProjectLinks.tsx** - Shows GitHub and deployed page links; gets URL and homepage from ProjectContext
- **ProjectContext.tsx** - Creates the React Context for sharing project data down the component tree
- **ProjectContextProvider.tsx** - Provider component that passes project props through Context

#### `extras/`
Contains additional sections and features.
- **Extras.tsx** - Main container that combines Skill and Fun sections
- **Skill.tsx** - Skills showcase section
- **Fun.tsx** - Fun/interests section

#### Root Components
- **Nav.tsx** - Navigation bar for the application
- **Bar.tsx** - Reusable bar component

## Component Descriptions

### App.tsx
Main application component that renders the overall layout:
- Includes Nav component for navigation
- Renders Home, Projects, and Extras components in a main container

### Home.tsx
Container component for the home section:
- Combines About and Work sections
- Serves as the landing/introduction area

### Projects.css
Styling for the projects grid:
- Uses CSS Grid with 5 columns on desktop
- Responsive design: switches to 1 column on screens ≤ 600px in width

### Extras.tsx
Container for miscellaneous portfolio sections:
- Combines Skill and Fun components
- Organizes non-core portfolio content

## Context Management

The `projects/` folder demonstrates React Context usage:
- **ProjectContext** stores project data (name, description, language, url, homepage)
- **ProjectContextProvider** wraps the Description and ProjectLinks components
- Child components use `useContext(ProjectContext)` to access shared data
- This eliminates prop drilling and keeps components clean

## Type Definitions

All component prop types are defined in `App.types.ts`
For example:
- `DescriptionProps` - Props for description and project links
- `ProjectProps` - Props for individual project cards
- `Repo` - GitHub repository data structure
- Additional utility types for other components
