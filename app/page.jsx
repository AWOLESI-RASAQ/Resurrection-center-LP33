import Nabar from "./component/Nabar/page";
import css from "./lesson.module.css"
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}><Nabar/>
      <header className={styles.header}>
        <div className={styles.overlay}></div>
        <div className={styles.Nabar}>

        </div>
        

        <img className={styles.header_banner} src="/img/img2.webp" alt="Banners" />
        <div className={styles.bannerTxt}>
          <h1> Welcome to Resurrection centre LP33- DE sleek</h1>
          <div className="NavButton">More details</div>
          </div>
          
      </header>  
         
        <section className={styles.otherprog}>
          <div className={styles.otherprogDiv}>
            <h2>Cultivating  mental, physical and spiritual growth</h2>

            <div className={styles.otherprogcont}>
              <div className={styles.otherprogcard}>
                <img src="/img/1fr.jpg" alt="banner" />
                <div className={styles.imgoverlay}></div>
                <p>Fellowship</p>
              </div>

              <div className={styles.otherprogcard}>
                <img src="/img/2fr.jpg" alt="banner" />
                <div className={styles.imgoverlay}></div>
                <p>W2media</p>
              </div>

              <div className={styles.otherprogcard}>
                <img src="/img/3fr.jpg" alt="banner" />
                <div className={styles.imgoverlay}></div>
                <p>Snapshot</p>
              </div>
            </div>
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
