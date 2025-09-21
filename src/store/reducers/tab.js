import { createSlice} from '@reduxjs/toolkit';

// 这个文件定义了“侧边栏是否折叠”的全局状态（Redux）
// 你可以在任何组件里读取/修改这个状态，用来控制 Sider 的展开/收起

// 使用 createSlice 快速创建一个“状态片段”（slice）
// 一个 slice 包含：名字（name）、初始状态（initialState）、修改状态的方法（reducers）
const tabSlice =createSlice({
    // 这个 slice 的名字，调试时会出现在 action.type 里，比如：tab/collapseMenu
    name:'tab',
    // 初始状态：isCollapsed 表示侧边栏是否折叠（false=展开，true=收起）
    initialState:{
        isCollapsed:false
    },
    // reducers 是一组“修改状态的方法”，每个方法都会自动生成一个 action
    reducers:{
        // collapseMenu：切换折叠状态
        // - 这里可以直接“改写”state，因为 Redux Toolkit 内部用了 Immer 做不可变处理
        // - 每次调用都会把 isCollapsed 从 true 变 false，或从 false 变 true
        collapseMenu:state=>{
            state.isCollapsed=!state.isCollapsed
        }
    }
})

// 导出 action：组件里可以通过 dispatch(collapseMenu()) 来触发折叠切换
export const {collapseMenu} =tabSlice.actions

// 导出 reducer：在 store 里注册，用于真正存储和更新该 slice 的状态
export default tabSlice.reducer

