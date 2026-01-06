import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Storage from "@/utils/storage";
import { fatchMenus } from "@/routers/routes";
const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: Storage.getItem('userInfo') || null,
        isLogin: !!Storage.getItem('userInfo'),
        dynamicMenu: Storage.getItem('userMenus') || [],
        pageAuth: null
    },
    reducers: {
        setUserInfo: (state, action) => {
            Storage.setItem('userInfo', action.payload);
            state.userInfo = action.payload;
            state.isLogin = !!action.payload
        },
        clearUser: (state) => {
            Storage.removeItem('userInfo');
            Storage.removeItem('userMenus');
            state.userInfo = null;
            state.isLogin = false;
            state.dynamicMenu = [];
        },
        setPageAuth: (state, action) => {
            state.pageAuth = action.payload;
        },
        setDynamicMenu: (state, action) => {
            Storage.setItem('userMenus', action.payload);
            state.dynamicMenu = action.payload;
        }
    },
    selectors: {
        getUserInfo: (state) => state.userInfo, // 用户信息
        getIsLogin: (state) => state.isLogin, // 登录状态
        getPageAuth: (state) => state.pageAuth, // 所有页面权限
        getDynamicMenu: (state) => state.dynamicMenu // 动态菜单数据
    }
});
const userReducer = userSlice.reducer;
// 异步登录action
const mockLogin = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mockUserInfo = {
                username: 'testuser',
                age: 25
            };
            resolve({
                code: 0,
                data: mockUserInfo,
                message: '登录成功'
            });
        }, 1000);
    });
}
// 获取权限菜单
const mockGetDynamicMenu = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                code: 0,
                data: fatchMenus,
                message: '获取菜单成功'
            });
        }, 500);
    });
}
const userLogin = createAsyncThunk('user/login', async (payload, { dispatch }) => {
    // 登录后获取菜单数据
    const { code, data }: any = await mockLogin();
    if (code === 0) {
        // 执行同步action，保存用户信息
        dispatch(userSlice.actions.setUserInfo(data));
        // 获取菜单数据
        const { code: menuCode, data: dynamicMenu }: any = await mockGetDynamicMenu();
        if (menuCode === 0) {
            // 执行同步action，保存菜单数据
            dispatch(userSlice.actions.setDynamicMenu(dynamicMenu));
            return { data, dynamicMenu };
        } else {
            throw new Error('获取菜单失败');
        }
    } else {
        throw new Error('登录失败');
    }
})
// 异步登出action
const mockLogout = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                code: 0,
                message: '登出成功'
            });
        }, 500);
    });
}
const userLogout = createAsyncThunk('user/logout', async (payload, { dispatch }) => {
    // 模拟登出请求
    const { code }: any = await mockLogout();
    if (code === 0) {
        // 执行同步action，保存用户信息
        dispatch(userSlice.actions.clearUser());
        return true;
    } else {
        throw new Error('登出失败----------');
    }
})
// 导出异步action
export { userLogin, userLogout }
// 导出同步action
const { setPageAuth } = userSlice.actions;
export { setPageAuth }
// 导出reducer
export default userReducer
// 导出selectors
export const { getUserInfo, getIsLogin, getPageAuth, getDynamicMenu } = userSlice.selectors;