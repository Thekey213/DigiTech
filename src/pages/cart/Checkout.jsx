import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
    paymentMethod: "",
    ccName: "",
    ccNumber: "",
    ccExpiration: "",
    ccCvv: "",
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
  };

  return (
    <div className="container">
      <main>
     

        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            {/* Your cart section */}
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
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
                  />
                  <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
                </div>
              
                
                
              
              
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                />
                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="save-info"
                />
                <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked={formData.paymentMethod === "credit"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="credit">Credit card</label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked={formData.paymentMethod === "debit"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="debit">Debit card</label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked={formData.paymentMethod === "paypal"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="paypal">PayPal</label>
                </div>
              </div>

              {formData.paymentMethod === "credit" && (
                <>
                  <h4 className="mb-3">Credit card details</h4>
                  <div className="row gy-3">
                    <div className="col-md-6">
                      <label htmlFor="ccName" className="form-label">Name on card</label>
                      <input
                        type="text"
                        className="form-control"
                        id="ccName"
                        name="ccName"
                        value={formData.ccName}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">Name on card is required</div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ccNumber" className="form-label">Credit card number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="ccNumber"
                        name="ccNumber"
                        value={formData.ccNumber}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">Credit card number is required</div>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="ccExpiration" className="form-label">Expiration</label>
                      <input
                        type="text"
                        className="form-control"
                        id="ccExpiration"
                        name="ccExpiration"
                        value={formData.ccExpiration}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">Expiration date required</div>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="ccCvv" className="form-label">CVV</label>
                      <input
                        type="text"
                        className="form-control"
                        id="ccCvv"
                        name="ccCvv"
                        value={formData.ccCvv}
                        onChange={handleChange}
                        required
                      />
                      <div className="invalid-feedback">Security code required</div>
                    </div>
                  </div>
                </>
              )}

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
            </form>
          </div>
        </div>
      </main>

      <footer className="my-5 pt-5 text-body-secondary text-center text-small">
        <p className="mb-1">&copy; 2017–2024 Company Name</p>
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
