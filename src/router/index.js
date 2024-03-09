
import { createRouter, createWebHistory } from 'vue-router';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';
import SiteRoutes from './SiteRoutes';
import { useMeStore } from '@/store/me';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            meta: {
                title: 'Error 404',
                public: true
            },
            component: () => import('@/ui/views/Errors/Error404.vue')
        },
        {
            path: '/unauthorized',
            name: 'Unauthorized',
            meta: {
                title: 'Não autorizado',
                public: true
            },
            component: () => import('@/ui/views/Errors/Error403.vue')
        },
        ...AuthRoutes,
        ...MainRoutes,
        ...SiteRoutes,
    ]
});

router.beforeEach(async (to, from, next) => {
    document.title  = to.meta.title;
    const meStore   = useMeStore();

    const token = localStorage.getItem(import.meta.env.VITE_APP_TOKEN_NAME);
    if(token) {
        await meStore.getMe(); // Aguarde a conclusão da ação getMe
    }

    next();
})

// router.beforeEach(async (to, from, next) => {
//     document.title = to.meta.title;
//     const store = useStore();
//     const token = localStorage.getItem(TOKEN_NAME)
//     if(token) {
//         await store.dispatch('getMe'); // Aguarde a conclusão da ação getMe
//     }

//     const isAuthenticated = store?.state?.auth?.loggedIn;
//     const user = store?.state?.auth?.me;
//     const requiresAuth = !to.meta.public;

//     if (requiresAuth && !isAuthenticated) {
//         next('/login'); // Redireciona para a página de login se a rota requer autenticação e o usuário não está autenticado
//         return;
//     }

//     //Verifica se o usuário possui a função de administrador
//     const isAdmin = user?.roles.some(role => {
//         return role?.name === 'super-admin' || role?.name === 'admin';
//     });

//     if (!isAdmin && !to.meta.public) {
//         next({ name: 'Unauthorized' }); // Redireciona para a página Unauthorized se o usuário não tiver permissão para acessar uma rota protegida
//         return;
//     }

//     next(); // Permite que o usuário acesse a próxima rota
// });


export default router;