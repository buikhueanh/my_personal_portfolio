import React from 'react'
import styles from "./About.module.css"
import getImageURL from '../../utils'



const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content} id='content'>
            <img className={styles.aboutImage} src={getImageURL("about/aboutImg.png")} alt="Me holding a cat" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageURL("about/full_stack.png")} alt="Full-stack Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Interested in becoming a Full-stack Developer</h3>
                        <p> I have a strong desire to design and build responsive websites 
                            as well as a robust back-end system</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageURL("about/analysis.png")} alt="Analysis Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Interested in Data Analytics</h3>
                        <p> My strengths are conducting regression analysis to uncover actionable insights
                            from complex datasets and identifying key findings through rigorous statistical methods.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageURL("about/extra.png")} alt="Other Information" />
                    <div className={styles.aboutItemText}>
                        <h3>Other Information about me</h3>
                        <ul >
                            <li className={styles.moreInfo}>I'm currently studying Computer Science
                                and Business Analytics at DePauw University.</li>
                            <li className={styles.moreInfo}>I'm from Hanoi, Vietnam.</li>
                            <li className={styles.moreInfo}>Outside of classes, I love playing pool and badminton. 
                                Just a fun fact, but I'm a cat person.</li>
                        </ul>
                    </div>
                </li>

            </ul>
          
            
        </div>
    </section>
  )
}

export default About
