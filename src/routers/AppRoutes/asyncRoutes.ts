const asyncMenuData = [
  {
    id: 1,
    name: "增删改查示例",
    path: "/curdDemo",
    element: "CurdDemo"
  },
  {
    id: 2,
    name: "动态菜单2",
    path: "/asyncMenu2",
    element: "AsyncPagesTwo"
  },
  {
    id: 3,
    name: "动态-嵌套菜单",
    path: "/asyncChildrenMenu",
    element: "AsyncChildrenPages",
    children: [
      {
        id: 31,
        name: "动态-嵌套菜单1",
        path: "/asyncChildrenMenu/asyncChildren1",
        element: "AsyncChildrenOne"
      },
      {
        id: 32,
        name: "动态-嵌套菜单2",
        path: "/asyncChildrenMenu/asyncChildren2",
        element: "AsyncChildrenTwo"
      }
    ]
  }
]
export const getServerMenuData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(asyncMenuData)
    }, 0)
  })
}












