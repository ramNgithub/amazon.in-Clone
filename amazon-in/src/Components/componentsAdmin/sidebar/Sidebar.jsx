import React from 'react'
import "./sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">रV</span></div>
            <hr />
        <div className="center">
            <ul>
                <li>
                    <DashboardIcon/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <PersonOutlineOutlinedIcon/>
                    <span>Users</span>
                </li>
                <li>
                    <span>Products</span>
                </li>
                <li>
                    <ProductionQuantityLimitsIcon/>
                    <span>Orders</span>
                </li>
                <li>
                    <span>Delivery</span>
                </li>
                <li>
                    <span>Stats</span>
                </li>
                <li>
                    <span>Notifications</span>
                </li>
                <li>
                    <span>system Health</span>
                </li>
                <li>
                    <span>Logs</span>
                </li>
                <li>
                    <span>Settings</span>
                </li>
                <li>
                    <span>Profile</span>
                </li>
                <li>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">color option</div>
    </div>
  )
}

export default Sidebar