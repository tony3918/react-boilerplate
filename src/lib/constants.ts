export const API_HOST =
  process.env.NODE_ENV === 'development'
    ? 'https://dev.api.allenslibrary.com'
    : 'https://api.allenslibrary.com';
