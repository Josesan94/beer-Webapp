Beer E-commerce Web App
This project is a React challenge to create a mobile-focused e-commerce web app for beers. The application allows users to view a list of products, check product details, and handles errors and unimplemented functionalities using window.alert().


Before getting started, ensure you have the following tools installed:

Node.js (version 20 or higher)
npm (comes with Node.js)




Project Setup Instructions
1. Clone the Repository
Clone this repository to your local machine using the following command:
- git clone https://github.com/Josesan94/beer-Webapp.git

2. Configure Environment Variables
Create a .env file in the root of the project and add the necessary environment variables. You can use the .env.example file as a guide:

3. Start Backend
Go to backend folder:
cd backend

The backend is built using Express.js. To start the server, run the following command:
- npm install
- npm run dev
This will start the server at http://localhost:3000.

4. Start Frontend (ui)
Go to Frontend folder:
cd ui

The frontend is built using React and Vite. To start the frontend application, run the following command in another terminal:
- npm install
- npm run dev

This will open the application at http://localhost:5173.



Features
- Product List: View a list of available beers.
- Product Details: Check the details and availability of each beer.
- Error Handling: Important errors are displayed to the user via window.alert().
- Unimplemented CTAs: Buttons and actions that are not implemented display a message to the user via window.alert().

Technologies Used
- Frontend: JavaScript, React, Vite, Material-UI (MUI)
- Backend: JavaScript, Node.js, Express.js
- Styling: Styled-components, MUI
- Fonts: DM Sans (Google Fonts)
- Icons: Material-UI Icons

Known Issues
- The "Add to cart" functionality and other related features (menu options) are not implemented and are indicated with window.alert().


