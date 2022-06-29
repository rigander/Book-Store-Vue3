import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import categoryPage from "@/pages/category-page";
import productPage from "@/pages/product-page";


const routes = [
    {
        path: '/',
        component: Main
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