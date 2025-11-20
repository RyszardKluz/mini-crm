export const apiClient = async <T,>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(`http://localhost:5000${endpoint}`, {
    ...options,
    credentials: options.credentials || 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
