import handleArr from "./index"

let reducer = (state ={...handleArr.state},action:{type:string,val:number})=>{
    let newState =JSON.parse(JSON.stringify(state))
    for(let key in handleArr.actionNames){
        //判断是不是相等
        if (action.type===handleArr.actionNames[key]) {
            handleArr.actions[handleArr.actionNames[key]](newState,action);
            break;
        }
    }
    //这样写就达到每一次写一个方法就会自动更新，不需要手动添加

    return newState
}
export default reducer