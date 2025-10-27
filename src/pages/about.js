import React from 'react'
import styles from '../styles/about.module.css'

function About() {
  return (
    <>
    <style jsx>
    {
    `.inner_text
    {
      color: rgb(171, 177, 185);
      line-height: 25px;
      margin-bottom: 10px;
    }`
    }  
    </style>
    <div className={styles.about_container}>
    <h2 className={styles.about_us_text}>About us</h2>
    <div className='inner_text'>At Hunting Coders, we believe in the power of coding to transform ideas into reality. Our blog is a digital hub where passionate coders, developers, and tech enthusiasts converge to explore, learn, and share their knowledge about the ever-evolving world of programming.</div>
    <h2 className={styles.coder_text}>Making coders community happy by giving services.</h2>
    <div className={styles.inner_container}>
    <h3 className={styles.community_text}>&lt;/&gt; Community Building</h3>
    <div className='inner_text'>Join a thriving community of like-minded individuals who share a passion for coding. Connect with fellow developers, ask questions, and engage in discussions that foster learning and collaboration.</div>
    </div>
    <div className={styles.inner_container}>
    <h3 className={styles.ps_text}>&lt;/&gt; Problem Solving</h3>
    <div className='inner_text'>Encounter coding challenges? Our blog provides practical solutions and troubleshooting guides to help you overcome obstacles in your coding journey.</div>
    </div>
    <div className={styles.inner_container}>
    <h3 className={styles.lp_text}>&lt;/&gt; Learning Paths</h3>
    <div className='inner_text'>Structured learning resources to help you master programming concepts, from beginner to advanced. Follow our curated paths to build your skills systematically.</div>
    </div>
    <div className={styles.inner_container}>
    <h3 className={styles.techtrends_text}>&lt;/&gt; Tech Trends and Insights</h3>
    <div className='inner_text'>Stay ahead of the curve with our coverage of the latest trends, tools, and frameworks in the tech industry. Our team of experts keeps you informed about the rapidly changing landscape of programming.</div>
    </div>
    </div>

    </>
  )
}

export default About
