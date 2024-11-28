import React from "react";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";
import { hasRole } from "../../utils/permissionUtils";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


const Layout = ({ children }: { children: React.ReactNode }) => {
  let userInfo = useSelector((state: RootState) => state.auth.userInfo);
  
  let menu = [
    {
      title: 'Home',
      url: '/',
      access: ['*']
    },
    {
      title: 'Add Employee',
      url: '/employee/add',
      access: ['admin']
    },
    {
      title: 'Enquiry',
      url: '/enquiry/add',
      access: ['sales', 'admin']
    },
    {
      title: 'Estimation',
      url: '/estimation/add',
      access: ['engineering', 'admin']
    }
  ]
  return (
     <main className={styles.main}>
      <nav className={styles.nav}>
        <div>
          <img src="https://ik.imagekit.io/ashishkk22/simform_logo.svg?updatedAt=1697020836220" alt="simform_logo" />
        </div>
        <div>
          <div>
            <ul className={styles.nav_ul}>
              {
                menu.map((ele, index) => {
                if(hasRole(ele.access, userInfo?.role))
                  return (
                    <li key={'nav-'+index}>
                      <Link to={ele.url} className={styles.nav_link}>
                        {ele.title}
                      </Link>
                    </li>    
                  )
                  else null;
                })
              }
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </main>
  );
};

export default Layout;
