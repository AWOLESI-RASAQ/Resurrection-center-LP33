import Nabar from "./component/Nabar/page";
import css from "./lesson.module.css"
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.overlay}></div>
        <div className={styles.Nabar}><Nabar /></div>
        <img className={styles.header_banner} src="/img/img2.webp" alt="Banners" />
        <div className={styles.bannerTxt}>
          <h1> Welcome to Resurrection centre LP33- DE sleek</h1>
          <div className="NavButton">More details</div>
          </div>
          
      </header>  
         
        <section className={styles.otherprog}>
          <div className={styles.otherprogDiv}>
            <h2>Cultivating  mental, physical and spiritual growth</h2>
            <div className="NavButton">OTHER PROGRAMS</div> 
          </div>
         
        </section>
        
       
  
        
      
      {/* flex box lesson on 21st june . */}
      <section className={styles.flexboxlesson}>
        <div className={styles.flexbox}>

        </div>
      </section>

    </div>
  );
}
