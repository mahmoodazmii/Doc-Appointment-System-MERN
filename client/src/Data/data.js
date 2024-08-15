import React from "react";
import { NavLink } from "react-router-dom";

// admin menu
export const adminMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "Doctors",
    path: "/admin/doctors",
    icon: "fa-solid fa-list",
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Profile",
    path: "/admin/profile",
    icon: "fa-solid fa-user",
  },
];

export const userMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: "fa-solid fa-list",
  },
  {
    name: "Apply Doctor",
    path: "/apply-doctor",
    icon: "fa-solid fa-list",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa-solid fa-user",
  },
];

const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((item, index) => (
        <li key={index}>
          <NavLink to={item.path} activeClassName="active">
            <i className={item.icon}></i>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const AdminMenu = () => {
  return <Menu menu={adminMenu} />;
};

const UserMenu = () => {
  return <Menu menu={userMenu} />;
};

export { AdminMenu, UserMenu };
