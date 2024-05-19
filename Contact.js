import React, { useState } from 'react';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    postalCode: '',
    comment: ''
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    storedData.push(formData);
    localStorage.setItem('formData', JSON.stringify(storedData));
    setSubmittedData(storedData);
  };

  const handleClear = () => {
    localStorage.removeItem('formData'); // Clear local storage
    setSubmittedData([]); // Clear local state
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      postalCode: '',
      comment: ''
    });
  };

  return (
    <>
      <div className='container-fluid' id='fdiv'>
        <h1 id='ones'>Contact Us</h1>
        <h3>Home / Contact Us</h3>
        <div className='container' id='cont2'>
          <div className='container' id='secdiv'>
            <div className="container" id='widthy'>
              <h2 id="contactHeader" className="text-lg font-bold mb-4">Contact Info</h2>
              <p className="mb-4" id='mb'>Let's Connect With Us</p>
              <p className="text-sm mb-4">THIS COULD BE THE BEGINNING OF THE BEAUTIFUL RELATIONSHIP</p>
              
              <div className="mb-4">
                <h3 className="font-semibold">Phone Number</h3>
                <p>+91 9922317213</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold">Visit Us Office In Nagpur:</h3>
                <p>17/1 Amar Plaza Salt Lake SMS, India Road, IT Park Rd, Nagpur - 440022, Third Floor, Beside Persistent.</p>
              </div>
              
              <div>
                <h3 className="font-semibold">Visit Us Office in Pune:</h3>
                <p>Unit No.12, First Floor, Eloor, Beside Persistent.</p>
              </div>
            </div>
            <div className='container' id="asides">
              <div className='container' id='form1'>
                <h2 className="text-lg font-bold mb-4">Your Name *</h2>
                <form aria-label="Contact Form" onSubmit={handleSubmit}>
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Name" className="border p-2 w-full" aria-required="true" onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" className="border p-2 w-full" aria-required="true" onChange={handleChange} />
                  </div>
                  
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <input type="tel" name="phoneNumber" placeholder="Phone Number" className="border p-2 w-full" onChange={handleChange} />
                    <input type="text" name="postalCode" placeholder="Postal Code" className="border p-2 w-full" onChange={handleChange} />
                  </div>
                  
                  <div className="mb-4">
                    <textarea name="comment" placeholder="Write your comment" className="border p-2 w-full h-24" aria-label="Your Comment" onChange={handleChange}></textarea>
                  </div>
                  
                  <button type="submit" className="bg-blue-500 p-2 rounded-lg" id='bts'>Submit</button>
                  <button type="button" className="bg-red-500 p-2 rounded-lg ml-4" id='bts11'  onClick={handleClear} aria-label="Clear Form">Clear</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 id='h2e'>Submitted Data:</h2>
          {submittedData.map((data, index) => (
            <div id='datas' key={index}>
              <p>Name: {data.name}</p>
              <p>Email: {data.email}</p>
              <p>Phone Number: {data.phoneNumber}</p>
              <p>Postal Code: {data.postalCode}</p>
              <p>Comment: {data.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};