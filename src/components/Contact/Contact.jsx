import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    /* Script used to send email from website to email */
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b227f589-5f76-4586-83cc-41c6da7b9d9f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us message <img src={msg_icon} alt="" /> </h3>
        <p> Feel free to reach out us if you have any queries</p>
        <ul>
            <li> <img src={phone_icon} alt="" />+91-8861789164</li>
            <li> Our Branches at </li>
            <li> <img src={location_icon} alt="" /> Flat No 401, Sri Pradha Hills, <br/> Back Side of Reddy Bhavan, <br/> Thimmanaidupalem, <br/> Tirupati, AP - 517501</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name </label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <label>Phone Number </label>
            <input type="tel" name='phone' placeholder='Enter Your Phone Number' required/>
            <label>Email </label>
            <input type="email" name='email' placeholder='Enter Your email' required/>
            <label>Write Your Message here </label>
            <textarea name="message" rows="6" placeholder='Please add your queries' required></textarea>
            <button type='submit' className='btn dark-btn'> Submit Now <img src={white_arrow} alt="" /> </button>
        </form>
        <span>{result} </span>
      </div>
    </div>
  )
}

export default Contact
