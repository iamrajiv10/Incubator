import React from 'react'
import './styles/About.css'
import Layout from '../component/Layout'

const About = () => {
  return (
    <Layout title={"About Page"}>
      <div className='about'>
        <div className='core'>
          <h3>  Our Core values</h3>
        <div className='values'>
          <div className='contnt'>
            <img src='https://cdn-icons-png.flaticon.com/512/2244/2244612.png' />
            <h5>Positivity is CENTRAL</h5>
          </div>
          <div className='contnt'>
            <img src='https://cdn-icons-png.flaticon.com/512/1017/1017339.png' />
            <h5>Proactivity earns BUSINESS</h5>
          </div>
          <div className='contnt'>
            <img src='https://cdn-icons-png.flaticon.com/512/3339/3339845.png' />
            <h5>Quality brings LONGEVITY</h5>
          </div>
          <div className='contnt'>
            <img src='https://cdn-icons-png.flaticon.com/512/3131/3131333.png' />
            <h5>Teamwork DELIVERS</h5>
          </div>
          <div className='contnt'>
            <img src='https://www.freeiconspng.com/uploads/business-meeting-conversation-job-interview-teamwork-icon-13.png' />
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