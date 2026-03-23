# Flixy

Fictional movie and TV show streaming platform with a modern and responsive interface.

<br>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-4CAF50?style=for-the-badge&logo=vercel)](https://flixy-app.vercel.app/)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)

<br>

## About

Flixy is a fictional streaming platform built to simulate a real-world movie and TV show browsing experience. The focus was on delivering a smooth, modern, and fully responsive UI using component-based architecture. All content is fetched in real time from the [TMDB API](https://developer.themoviedb.org/docs).

<br>

## Features

- Real movie and TV show data fetched from the TMDB API
- Browse and filter content by category with React Select
- Client-side navigation with React Router
- Global state management with React Context
- Custom hooks for reusable data fetching logic
- Fully responsive layout (mobile, tablet, desktop)
- Modular SCSS styling with BEM methodology
- Built with accessibility in mind (keyboard navigation, ARIA attributes, and screen reader support)

<br>

## Project Structure

```
Flixy/
├── flixy-project/
│   ├── public/
│   ├── src/
│   │   ├── assets/        # Images and icons
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # React context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page-level components
│   │   ├── scss/          # SCSS files
│   │   └── main.jsx       # App entry point
│   ├── index.html
│   └── vite.config.js
└── README.md
```

<br>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- npm or yarn
- A [TMDB API](https://developer.themoviedb.org/docs) account to get a Bearer token

### Run Locally

1. **Clone the repository**

    ```bash
    git clone https://github.com/anacatsousa/Flixy.git
    ```

2. **Navigate into the project folder**

    ```bash
    cd Flixy/flixy-project
    ```

3. **Install dependencies**

    ```bash
    npm install
    ```

4. **Set up environment variables**

    Create a `.env` file in the `flixy-project/` root:

    ```bash
    touch .env
    ```

    Add your TMDB Bearer token:

    ```
    VITE_TMDB_TOKEN=your_bearer_token_here
    ```

    You can find your token at [themoviedb.org](https://www.themoviedb.org/) → Settings → API → API Read Access Token.

5. **Start the development server**

    ```bash
    npm run dev
    ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

<br>

## Dependencies

| Package           | Version | Purpose                              |
| ----------------- | ------- | ------------------------------------ |
| react + react-dom | ^19.1.0 | UI library                           |
| react-router      | ^7.7.1  | Client-side routing                  |
| react-select      | ^5.10.2 | Customizable select/filter component |
| sass              | ^1.90.0 | SCSS compilation                     |

<br>

## License

This project is licensed under the [MIT License](LICENSE).

<br>

<p>Made by <a href="https://github.com/anacatsousa">Catarina Sousa</a></p>
