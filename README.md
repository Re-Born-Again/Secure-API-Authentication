# 🔐 Secure API Authentication

This is a **Node.js Express app** that demonstrates various authentication methods along with a password verification step. Before accessing the API routes, users must enter a password for verification.
- No Authentication  
- Basic Authentication  
- API Key Authentication  
- Bearer Token Authentication  

## 🛠️ Features

- Password-protected access to API endpoints.
- Demonstrates authentication using:
    - No Auth
    - Basic Auth
    - API Key
    - Bearer Token
- Built using:
    - Express.js
    - Axios
    - EJS (Embedded JavaScript Templates)
- Handles and displays API responses dynamically.

## 📋 Prerequisites

Ensure you have the following installed:

- Node.js (v18 or higher)
- npm (Node Package Manager)


## 🚀 Getting Started

### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/Re-Born-Again/Secure-API-Authentication.git
cd Secure-API-Authentication
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Run the Server
```bash
nodemon index.js
```
or
```bash
node index.js
```
### 4️⃣ Access the App
Open your browser and visit:
```bash
http://localhost:3000
```

## 🔐 Usage Instructions

1. **Access Control:**
   - On the homepage, enter the password: `ILoveProgramming`

2. **Authentication Methods:**
   - **No Auth:** Requests public data.
   - **Basic Auth:** Uses a username and password.
   - **API Key:** Accesses secured endpoints via an API key.
   - **Bearer Token:** Authenticates with a token.

## 📂 Project Structure
```
Secure-API-Authentication/
│-- views/
│   ├── index.ejs
│   ├── permit.ejs
│-- index.js
│-- package.json
│-- package-lock.json
```

## 🔄 API Routes
| Route         | Method        | Description                       |
| ------------- |:-------------:| ----------------------------------|
| /             | GET           | Home Page (Login)                 |
| /permit       | POST          | Password verification             |
| /noAuth       | GET           | Access API without authentication |
| /basicAuth    | GET           | API with Basic Authentication     |
| /apiKey       | GET           | API with API Key                  |
| /bearerToken  | GET           | API with Bearer Token             |

## 📘 API Source

This project uses the ```AppBrewery Secrets API``` for demonstration purposes.
