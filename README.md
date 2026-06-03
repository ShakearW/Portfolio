# Portfolio Project Info

A full-stack personal portfolio with a React frontend, Node.js/Express backend, MySQL database, and Nginx reverse proxy — all containerized with Docker.
- Type of Project: Individual Project
- Purpose: To get more experience with full-stack tools and development 

---

## Prerequisites

Make sure you have these installed before anything else:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) — runs all the containers
- [Node.js](https://nodejs.org/) (v20 or later) — needed for local setup steps
- A Gmail account — used for the contact form to send emails

---

## Project Structure

```
server/
├── backend/        # Node.js + Express + TypeScript API
├── react/          # React + Vite frontend
├── nginx/          # Nginx config (reverse proxy)
├── mysql/          # MySQL config
└── docker-compose.yaml
```

---

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/ShakearW/Portfolio.git
cd Portfolio/server
```

### 2. Create the backend `.env` file

Create a file at `backend/.env` and add the following:

```env
# Email (used for contact form)
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password

# JWT
JWT_SECRET=your_long_random_secret_string

# Database
DATABASE_HOST=db
DATABASE_USER=root
DATABASE_PASSWORD=rootpassword
DATABASE_NAME=mydatabase
DATABASE_URL="mysql://root:rootpassword@db:3306/mydatabase"
```

> **Gmail App Password:** Go to your Google Account → Security → 2-Step Verification → App Passwords. Generate one for "Mail" and paste it as `EMAIL_PASS`. Do not use your regular Gmail password.

> **JWT_SECRET:** Can be any long random string. You can generate one by running `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"` in your terminal.

---

### 3. Install frontend dependencies

```bash
cd react
npm install
cd ..
```

### 4. Install backend dependencies

```bash
cd backend
npm install
cd ..
```

---

### 5. Run the app

From the `server` folder:

```bash
docker compose up --build -d
```

This will:
- Build and start the React frontend (served via Nginx)
- Build and start the Node.js backend
- Start the MySQL database
- Wire everything together on a shared Docker network

The app will be available at **http://localhost**

---

## First-Time Database Setup

After the containers are running, you need to set up the database schema and create a user.

### Run Prisma migrations

```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
```

### Create an admin user

```bash
npx ts-node scripts/createUser.ts
```

---

## Stopping the App

```bash
docker compose down
```

To stop and remove all data (including the database):

```bash
docker compose down -v
```

---

## Troubleshooting

**Backend won't start / missing module errors**
```bash
cd backend
npm install
npx prisma generate
npm run build
docker compose up --build -d
```

**PowerShell script errors on Windows**

Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Then type `Y` to confirm.

**Contact form not sending emails**

Make sure `EMAIL_USER` and `EMAIL_PASS` are correctly set in `backend/.env`. The password must be a Gmail App Password, not your regular Gmail password.

**Port conflicts**

If port 80 or 3001 is already in use on your machine, stop the conflicting process or change the ports in `docker-compose.yaml`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, TypeScript |
| Backend | Node.js, Express, TypeScript |
| Database | MySQL + Prisma ORM |
| Auth | JWT + bcrypt |
| Email | Nodemailer (Gmail) |
| Proxy | Nginx |
| Container | Docker + Docker Compose |
