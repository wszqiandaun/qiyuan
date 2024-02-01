import { ChangeEvent, useEffect, useState } from "react"
import { Input,Space,Button } from 'antd';
import styles from "./login.module.scss"
import initLoginBg from "./init.ts"
import './login.less'
import { useNavigate } from "react-router-dom"
const view = ()=>{
  let navigateTo = useNavigate();
  // 加载完这个组件之后，加载背景
  useEffect(()=>{
    initLoginBg();
    window.onresize = function(){initLoginBg()};
  },[]);
  // 获取用户输入的信息
  const [usernameVal,setUsernameVal] = useState(""); // 定义用户输入用户名这个变量
  const [passwordVal,setPasswordVal] = useState(""); // 定义用户输入密码这个变量
  const usernameChange = (e:ChangeEvent<HTMLInputElement>)=>{
    // 获取用户输入的用户名
    // console.log(e.target.value);
    // 修改usernameVal这个变量为用户输入的那个值。 以后拿到usernameVal这个变量就相当于拿到用户输入的信息。
    setUsernameVal(e.target.value);
  }
  const passwordChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setPasswordVal(e.target.value);
  }

  const gotoLogin=()=>{
    navigateTo('/login')
  }
  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{display:"block"}}></canvas>
      {/* 注册盒子 */}
      <div className={styles.loginBox+ " loginbox"}>
          {/* 标题部分 */}
          <div className={styles.title}>
              <h1>启源博客 No.1</h1>
              <p>Strive Everyday</p>
          </div>
          {/* 表单部分 */}
          <div className="form" >
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
              <Input placeholder="用户名" onChange={usernameChange}/>
              <Input.Password placeholder="密码" onChange={passwordChange}/>
              <Button type="primary" className="registerBtn" block >确认注册</Button>
              <Button type="primary" className="loginBtn" block onClick={gotoLogin}>返回登录</Button>
            </Space>
          </div>
      </div>
    </div>
  )
}
export default view