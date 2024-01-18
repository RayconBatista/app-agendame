
import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from "vuex";
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import authGuard from './guards';
// import store from "@/store"
import { TOKEN_NAME } from "@/config"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/ui/views/Errors/Error404.vue')
        },
        MainRoutes,
        ...AuthRoutes,
    ]
});

router.beforeEach(authGuard)

export default router;