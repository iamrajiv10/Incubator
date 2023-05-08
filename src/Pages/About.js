import React from 'react'
import './styles/About.css'
import Layout from '../component/Layout'

const About = () => {
  return (
    <Layout title={"About Page"}>
      <div className='about'>
        <div className='core'>
          <h3>  Our Core values</h3>
        </div>
        <div className='values'>
          <div className='contnt'>
            <img />
            <h5>Positivity is CENTRAL</h5>
          </div>
          <div className='contnt'>
            <h5>Proactivity earns BUSINESS</h5>
          </div>
          <div className='contnt'>
            <h5>Quality brings LONGEVITY</h5>
          </div>
          <div className='contnt'>
            <h5>Teamwork DELIVERS</h5>
          </div>
          <div className='contnt'>
            <h5>Communication gives RESULTS</h5>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About;