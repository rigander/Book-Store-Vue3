import mainPage from "@/pages/main-page";
import {createRouter, createWebHistory} from "vue-router";
import categoryPage from "@/pages/category-page";
import productPage from "@/pages/product-page";


const routes = [
    {
        path: '/',
        component: mainPage
    },
    {
        path: '/product',
        component: productPage
    },
    {
        path: '/category',
        component: categoryPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;