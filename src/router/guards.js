import { TOKEN_NAME } from '@/config'

const authGuard = (to, from, next) => {
    const token = localStorage.getItem(TOKEN_NAME);
    const loggedIn = !!token;
    const isLoginPage = to.name === 'login';
    const isResetPasswordRoute = to.name === 'forget.password';
    
    const shouldRedirectToLogin = !loggedIn && !isResetPasswordRoute && to.fullPath !== "/login";
    const shouldRedirectToHome = loggedIn && isLoginPage;

    if (shouldRedirectToLogin) {
      return next({ name: "login", path: '/login', replace: true });
    }

    if (shouldRedirectToHome) {
      return next({ name: "dashboard" });
    }

    next();
};

export default authGuard;
