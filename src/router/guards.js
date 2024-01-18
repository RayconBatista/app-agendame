import { TOKEN_NAME } from '@/config'

const authGuard = (to, from, next) => {
  const token                 = localStorage.getItem(TOKEN_NAME);
  const loggedIn              = !!token;
  const isLoginPage           = to.name === 'login';
  const isRegisterPage        = to.name === 'register';
  const isResetPasswordRoute  = to.name === 'forget.password';
  const isVerifyEmailRoute    = to.name === 'verifyEmail';

  const shouldRedirectToLogin = !loggedIn && !isResetPasswordRoute && to.fullPath !== "/login";
  const shouldRedirectToHome  = loggedIn && isLoginPage;

  if (isRegisterPage) {
    next();
  }

  if (isVerifyEmailRoute) {
    next();
  }

  if (shouldRedirectToLogin) {
   next({ name: "login", path: '/login', replace: true });
  }

  if (shouldRedirectToHome) {
    next({ name: "dashboard" });
  }


  next();
};

export default authGuard;
