# File Upload and Storage System

This repository hosts the frontend of a **File Upload and Storage System** built using React. The application allows users to upload files to specified folders, view a list of previously uploaded files, and download files on demand.

## Features

- **File Upload**: Upload files to a specified folder on the server.
- **File List**: Display a list of all uploaded files with corresponding details (size, name).
- **File Download**: Download uploaded files directly from the app.
- User-friendly interface for file management operations.

## Technologies Used

- React.js: UI development.
- Axios: For making HTTP requests to the backend API.
- JavaScript: Application logic.
- CSS: For styling the application.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your system.

### Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/i-am-sushant/capstone_frontend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd capstone_frontend
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Available Scripts

In the project directory, you can run:

- `npm start`: Starts the development server.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from your project.

## Back-End Integration

This frontend interacts with a backend API for file storage and retrieval. Ensure the backend service is running and accessible. Replace any placeholder API endpoints in the codebase with the actual backend service endpoints.

## Folder and File Details

- **src/App.js**: Main application entry point, initializes file upload and listing components.
- **src/components/FileUpload.js**: Component for uploading files.
- **src/components/FileList.js**: Component for displaying a list of uploaded files and providing download links.

## Deployment

To deploy this application, build the project using `npm run build` and host the contents of the `build` folder on a web server.

## Contribution

Contributions are welcome! Feel free to fork this repository and submit pull requests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.