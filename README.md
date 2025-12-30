# Pastebin Lite

A simplified Pastebin-like application built as a take-home assignment.  
Users can create text pastes with optional expiration time and view limits, and share them via short URLs.

This project is built with a clear separation between frontend and backend, strictly following the provided specification.

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- React Router
- Fetch API

### Backend
- Node.js
- Express
- TypeScript
- Redis (Upstash)

### Deployment
- Frontend: Vercel
- Backend: Vercel
- Storage: Upstash Redis

---

## Features

- Create a paste with text content
- Optional expiration time (TTL)
- Optional maximum view limit
- Short, readable Base-24 paste IDs
- JSON API for programmatic access
- HTML endpoint for direct viewing
- Persistent storage using Redis
- Deterministic time support for testing

---

## Project Structure

### Backend
