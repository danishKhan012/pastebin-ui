# Pastebin Lite

Pastebin Lite is a simplified Pastebin-like application built as a take-home assignment.  
It allows users to create text pastes with optional expiration time and view limits, and share them using short URLs.

The project consists of a React frontend and a Node.js + Express backend, with Redis used for persistent storage.

---

## Live Demo

Frontend (UI):  
https://pastebin-ui-opal.vercel.app

The backend is deployed separately and is consumed by the frontend via API calls.

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- React Router

### Backend
- Node.js
- Express
- TypeScript
- Redis (Upstash)

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: Upstash Redis

---

## Features

- Create a paste with text content
- Optional expiration time (TTL)
- Optional maximum view limit
- Short Base-24 paste IDs
- JSON API for fetching pastes
- HTML endpoint for viewing pastes
- Persistent storage using Redis
- Deterministic time support for testing

---

## Project Structure

The project is divided into two independent parts:
- `frontend` – React-based user interface
- `backend` – Node.js + Express API server

---

## Running Locally

### Prerequisites
- Node.js (v18 or later)
- npm
- Redis instance (Upstash recommended)

---

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/danishKhan012/pastebin-auth.git

# Navigate to backend directory
cd pastebin-auth/backend

# Install dependencies
npm install
# run command
npm run dev