import React from 'react'
import styles from "./Hero.module.css"
import getImageURL from '../../utils'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, just call me Audrey</h1>
            <p className={styles.description}>I'm an aspiring CS and Data Science Student. Reach out if you want to connect with me!</p>
            <a href="mailto:khueanhbui@gmail.com" className={styles.contactBtn}>Contact Me</a>
            <a href="https://docs.google.com/document/d/1qgKqYF4wM79P-bW9ktXd1ziL2SoTVFsg/edit?usp=sharing&ouid=110017767100274330519&rtpof=true&sd=true" className={styles.resumeBtn}>My Resume</a>
        </div>
        <img src={getImageURL("hero/laptop wave.png")} alt="myImage" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur}/>
        
    </section>
  )
}
export default Hero
