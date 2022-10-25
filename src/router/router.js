import Main from '@/pages/Main'
import TokenPage from '@/pages/TokenPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
	{
		path: '/',
		component: Main,
	},
	{
		path: '/tokens',
		component: TokenPage,
	},



]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
})

export default router