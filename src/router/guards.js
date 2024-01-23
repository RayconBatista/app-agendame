import { TOKEN_NAME } from '@/config';

const authGuard = (to, from, next) => {
  const token = localStorage.getItem(TOKEN_NAME);
  const loggedIn = !!token;
  const isLoginPage = to.name === 'login';
  const isRegisterPage = to.name === 'register';
  const isResetPasswordRoute = to.name === 'forgotPassword';
  const isVerifyEmailRoute = to.name === 'verifyEmail';

  const shouldRedirectToLogin = !loggedIn && !isResetPasswordRoute && to.fullPath !== "/login";
  const shouldRedirectToHome = loggedIn && isLoginPage;

  if (isResetPasswordRoute || isRegisterPage || isVerifyEmailRoute) {
    // Se for uma das rotas especiais, permita a navegação sem verificar o resto das condições
    next();
  } else if (shouldRedirectToLogin) {
    // Redirecione para a página de login se não estiver autenticado e não estiver na página de redefinição de senha
    next({ name: "login", path: '/login', replace: true });
  } else if (shouldRedirectToHome) {
    // Redirecione para a página inicial se estiver autenticado e na página de login
    next({ name: "dashboard" });
  } else {
    // Se nenhuma das condições acima for atendida, permita a navegação
    next();
  }
};

export default authGuard;
