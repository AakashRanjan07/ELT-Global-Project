# ELT Global Web Application

This is a web application for **ELT Global**, designed to provide a seamless experience for online examinations. It includes features like dark mode, light mode, mobile responsiveness, and a modern UI with Lucide icons, ShadCN components, and additional functionality like progress tracking, timers, and flag buttons.

## Features

- **Mobile Responsive:** The application is fully responsive, ensuring a great user experience on any device.
- **Dark/Light Mode:** Users can toggle between dark and light themes for a personalized experience.
- **Sidebar Navigation:** Provides easy access to different sections like Dashboard, Inbox, Analytics, and Settings.
- **Footer with Contact Information:** Contains quick links and contact details for support.
- **Header with Profile and Notifications:** Includes user profile avatar, notifications, and settings in the header.
- **Progress Bar:** Displays progress during exams to track the user’s performance.
- **Timer:** A countdown timer to manage exam duration and alert the user when time is running out.
- **Flag Button:** Allows users to flag questions they want to revisit later during the exam.
- **Toast Notifications:** Provides real-time alerts, and notifications using toast notifications.
  
## Tech Stack

- **React** - JavaScript library for building user interfaces.
- **Next.js** - React framework for building server-side rendered and static websites.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **Lucide Icons** - A set of open-source icons used in the application.
- **ShadCN UI** - A set of UI components used to build the interface.
- **TypeScript** - Typed JavaScript for better developer experience and safety.
  
## Installation

To run this project locally:

1. Clone the repository:

    git clone https://github.com/your-username/elt-global.git

2. Install dependencies:

    npm install

3. Run the application:


4. Open the application in your browser at `http://localhost:3000`.

## Folder Structure

The project follows a simple folder structure:

- **`/components`**: Contains reusable UI components like `Header`, `Footer`, `Sidebar`.
- **`/utils`**: Contains utility functions, such as mock question data for exams.
- **`/pages`**: Contains pages of the application such as Home, About, Contact, and Exam pages.
- **`/public`**: Contains static assets like images.
- **`/styles`**: Contains Tailwind CSS configurations and global styles.

## Dark/Light Mode

The application supports both light and dark modes. Users can switch between the two using the theme toggle button located in the header. Dark mode enhances the viewing experience in low-light environments.

## Mobile Responsiveness

The layout is fully responsive, ensuring it looks great on devices of all sizes. The sidebar, header, and footer adapt according to the screen size.

## Progress Tracking

- **Progress Bar:** A visual indicator of the user's progress throughout the exam.
- **Flag Button:** The user can flag questions they want to revisit later, ensuring they don’t miss important questions.
- **Timer:** A countdown timer is provided during the exam, helping users manage their time effectively.


## Testing

The application includes test cases to ensure everything works smoothly.

To run tests:

npm run test
