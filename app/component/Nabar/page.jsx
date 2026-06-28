import { Search } from "lucide-react";
import styles from "./Nabar.module.css";
const Nabar = () => {
    return ( 
        <div className={styles.Nabar}>
            <div className={styles.Maincontainer}>
                <div className={styles.Navcontainer1}>
                    <img className={styles.Navlogo} src="/img/logo1.png" alt="logo" />
                    <div className={styles.Navlink}>
                         
                    </div>
                </div>
                <div className={styles.Navcontainer2}>
                    <Search/>
                    <div className="NavButton">Give Now</div>
                </div>
            </div>                   
        </div>
     );
}
export default Nabar;