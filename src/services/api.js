import { API_BASE_URL } from '../config/api';
export async function apiGet(url) {
  try {
    const res = await fetch(
      `${API_BASE_URL}${url}`,
      { headers: { 'Accept': 'application/json' } }
    );

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();

    if (!json || json.success === false) {
      throw new Error('Invalid API response');
    }

    return { data: json.data, error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
}

export async function apiPost(url, payload) {
  try {
    const res = await fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (res.status === 422) {
      const json = await res.json();
      return {
        data: null,
        error: 'Validation error',
        errors: json?.errors || {}
      };
    }

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();

    if (!json || json.success === false) {
      throw new Error('Invalid API response');
    }

    return { data: json.data, error: null, errors: null };
  } catch (err) {
    return { data: null, error: err.message, errors: null };
  }
}
