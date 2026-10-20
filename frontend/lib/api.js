const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://127.0.0.1:8000";

export function getApiUrl() {
  return API_URL;
}

export async function fetchGallery(category = "all") {
  const params = new URLSearchParams();
  if (category && category !== "all") {
    params.set("category", category);
  }
  const query = params.toString();
  const url = `${API_URL}/api/gallery/${query ? `?${query}` : ""}`;

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Gallery API error: ${response.status}`);
  }

  return response.json();
}
