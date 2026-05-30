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

// Token storage — kept in localStorage so the admin session survives reloads.
const TOKEN_KEY = "investlagos_admin_token";
export const getToken = () =>
  typeof window !== "undefined" ? window.localStorage.getItem(TOKEN_KEY) : null;
export const setToken = (token) => {
  if (typeof window === "undefined") return;
  if (token) window.localStorage.setItem(TOKEN_KEY, token);
  else window.localStorage.removeItem(TOKEN_KEY);
};

async function request(
  path,
  { method = "GET", body, headers = {}, auth = false, raw = false } = {}
) {
  const finalHeaders = {
    Accept: "application/json",
    ...headers,
  };

  let finalBody;
  if (raw) {
    // FormData / Blob — let the browser set Content-Type with the boundary.
    finalBody = body;
  } else if (body !== undefined && body !== null) {
    finalHeaders["Content-Type"] = "application/json";
    finalBody = JSON.stringify(body);
  }

  if (auth) {
    const token = getToken();
    if (token) finalHeaders.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: finalHeaders,
    body: finalBody,
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

/**
 * Subscribe to Invest Lagos updates (newsletter + publication notifications).
 * Accepts the camelCase shape produced by the SubscribeSection form; Laravel's
 * StoreSubscriberRequest normalizes the keys on its side.
 */
export function subscribe(formData) {
  return request("/subscribers", { method: "POST", body: formData });
}

/**
 * Fetch the public list of publications. Optional filters:
 *   { q, category, year, per_page }
 * Returns Laravel's paginator payload: { data, current_page, last_page, ... }
 */
export function fetchPublications(params = {}) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") search.append(k, v);
  });
  const qs = search.toString();
  return request(`/publications${qs ? `?${qs}` : ""}`);
}

export function fetchPublicationFilters() {
  return request("/publications/filters");
}

/**
 * Fetch a single published publication by its slug.
 * Returns Laravel's `{ data: publication }` shape.
 */
export function fetchPublication(slug) {
  return request(`/publications/${encodeURIComponent(slug)}`);
}

/* ─────────────────── Admin: auth ─────────────────── */

export function adminLogin({ email, password }) {
  return request("/admin/auth/login", {
    method: "POST",
    body: { email, password },
  });
}

export function adminRegister({ name, email, password, password_confirmation }) {
  return request("/admin/auth/register", {
    method: "POST",
    body: { name, email, password, password_confirmation },
  });
}

export function adminMe() {
  return request("/admin/auth/me", { auth: true });
}

export function adminLogout() {
  return request("/admin/auth/logout", { method: "POST", auth: true });
}

/* ─────────────────── Admin: publications ─────────────────── */

function buildQuery(params) {
  const search = new URLSearchParams();
  Object.entries(params || {}).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") search.append(k, v);
  });
  const qs = search.toString();
  return qs ? `?${qs}` : "";
}

export function adminListPublications(params = {}) {
  return request(`/admin/publications${buildQuery(params)}`, { auth: true });
}

export function adminGetPublication(id) {
  return request(`/admin/publications/${id}`, { auth: true });
}

/**
 * Accepts either a plain object (JSON) or a FormData (multipart) payload.
 * When a FormData is passed we send it as-is so files upload correctly.
 */
export function adminCreatePublication(payload) {
  const isForm = typeof FormData !== "undefined" && payload instanceof FormData;
  return request("/admin/publications", {
    method: "POST",
    body: payload,
    auth: true,
    raw: isForm,
  });
}

export function adminUpdatePublication(id, payload) {
  const isForm = typeof FormData !== "undefined" && payload instanceof FormData;
  if (isForm) {
    // PHP can't parse multipart bodies on real PUT — use POST + _method spoof.
    payload.append("_method", "PUT");
    return request(`/admin/publications/${id}`, {
      method: "POST",
      body: payload,
      auth: true,
      raw: true,
    });
  }
  return request(`/admin/publications/${id}`, {
    method: "PUT",
    body: payload,
    auth: true,
  });
}

export function adminDeletePublication(id) {
  return request(`/admin/publications/${id}`, { method: "DELETE", auth: true });
}

/* ─────────────────── Admin: registrations ─────────────────── */

export function adminListRegistrations(params = {}) {
  return request(`/admin/registrations${buildQuery(params)}`, { auth: true });
}

export function adminGetRegistration(id) {
  return request(`/admin/registrations/${id}`, { auth: true });
}

export function adminUpdateRegistration(id, payload) {
  return request(`/admin/registrations/${id}`, {
    method: "PUT",
    body: payload,
    auth: true,
  });
}

export function adminDeleteRegistration(id) {
  return request(`/admin/registrations/${id}`, { method: "DELETE", auth: true });
}

export function adminRegistrationStats() {
  return request("/admin/registrations/stats", { auth: true });
}

/* ─────────────────── Admin: subscribers ─────────────────── */

export function adminListSubscribers(params = {}) {
  return request(`/admin/subscribers${buildQuery(params)}`, { auth: true });
}

export function adminGetSubscriber(id) {
  return request(`/admin/subscribers/${id}`, { auth: true });
}

export function adminDeleteSubscriber(id) {
  return request(`/admin/subscribers/${id}`, { method: "DELETE", auth: true });
}

export function adminSubscriberStats() {
  return request("/admin/subscribers/stats", { auth: true });
}

export const api = {
  submitRegistration,
  subscribe,
  fetchPublications,
  fetchPublicationFilters,
  fetchPublication,
  adminLogin,
  adminRegister,
  adminMe,
  adminLogout,
  adminListPublications,
  adminGetPublication,
  adminCreatePublication,
  adminUpdatePublication,
  adminDeletePublication,
  adminListRegistrations,
  adminGetRegistration,
  adminUpdateRegistration,
  adminDeleteRegistration,
  adminRegistrationStats,
  adminListSubscribers,
  adminGetSubscriber,
  adminDeleteSubscriber,
  adminSubscriberStats,
};
