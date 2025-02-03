# Document Q&A Bot

This project is a Document Q&A Bot that allows users to upload PDF documents and ask questions about the content of the documents. The bot uses the OpenAI API to extract data from the PDFs and provide responses.

## Table of Contents
- [Installation](#installation)
- [Backend API Endpoints](#backend-api-endpoints)
- [Frontend Functionality](#frontend-functionality)
- [Using OpenAI API](#using-openai-api)
- [Sample Responses](#sample-responses)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/document-qa-bot.git
    cd document-qa-bot
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `backend` directory with the following content:
        ```
        MONGO_URI=your_mongodb_connection_string
        OPENAI_API_KEY=your_openai_api_key
        PORT=5000
        ```

4. Start the backend server:
    ```bash
    cd backend
    npm start
    ```

5. Start the frontend development server:
    ```bash
    cd frontend
    npm run dev
    ```

## Backend API Endpoints

### Upload Document
- **Endpoint:** `POST /api/documents/upload`
- **Description:** Uploads a PDF document and processes its content.
- **Request Body:** `multipart/form-data` with a `file` field containing the PDF file.
- **Response:**
    ```json
    {
        "message": "File uploaded and processed successfully",
        "content": "Extracted content from the PDF"
    }
    ```

### Ask Question
- **Endpoint:** `POST /api/documents/ask`
- **Description:** Asks a question about the content of the most recently uploaded document.
- **Request Body:** `application/json` with a `question` field.
- **Response:**
    ```json
    {
        "answer": "Response from OpenAI based on the document content"
    }
    ```

## Frontend Functionality

### Home Page
- **Components:**
    - `UploadForm`: Allows users to upload a PDF document.
    - `ChatBox`: Allows users to ask questions about the uploaded document.

### UploadForm Component
- **Description:** Handles file upload and sends the file to the backend API.
- **Styles:** Uses `UploadForm.module.css` for styling.

### ChatBox Component
- **Description:** Handles user questions and displays the answers from the backend API.
- **Styles:** Uses `ChatBox.module.css` for styling.

## Using OpenAI API

The project uses the OpenAI API to extract data from PDFs and provide responses to user questions. The `documentController.js` file contains the logic for processing documents and asking questions.

### Process Document
- Reads the uploaded PDF file.
- Extracts text content using `pdf-parse`.
- Saves the document content to MongoDB.

### Ask Question
- Retrieves the most recently uploaded document from MongoDB.
- Constructs a prompt with the document content and user question.
- Sends the prompt to OpenAI API and returns the response.

## Sample Responses

Here are some sample responses presented in PNG files:

![Sample Upload Response](./samples/upload_response.png)
![Sample Ask Response](./samples/ask_response.png)