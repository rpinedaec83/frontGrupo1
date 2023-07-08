import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore, useAlertStore } from '@/stores';
import { Home } from '@/views';
import { accede } from '@/views';
import { Carrito } from '@/views';
import accountRoutes from './account.routes';
import usersRoutes from './users.routes';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: Home },
        {
            path: "/accede",
            component: accede,
            meta: { hideHeaderFooter: true },
        },
        {
            path: "/carrito",
            component: Carrito,
            meta: { hideHeaderFooter: true },
        },
        { ...accountRoutes },
        { ...usersRoutes },
        // catch all redirect to home page
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});