
---

# Grievance Website

## Overview
The **Grievance Website** is a full-stack web application that allows users to submit grievances or complaints through a form. The application is built using **Node.js** and **Express.js** for the backend, **HTML/CSS/JavaScript** for the frontend, and **MongoDB** for data storage. It also includes support for file uploads via **Multer**.

## Features
- **Grievance Submission Form:** Users can submit grievances along with an optional file upload (e.g., documents, images).
- **Email Notifications:** Confirmation emails are sent to users upon successful grievance submission.
- **File Upload Support:** Users can attach supporting files when submitting grievances.
- **Database Storage:** Grievances are stored in a MongoDB database for further processing.

## Tools and Technologies
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose for interaction)
- **File Uploads:** Multer
- **Email Service:** Nodemailer
- **Environment Management:** dotenv
- **Version Control:** Git

## Project Setup

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- **MongoDB** installed or a connection to a remote MongoDB server.
- **Git** for version control.

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/grievance-website.git
   cd grievance-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory with your environment variables:
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```

4. **Run the server:**
   ```bash
   node server.js
   ```

5. **Visit the website:**  
   Go to `http://localhost:7000` to access the grievance submission form.

## File Structure
```
grievance-website/
│
├── public/
│   ├── css/
│   ├── js/
│   └── index.html
│
├── uploads/            # Folder for uploaded files
├── server.js           # Main server script
├── .env                # Environment variables
└── package.json        # Node.js dependencies
```

## Usage
1. **Submit a grievance:**  
   Fill in your name, email, subject, description, and optionally attach a file.
   
2. **Email Confirmation:**  
   Upon successful submission, a confirmation email is sent to the user's email.

3. **Database Storage:**  
   The submitted grievance is saved to the MongoDB database for later review.

## Challenges Faced
- **Database Connection Issues:** Resolved by properly setting up the `.env` file and configuring MongoDB connection.
- **Handling File Uploads:** Configuring Multer to handle file uploads and save them in the appropriate directory.
- **Email Integration:** Sending confirmation emails via Nodemailer.

## Future Enhancements
- Add user authentication for secure grievance submissions.
- Create an admin panel for managing submitted grievances.
- Deploy the website to a production environment.


## Contact
For any questions or inquiries, feel free to contact me at hemanthpusuluri2002@gmail.com.

--- 

This README file gives a concise overview of the project, setup instructions, and future goals.
