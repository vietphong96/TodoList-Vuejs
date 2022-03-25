import {createRouter,createWebHistory} from 'vue-router'
import btTodoList from "@/components/btTodoList";

const routes =[
    {path:"/todolist",component: btTodoList }
]

const  router = createRouter({
    history: createWebHistory(),
    routes
})

export  default  router;