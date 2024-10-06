# NASA App

This project is a web application that provides various NASA-related data and images. It consists of a frontend built with React and a backend built with Express.

## Prerequisites

- Node.js
- npm or yarn

## Getting Started

### Backend

1. Navigate to the backend directory:

    ```sh
    cd nasa-app/backend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
        NASA_API_KEY=your_nasa_api_key_here (mine is uXDNtyyAYxUi2ldvvWtrbRNhgRlIVhpR2WW2ff1u)
    ```

4. Start the backend server:

    ```sh
    node server.js
    ```

    The backend server will be running on [http://localhost:5001](http://localhost:5001).

### Frontend

1. Navigate to the frontend directory:

    ```sh
    cd nasa-app/frontend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the frontend development server:

    ```sh
    npm start
    ```

    The frontend application will be running on [http://localhost:3000](http://localhost:3000).

## Available Scripts

### Backend

- `node server.js`: Starts the backend server.

### Frontend

- `npm start`: Runs the app in the development mode.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Ejects the Create React App configuration.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Express documentation](https://expressjs.com/)

## License

This project is licensed under the MIT License.