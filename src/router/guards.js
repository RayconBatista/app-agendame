import { TOKEN_NAME } from '@/config';

export const redirectIfNotAuthenticated = (to, from, next) => {
  const token = localStorage.getItem(TOKEN_NAME);
  if (!token) {
    next({ name: 'login', path: '/login' })
  } else {
    next()
  }
}

export const redirectIfAuthenticated = (to, from, next) => {
  const token = localStorage.getItem(TOKEN_NAME);
  if (token) {
    next({ name: 'dashboard', path: '/' })
  } else {
    next()
  }
}