// import React from 'react'
import ReactDOM from 'react-dom/client'
//初始化样式
import 'reset-css'
//ui框架的样式
//全局样式
import "@/assets/styles/global.scss"
//组件样式
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
//状态管理库
import { Provider } from "react-redux";
import store from '@/store';//仓库

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
