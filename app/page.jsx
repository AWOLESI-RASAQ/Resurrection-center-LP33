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
          <h1> Welcome to Resurrection centre LP33- DE slink</h1>
          <div className="NavButton">More details.</div>
          </div>
          
      </header>
      <section className={styles.otherPrograms}>
        <div className={styles.otherProgramsDIV}>
          <h2>Cultivating Mental, Physical and Spiritual Growth</h2>
          <div className="navbtn">
            Other programs
          </div>
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
