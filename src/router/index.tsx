import React,{ lazy } from "react";
import Home from '@/views/Home';

// import About from '@/views/About'
// import User from '@/views/User'
// const About =lazy(()=>import('../views/About'))
// const User =lazy(()=>import('../views/User'))
import Login from '@/views/Login';
import Register from '@/views/Register';
const Page1 =lazy(()=>import('../views/page1'))
const Page301 =lazy(()=>import('../views/Page301'))
//重定向
import { Navigate } from "react-router-dom";
const withLoadingComponent = (comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading</div>}>
        {comp}
    </React.Suspense>
)
const routes = [
    // 嵌套路由开始
     {
        path:'/',
        element:<Navigate to='/page1' />
     },
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'/page1',
                element:withLoadingComponent(<Page1/>)
            },
            {
                path:'/page3/page301',
                element:withLoadingComponent(<Page301/>)
            }
        ]
    },    // 嵌套路由结束
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'*',
        element:<Navigate to='/page1' /> 
    }
    // 嵌套路由结束

    //  {
    //     path:'/home',
    //     element:<Home />
    //  },
    //  {
    //     path:'/about',
    //     element:withLoadingComponent(<About/>)
    //  },
    //  {
    //     path:'/user',
    //     element:withLoadingComponent(<User/>)
    //  }
]
export default routes