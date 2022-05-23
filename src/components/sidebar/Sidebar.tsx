import './sidebar.scss';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const isActiveFx = ({ isActive }: { isActive: boolean }): string =>
    isActive ? 'nav-active' : '';

  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">adradmin</span>
        </NavLink>
      </div>

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li className="sidebarItem">
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          <NavLink
            to="/users"
            style={{ textDecoration: 'none' }}
            className={isActiveFx}
          >
            <li className="sidebarItem">
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </NavLink>

          {/* TODO: clase activa
          <li className="sidebarItem">
            <NavLink
              to="/users"
              style={{ textDecoration: 'none' }}
              className={isActiveFx}
            >
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </NavLink>
          </li> */}

          <NavLink to="/products" style={{ textDecoration: 'none' }}>
            <li className="sidebarItem">
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </NavLink>
          <li className="sidebarItem">
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li className="sidebarItem">
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li className="sidebarItem">
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li className="sidebarItem">
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li className="sidebarItem">
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li className="sidebarItem">
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li className="sidebarItem">
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li className="sidebarItem">
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li className="sidebarItem">
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
