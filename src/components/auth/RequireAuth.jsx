import React from "react"
import { Navigate, useLocation } from "react-router-dom"
//确保某些页面在用户登录时才能访问
const RequireAuth = ({ children }) => {
	const user = localStorage.getItem("userId")
	const location = useLocation()
	if (!user) {
		return <Navigate to="/login" state={{ path: location.pathname }} />// 重定向到登录页面并保存当前路径
	}
	return children// 如果用户已登录，显示子组件
}
export default RequireAuth