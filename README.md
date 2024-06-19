# Slidely Form App (Backend)

## Overview
This `Express App` is a backend service built using `TypeScript` and `Node.js`. It provides endpoints for submitting and reading user submissions. The service uses a JSON file for storing submissions.

## Features
- **Ping Endpoint**: Check the server status.
- **Submit Endpoint**: Add new submissions.
- **Read Endpoint**: Retrieve submissions by index.

## Getting Started

### Prerequisites
- `Node.js`
- `npm`

### Installation
- **Clone the Repository**:
    ``` sh
        https://github.com/Mausam-Raj/Slidely-AI-Task-2-Sidely-Form-App-Backend.git
    ```
- **Install dependencies**:
    ``` sh
        cd Slidely-AI-Task-2-Sidely-Form-App-Backend
        npm install
    ```

- **Start the server**:
    ``` sh
        npm start
    ```

## How TO Use
- **Ping the Server**:
    ``` sh
        GET /ping
    ```
    **Response**: `true` is the server is running.

- **Submit a New Submission**:
    ``` sh
        POST /submit
    ```
    **Request Body**:
    ``` sh
        {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "123-456-7890",
            "github_link": "https://github.com/johndoe",
            "stopwatch_time": "00:01:23"
        }
    ```

- **Read a Submission**:
    ``` sh
        GET /read?index=0
    ```
    **Response**: The submission at the specified index.

## Code Structure
- **`index.ts`**: Main server file defining routes and server configuration.
- **`db.json`**: JSON file used for storing submissions.

## Dependencies
- `Express`
- `body-parser`
- `fs`
- `path`
