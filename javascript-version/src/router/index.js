import { setupLayouts } from 'virtual:generated-layouts';
import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from '~pages';

// Importa el componente de la página de inicio.
import HomePage from '@/home/index.vue';

// Define explícitamente la ruta de inicio y cualquier otra ruta estática si es necesario.
const staticRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  // Aquí puedes agregar más rutas estáticas si las tienes.
];

// Crea las rutas finales combinando las rutas estáticas con las generadas dinámicamente.
const routes = [
  ...staticRoutes,
  ...setupLayouts(generatedRoutes),
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.body.style.overflow = 'auto';
  next();
});

export default router;
