import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {FaBars,FaHome,FaUserAlt,FaSignInAlt} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const routes = [
    {
        path:'/',
        name:'Home',
        icon:<FaHome></FaHome>
    },
    {
        path:'/about',
        name:'About',
        icon:<FaUserAlt></FaUserAlt>
    },
    {
        path:'/login',
        name:'Login',
        icon:<FaSignInAlt></FaSignInAlt>
    }
]
const Sidebar = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    return (
       <motion.div animate={{width:isOpen?'200px':'45px'}} className="side-bar">
            <div className='top-section'>
                <div className="logo">
                    {
                        isOpen && <h3>Fahim Muntasir</h3>
                    }
                </div>
                <div>
                    <FaBars onClick={toggle}></FaBars>
                </div>
            </div>
            <div className="routing-section">
                {
                    routes.map(route=>(
                        <NavLink key={route.path} to={route.path} className="nav-link">
                            <div className='nav-icon'>{route.icon}</div>
                            <div className='nav-name'>{route.name}</div>
                        </NavLink>
                    ))
                }
            </div>
       </motion.div>
    );
};

export default Sidebar;