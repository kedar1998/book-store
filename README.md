# Awesome Book Library API
[![Node.js](https://img.shields.io/badge/Node.js-v14.17.5-green)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v4.4.1-lightgrey)](https://www.mongodb.com/)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)



Welcome to the Awesome Book Library API! This API allows you to manage users and books in a simple and efficient manner.

Link to video - https://clipchamp.com/watch/TF8eXo8DXrj

## Table of Contents
- [User Endpoints](#user-endpoints)
    - [Sign Up](#sign-up)
    - [Sign In](#sign-in)
- [Book Endpoints](#book-endpoints)
    - [Add a Book](#add-a-book)
    - [Get All Books](#get-all-books)
    - [Get a Book](#get-a-book)
    - [Update a Book](#update-a-book)
    - [Delete a Book](#delete-a-book)
- [Error Handling](#error-handling)
- [Security](#security)
- [Additional Notes](#additional-notes)

## User Endpoints

### Sign Up
- **Endpoint:** `POST /api/users/signup`
- **Description:** Registers a new user.
- **Request Body:**
    ```json
    {
      "name": "User's Name",
      "email": "user@example.com",
      "password": "user_password"
    }
    ```
- **Response:** 
    - Returns user details and a JSON Web Token (JWT) for authentication.

### Sign In
- **Endpoint:** `POST /api/users/signin`
- **Description:** Authenticates a user for login.
- **Request Body:**
    ```json
    {
      "email": "user@example.com",
      "password": "user_password"
    }
    ```
- **Response:** 
    - Returns user details and a JWT if credentials are correct.

## Book Endpoints

### Add a Book
- **Endpoint:** `POST /api/books`
- **Description:** Adds a new book to the database.
- **Request Body:**
    ```json
    {
      "title": "Book Title",
      "summary": "Brief book summary"
    }
    ```
- **Response:** 
    - Returns the details of the added book.

### Get All Books
- **Endpoint:** `GET /api/books`
- **Description:** Retrieves all books from the database.
- **Response:** 
    - Returns an array of all books.

### Get a Book
- **Endpoint:** `GET /api/books/:id`
- **Description:** Retrieves details of a specific book.
- **Response:** 
    - Returns the details of the requested book.

### Update a Book
- **Endpoint:** `PUT /api/books/:id`
- **Description:** Updates details of a specific book.
- **Request Body:**
    ```json
    {
      "title": "New Book Title",
      "summary": "Updated book summary"
    }
    ```
- **Response:** 
    - Returns a success message and the updated book details.

### Delete a Book
- **Endpoint:** `DELETE /api/books/:id`
- **Description:** Deletes a specific book.
- **Response:** 
    - Returns a success message and the deleted book details.

## Error Handling
- The API handles various errors:
    - `400 Bad Request`: When required parameters are missing or incorrect.
    - `401 Unauthorized`: When login credentials are invalid.
    - `404 Not Found`: When requested resources are not found.
    - `500 Internal Server Error`: For other unhandled errors.

### Security
- Authentication is handled via JSON Web Tokens (JWT).
- User passwords are encrypted using bcrypt before being stored in the database.

## Additional Notes
- Users can sign up, sign in, add, retrieve, update, and delete books, provided they are authorized.
- Authorization is checked to ensure users can only update or delete their own books.
