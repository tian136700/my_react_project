
import React from "react";
// 导入 Ant Design 组件
import {Button, Layout, theme} from 'antd';
import {MenuUnfoldOutlined} from "@ant-design/icons";

// 从 Layout 组件中解构出 Header
const {Header} = Layout;

// CommonHeader 组件
const CommonHeader = () => {
    // 使用 Ant Design 的主题系统获取颜色和样式变量
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Header style={{padding: 0, background: colorBgContainer}}>
            {/* 折叠/展开按钮 */}
            <Button
                type="text"               // 按钮类型为文本按钮
                icon={<MenuUnfoldOutlined/>}
                style={{
                    fontSize: '16px',       // 图标大小
                    width: 64,              // 按钮宽度
                    height: 64,             // 按钮高度
                    position: 'absolute',   // 绝对定位
                    top: 0,                 // 顶部对齐
                    zIndex: 1,              // 层级
                    background: colorBgContainer,  // 背景色
                    border: '1px solid #d9d9d9',  // 边框
                }}
                onClick={}
            />
        </Header>
    );
};

export default CommonHeader;