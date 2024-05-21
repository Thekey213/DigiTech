import React, { useState } from "react";
import { useProductContext } from "../../context/ProductsContext"; // Adjust the import path as necessary
import "./cart.css";
import GooglePay from "../../google/GooglePay";

const Checkout = () => {
 const { cart } = useProductContext(); // Access the cart state
 const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    paymentMethod: "",
 });

 const [validated, setValidated] = useState(false);

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
    // Here you can handle the form submission, e.g., send the data to a server
    console.log("Form submitted:", formData);
 };

 const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace(',', '')) * item.quantity, 0);
 };


 
 return (
    <div className="container mt-4">
      <main>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 >Total: R{calculateTotalPrice()}</h4>
          
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 style={{color:'#6E8DCF'}} className="mb-3">Billing address</h4>
            <form
              className={validated ? "needs-validation was-validated" : "needs-validation"}
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="row g-3">
                <div className="col-sm-6">
                 <label htmlFor="firstName" className="form-label">First name</label>
                 <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                 />
                 <div className="invalid-feedback">Valid first name is required.</div>
                </div>
                <div className="col-sm-6">
                 <label htmlFor="lastName" className="form-label">Last name</label>
                 <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                 />
                 <div className="invalid-feedback">Valid last name is required.</div>
                </div>
                <div className="col-12">
                 <label htmlFor="email" className="form-label">Email </label>
                 <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                 />
                 <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                </div>
              </div>

              <hr className="my-4" />

              <h4 style={{color:'#6E8DCF'}} className="mb-3">Payment</h4>
               
              <GooglePay/>



              <hr className="my-4" />
               <div className="checkOutButton">
              <button   className="w-100 btn-lg" type="submit">Continue to checkout</button>
               </div>
            </form>
          </div>    
        </div>
      </main>

      <footer className="my-5 pt-5 text-body-secondary text-center text-small">
        <p className="mb-1">&copy; 2023 Your Company Name</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Privacy</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>
 );
};

export default Checkout;
