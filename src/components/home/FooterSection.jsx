import React, { Component } from 'react'
import DigiImage from '../../assets/images/DigiTech-3.jpg';
import './footer.css';
export class FooterSection extends Component {
 
  render() {
    return (
   

<div className="container myfooter ">
<div className="row">
    <div className="col-md-6">
        <h3 style={{ color:'white',marginTop:'4rem'}}>WE WANT TO HEAR FROM YOU!</h3>
        <img src={DigiImage} className="logo" alt="React logo" style={{ width: '250px', height: '250px', marginTop:'3rem', marginLeft:'3rem'}} />

    </div>
    <div className="col-md-6">
       <h4>You can connect with us through <br/> the following channels:</h4> 
       <ul>
        <li>EMAIL</li>
        <li>WHATSAPP</li>
        <li>FACRBOOK</li>
       </ul>
       <button style={{marginLeft: '2rem'}} className="footer-btn">EMAIL US </button>
    </div>
   
</div>
</div>


    )
  }
}

export default FooterSection
