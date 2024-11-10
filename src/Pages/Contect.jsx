import React from "react";

function Contect() {
  const handleFormSubmit = (formData) =>{
    //console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData)
  }
  return (
    <section className="section-contact">
      <h2 className="container-title"> Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Name : "
            required
            autoComplete="off"
            name="username"
          />
          <input
            type="email"
            required
            autoComplete="off"
            name="email"
            placeholder="Enter the Email : "
            className="form-control"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter the Message you Want : "
            name="message"
            required
            autoComplete="off"
            style={{ resize: "none" }}
          ></textarea>

          <button type="submit">
            {" "}
            Send{" "}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contect;
