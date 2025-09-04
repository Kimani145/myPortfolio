# myPortfolio

This is a personal portfolio website to showcase my projects and skills.

## Features

*   **Hero Section:** A welcoming introduction.
*   **Skills Section:** Lists my technical skills.
*   **Projects Section:** Showcases my work with links to the projects.
*   **Contact Section:** A form to get in touch.
*   **Responsive Design:** Looks great on all devices.

## Technologies Used

*   **Vite:** A fast build tool for modern web projects.
*   **React:** A JavaScript library for building user interfaces.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Getting Started

### Prerequisites

*   Node.js and npm (or yarn) installed on your machine.

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/Kimani145/myPortfolio.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd myPortfolio
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Project

To run the project in development mode, use:

```sh
npm run dev
```

This will start the development server. Open your browser and go to `http://localhost:5173` to see the application.

To build the project for production, use:

```sh
npm run build
```

This will create a `dist` folder with the optimized build files.

## Project Structure

```
myPortfolio/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── contact.js
│   │   ├── footer.js
│   │   ├── header.js
│   │   ├── hero.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/
│   │   └── animations.css
│   ├── utils/
│   │   ├── emailService.js
│   │   ├── particles.js
│   │   └── ProjectCard.tsx
│   ├── index.js
│   └── tailwind.config.js
├── index.html
├── package.json
└── vite.config.js
```

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.
