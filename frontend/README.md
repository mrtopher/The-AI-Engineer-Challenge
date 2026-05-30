# MORPHEUS // Matrix Mental Coach Frontend

A Matrix-inspired chat interface for the FastAPI mental coach backend. Green phosphor glow, falling code rain, CRT scanlines — the whole simulation.

## Prerequisites

- Node.js 18+
- Backend running at `http://localhost:8000` (see project root README)

## Local Development

1. **Install dependencies**

   ```bash
   cd frontend
   npm install
   ```

2. **Configure the API URL**

   ```bash
   cp .env.local.example .env.local
   ```

   `.env.local` points the frontend at `http://localhost:8000`. On Vercel, leave `NEXT_PUBLIC_API_URL` unset so requests hit same-origin `/api/chat`.

3. **Start the backend** (from project root, in another terminal)

   ```bash
   export OPENAI_API_KEY=sk-your-key-here
   uv run uvicorn api.index:app --reload
   ```

4. **Start the frontend**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) and start chatting.

## Production (Vercel)

Deploy from the project root with `vercel`. The root `vercel.json` routes:

- `/api/*` → FastAPI backend
- everything else → this Next.js app

Set `OPENAI_API_KEY` in your Vercel project environment variables.

## Stack

- **Next.js** (App Router)
- **Tailwind CSS**
- **Share Tech Mono** + **Orbitron** (Google Fonts)
