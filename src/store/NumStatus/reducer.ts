import handleNum from "./index"

let reducer = (state ={...handleNum.state},action:{type:string,val:number})=>{
    let newState =JSON.parse(JSON.stringify(state))
    // switch (action.type) {
    //     case handleNum.add1:
    //         handleNum.actions.add1(newState,action)
    //         break;
    //     case handleNum.add2:
    //         handleNum.actions.add2(newState,action)
    //         break;
    //     default:
    //         break;
    // }
    //优化
    for(let key in handleNum.actionNames){
        //判断是不是相等
        if (action.type===handleNum.actionNames[key]) {
            handleNum.actions[handleNum.actionNames[key]](newState,action);
            break;
        }
    }
    //这样写就达到每一次写一个方法就会自动更新，不需要手动添加

    return newState
}
export default reducer