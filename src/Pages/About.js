import React from 'react'
import './styles/About.css'
import Layout from '../component/Layout'
import positivity from '../img/positiv.png'
import proactivity from '../img/proactive.png'
import quality from '../img/quality.png'
import teamwork from '../img/teamwork.png'
import communi from '../img/communication.png'

const About = () => {
  return (
    <Layout title={"About Page"}>
      <div className='about'>
        <div className='core'>
          <h3>  Our Core values</h3>
        <div className='values'>
          <div className='contnt'>
            <img src={positivity} />
            <h5>Positivity is CENTRAL</h5>
          </div>
          <div className='contnt'>
            <img src={proactivity} />
            <h5>Proactivity earns BUSINESS</h5>
          </div>
          <div className='contnt'>
            <img src={quality} />
            <h5>Quality brings LONGEVITY</h5>
          </div>
          <div className='contnt'>
            <img src={teamwork} />
            <h5>Teamwork DELIVERS</h5>
          </div>
          <div className='contnt'>
            <img src={communi} />
            <h5>Communication gives RESULTS</h5>
          </div>
        </div>
        </div>
        <div className='aboutdetail'>
          <h1>About Us</h1>
        </div>
      </div>
    </Layout>
  )
}

export default About;