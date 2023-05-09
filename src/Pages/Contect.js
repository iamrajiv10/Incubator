import React from 'react'
import './styles/Connect.css'
import Layout from '../component/Layout'

const Contect = () => {
  return (
    <Layout title={"Contact us"}>
      <div>
        <div className='con-head'>
          <h1>Get in touch with us !</h1>
        </div>
        <div className='connect'>
          
          <div className='con-form'>
            <form>
              
              <input type='text' placeholder='Full Name' required/>
              
              <input type='email' placeholder='Email Adress' required/>
              
              <input type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder='1234567890' required />

              <input type='text' placeholder='Company' required />
              
              <select required>
                <option>How did you find us?</option>
                <option>From Google or other search engine</option>
                <option>Referal</option>
                <option>Other</option>
              </select>
              
              <textarea placeholder='Message' /><br/><br/>
              <button type='submit' >Submit</button>
            </form>
          </div>
          <div className='con-para'>
            <p>We  would love to Bring your business to the Digital World and grow it faster than ever !</p>
            <p>Let’s discuss your marketing goals. Just fill-up the form on the right or reach out to us at hello @ incubator@gmail.com today!</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contect