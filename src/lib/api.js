// Thin client for the Invest Lagos Laravel API.
// Base URL is configured via VITE_API_URL in the project .env file.

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

/**
 * Custom error thrown when the API responds with a non-2xx status.
 * Exposes:
 *   - status   : HTTP status code
 *   - errors   : field -> string[] map (from Laravel 422 responses), or null
 *   - payload  : full parsed JSON body, if any
 */
export class ApiError extends Error {
  constructor(message, { status, errors = null, payload = null } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = errors;
    this.payload = payload;
  }
}

async function request(path, { method = "GET", body, headers = {} } = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      Accept: "application/json",
      ...(body ? { "Content-Type": "application/json" } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  // 204 No Content
  if (res.status === 204) return null;

  let payload = null;
  try {
    payload = await res.json();
  } catch {
    payload = null;
  }

  if (!res.ok) {
    throw new ApiError(payload?.message || `Request failed with ${res.status}`, {
      status: res.status,
      errors: payload?.errors || null,
      payload,
    });
  }

  return payload;
}

/**
 * Submit a registration. Accepts the camelCase shape produced by the
 * RegistrationForm component (including the nested `consent` object).
 * Laravel's StoreRegistrationRequest normalizes the keys on its side.
 */
export function submitRegistration(formData) {
  return request("/registrations", { method: "POST", body: formData });
}

export const api = { submitRegistration };
