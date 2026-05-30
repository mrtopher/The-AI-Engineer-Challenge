/**
 * Chat API client for the FastAPI backend.
 * Uses NEXT_PUBLIC_API_URL in local dev (e.g. http://localhost:8000).
 * On Vercel, leave it unset so requests go to the same-origin /api/chat route.
 */
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "";

export class ChatApiError extends Error {
  constructor(
    message: string,
    public status?: number,
  ) {
    super(message);
    this.name = "ChatApiError";
  }
}

export async function sendChatMessage(message: string): Promise<string> {
  const response = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    let detail = `Request failed (${response.status})`;
    try {
      const errorBody = (await response.json()) as { detail?: string };
      if (errorBody.detail) detail = errorBody.detail;
    } catch {
      /* ignore parse errors */
    }
    throw new ChatApiError(detail, response.status);
  }

  const data = (await response.json()) as { reply: string };
  return data.reply;
}
