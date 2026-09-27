import Nabar from "./component/Nabar/page";
import css from "./lesson.module.css"
import styles from "./page.module.css";


export default function Home() {
  return (
  
    <div className={styles.page}><Nabar/>
      <header className={styles.header}>
      <div className={styles.Background}><img src="/img/background img.png" alt="Welcome screen" />
      <div className={styles.overlay}></div>
        <div className={styles.Nabar}>
        <div className={styles.imgoverlay}></div>

      </div>
        
        

    </div>
        

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
        {/*the Loving God div */} 
       {/*<section className={styles.lefttext}>
          <div className={styles.lrtext}>
            <div className={styles.text}>
              <div className={styles.left}>
                <div className={styles.h1div}>
                  <h1>our values</h1>
                </div>
                <div className={styles.h2div}>
                  <h2>Loving God, Loving Others, Loving Life</h2>
                </div> 
              </div> 
              <div className={styles.Right}></div>          
            </div>

          </div>
        </section>*/}
        <section className={styles.lovingothers}>
          <div className={styles.Ltext}>
            <h1>OUR VALUES</h1>
            <h2>
              Loving God, Loving            
            </h2>
            <h3>Others, Loving Life </h3>
          </div>

          <div className={styles.Rtext}>
              <h1>Our Vision</h1>
              <p>
                The vision of the Covenant Nation is to teach Christians who they are
                in Christ Jesus, and how to live a victorious life in their covenant rights and
                privileges.
              </p>
              <h2>Our Mission</h2>
              <p>
                The fulfillment of our mission takes place when those believers become 
                rooted and grounded enough in God’s word to reach out and teach 
                others these same principles.
              </p>
            </div>


          
          
        {/*<div className={styles.Ltext}>
            <div  className={styles.ourvalues}>
              <h1>Our values</h1>
            </div>
            <div className={styles.loving}>
              <h2>Loving God, Loving Others, Loving Life</h2>
            </div>
            
          </div>*/}
          {/*<div className="Rtext"></div>*/}
        </section>
        
      

    </div>
  );
}
