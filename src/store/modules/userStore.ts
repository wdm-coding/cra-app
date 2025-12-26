import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Storage from "@/utils/storage";
const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: Storage.getItem('userInfo') || null,
        isLogin: !!Storage.getItem('userInfo')
    },
    reducers: {
        setUserInfo: (state, action) => {
            Storage.setItem('userInfo', action.payload);
            state.userInfo = action.payload;
            state.isLogin = !!action.payload
        },
        clearUserInfo: (state) => {
            Storage.removeItem('userInfo');
            state.userInfo = null;
            state.isLogin = false;
        }
    },
    selectors: {
        getUserInfo: (state) => state.userInfo,
        getIsLogin: (state) => state.isLogin
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
            // reject('服务器错误----')
            resolve({
                code: 0,
                data: mockUserInfo,
                message: '登录成功'
            });
        }, 1000);
    });
}
const userLogin = createAsyncThunk('user/login', async (payload, { dispatch }) => {
    const { code, data }: any = await mockLogin();
    if (code === 0) {
        // 执行同步action，保存用户信息
        dispatch(userSlice.actions.setUserInfo(data));
        return data;
    } else {
        throw new Error('登录失败----------');
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
        dispatch(userSlice.actions.clearUserInfo());
        return true;
    } else {
        throw new Error('登出失败----------');
    }
})
// 导出异步action
export { userLogin, userLogout }
// 导出reducer
export default userReducer
// 导出selectors
export const { getUserInfo, getIsLogin } = userSlice.selectors;