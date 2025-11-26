# Aldi Gift Card Bridge Page

This is a Black Friday themed bridge page for an Aldi Gift Card offer, built with React, Tailwind CSS, and Vite.

## 🚀 How to Run Locally

1.  **Install Node.js**: Ensure you have Node.js installed on your computer.
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Start Development Server**:
    ```bash
    npm run dev
    ```
4.  Open the link provided in the terminal (usually `http://localhost:5173`).

## 🌐 How to Host on GitHub Pages

This project is configured to be easily deployed to GitHub Pages.

### Option 1: The Easy Way (via Script)

1.  Create a new repository on GitHub.
2.  Push your code to the repository:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```
3.  Run the deploy script:
    ```bash
    npm run deploy
    ```
    *This will build the project and push the `dist` folder to a `gh-pages` branch on your repository.*

4.  Go to your GitHub Repository Settings -> Pages -> and ensure the source is set to `gh-pages` branch.

### Option 2: Manual Upload

1.  Run the build command:
    ```bash
    npm run build
    ```
2.  This creates a `dist` folder.
3.  You can manually upload the contents of the `dist` folder to any static hosting provider (Netlify, Vercel, or GitHub Pages).

## 🛠 customization

-   **Affiliate Link**: Edit `constants.ts` to change the destination URL.
-   **Colors**: Edit the `tailwind.config` object inside `index.html` or the component files directly.
