import { Search } from "lucide-react";
import styles from "./Nabar.module.css";
const Nabar = () => {
    return ( 
        <div className={styles.navbackground}>
            <h1>
            <div className={styles.Nabar}>
            <div className={styles.Maincontainer}>
                <div className={styles.Navcontainer1}>
                    <img className={styles.Navlogo} src="/img/logo1.png" alt="logo" />
                    <div className={styles.Navlink}>
                        <li>Home</li>
                        <li>Departement</li>
                        <li>Welcome center</li>
                        <li>E-libary</li>
                        <li>feedback</li>
                        <li>Events</li>
                    </div>
                </div>
                <div className={styles.Navcontainer2}>
                    <Search/>
                    <div className="NavButton">Give Now</div>
                </div>
            </div>                   
        </div>
            </h1>

        </div>
        
        
     );
}
export default Nabar;