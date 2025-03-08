# 🔐 Secure API Authentication

This is a **Node.js Express app** that demonstrates various authentication methods along with a password verification step. Before accessing the API routes, users must enter a password for verification.
- No Authentication  
- Basic Authentication  
- API Key Authentication  
- Bearer Token Authentication  

## 🚀 Getting Started

### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/your-username/express-auth-demo.git
cd express-auth-demo
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

## 🛠️ Features

Simple password verification before accessing APIs.
Uses Axios to make API calls.
Implements different authentication types:
- 🔓 No Authentication (/noAuth)
- 🔑 Basic Authentication (/basicAuth)
- 🔐 API Key Authentication (/apiKey)
- 🛡️ Bearer Token Authentication (/bearerToken)

## 📂 Project Structure
```
express-auth-demo/
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
