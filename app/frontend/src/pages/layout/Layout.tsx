import { Outlet } from "react-router-dom";

import styles from "./Layout.module.css";

import { useTheme } from "../../hooks/useTheme";
import { Header } from "../../components/Header/Header";

const Layout = () => {
    const { logo, isShowingHeader, isBrandingEnabled } = useTheme();

    return (
        <div className={styles.layout}>
            {isShowingHeader && <Header brandingEnabled={isBrandingEnabled} logo={logo}></Header>}
            <Outlet />
        </div>
    );
};

export default Layout;
