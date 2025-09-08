# Antarctic Ice Melt Predictor

This project is a React application designed to predict the melting rate of Antarctic ice. It utilizes historical data to forecast future trends and visualize the results through interactive charts.

## Project Structure

- **src/**: Contains the main application code.
  - **App.tsx**: The entry point of the application, defining the overall structure and managing routing and state.
  - **components/**: Contains reusable components.
    - **IceMeltChart.tsx**: A chart component that displays the melting rate of ice, receiving data and rendering graphs.
  - **utils/**: Contains utility functions.
    - **prediction.ts**: Exports functions for predicting ice melt rates based on historical data.
  - **types/**: Contains TypeScript types and interfaces used throughout the application.
    - **index.ts**: Defines types for prediction data and component properties.

- **public/**: Contains static files.
  - **index.html**: The HTML template for the application, providing the basic structure for mounting the React app.

- **package.json**: The npm configuration file listing project dependencies and scripts.

- **tsconfig.json**: The TypeScript configuration file specifying compiler options and files to compile.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd antarctic-ice-melt-predictor
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- Predicts the melting rate of Antarctic ice using historical data.
- Visualizes predictions with interactive charts.
- Provides a user-friendly interface for exploring data.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.