import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { useState } from 'react';
  import {  Menu } from 'antd';
  import {useNavigate,useLocation} from 'react-router-dom'

  type MenuItem = Required<MenuProps>['items'][number];
  
//   function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
//   ): MenuItem {
//     return {
//       key,
//       icon,
//       children,
//       label,
//     } as MenuItem;
//   }
//   const items: MenuItem[] = [
//     getItem('栏目 1', '/page1', <PieChartOutlined />),
//     getItem('栏目 2', '/page2', <DesktopOutlined />),
//     getItem('User', 'sub1', <UserOutlined />, [
//       getItem('Tom', '3'),
//       getItem('Bill', '4'),
//       getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
//   ];
//登录请求到数据之后，就可以跟items这个数组进行匹配
 const items:MenuItem[]=[
    {
        label: '首页',
        key:  '/page1',
        icon:  <PieChartOutlined />
    },
    {
        label: '个人',
        key:  'page3',
        icon:  <UserOutlined />,
        children:[
            {
                label:'个人博客',
                key:'/page3/page301',
            },
            {
                label:'个人中心',
                key:'/page3/page302',
            },
            {
                label:'发布博客',
                key:'/page3/page303',
            }
        ]
    }
 ]
  const Comp: React.FC = () => {
    const navigateTo=useNavigate()
    const currentRoute = useLocation()
    const menuClick=(e:{key:string})=>{
        //点击跳转到相应路由，编程式导航 利用到一个hook
        navigateTo(e.key)
    }
    let firstOpenKey:string ='';
    //找出展开项对应的栏目
    //在这里进行对比
    function findKey(obj:{key:string}){
        return obj.key === currentRoute.pathname
    }
    //对比多个children
    for(let i=0;i<items.length;i++){
        //判断能不能找到
        if(items[i]!['children'] && items[i]!['children'].length>0 && items[i]!['children'].find(findKey)){
            firstOpenKey = items[i]!.key as string;
            break;
        }
    }
    // items[]['chirdlen'].find(findKey)
    const [openkeys, setOpenKeys] = useState([firstOpenKey]);
    const handleOpenChange= (keys:string[])=>{
        //keys是一个数组记录了当前哪一项是展开的
        console.log(keys);
        //把数组修改成最后一项
        setOpenKeys([keys[keys.length-1]])
    }
    return (
        <Menu 
            theme="dark" 
            defaultSelectedKeys={[currentRoute.pathname]} 
            mode="inline" 
            //菜单项数据
            items={items} 
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            //当前菜单展开项的key数组
            openKeys={openkeys}
        />
    )

  }
  export default Comp