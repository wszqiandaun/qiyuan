type RootState = ReturnType<typeof import('@/store').getState>
//ts提供的returntype方法获取类型

interface Window{
    __REDUX_DEVTOOLS_EXTENSION__:function;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:Function;
}