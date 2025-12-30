const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function createPaste(payload: {
  content: string;
  ttl_seconds?: number;
  max_views?: number;
}) {
  const res = await fetch(`${BASE_URL}/api/pastes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to create paste");
  }

  return res.json();
}

export async function fetchPaste(id: string) {
  const res = await fetch(`${BASE_URL}/api/pastes/${id}`);

  if (!res.ok) {
    throw new Error("Paste not found or expired");
  }

  return res.json();
}
