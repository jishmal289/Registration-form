import React, { useState } from 'react';
import './Home.css'; 

const TravelRegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobileNumber: '',
        password: '',

    });

    const [showPassword, setShowPassword] = useState(false);

    const [errors, setErrors] = useState({
        mobileNumber: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (formData.mobileNumber.length !== 10) {
            newErrors.mobileNumber = 'Mobile number should have exactly 10 digits.';
            isValid = false;
        }

        if (!formData.email.includes('@') || !formData.email.includes('.com')) {
            newErrors.email = 'Email should contain @ and .com';
            isValid = false;
        }

        if (!/[A-Z]/.test(formData.password) || !/@/.test(formData.password) || !/\d/.test(formData.password)) {
            newErrors.password = 'Password contain at least one uppercase letter, @, and a number.';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', formData);

            alert('Successfully registered!');
        } else {
            alert('Please fix the form errors before submitting.');
        }
    };

    return (
        <div className=' Container d-flex'>
            <div className="travel-registration-form">
                <h2 style={{ backgroundColor: 'transparent' }} className='text-white'>Travel Registration Form</h2>
                <form style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyItems: 'center', marginLeft: '300px', marginRight: '300px',padding:'60px' }} className='card' onSubmit={handleSubmit}>
                    <div className="form-group mt-5">
                        <div style={{ marginRight: '200px' }} className='mb-2'><label><b>Name</b></label>
                        </div>
                        <input className='mb-2 me-4'
                            placeholder='username'
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="form-group ms-2 mt-1">
                        <div style={{ marginRight: '200px' }}><label><b>Phone</b></label>
                        </div>
                        <input style={{ marginRight: '36px' }} className=''
                            type="tel"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            placeholder="1234567890"
                        />
                        <div style={{ color: 'red',fontSize:'13px' }}>
                            {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}

                        </div>
                    </div>

                    <div className="form-group mt-3 ms-3">
                        <div style={{ marginRight: '210px' }}><label><b>E-mail</b></label>
                        </div>
                        <input className='mt-' style={{ marginRight: '39px' }} placeholder='E-mail'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div style={{ color: 'red',fontSize:'13px' }}>
                            {errors.email && <span className="error">{errors.email}</span>}

                        </div>
                    </div>

                    <div style={{ marginLeft: '116px' }} className="form-group  mt-2">
                        <div style={{ marginRight: '280px' }} className=''><label><b>Password</b></label>
                        </div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter your password (at least 8 characters)'
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button className='btn btn-border-none p-2 ms-3' style={{ backgroundColor: 'blue', color: 'white', cursor: 'pointer' }} type="submit" onClick={handleTogglePassword} >
                            {showPassword ? 'Hide' : 'Show'} Password
                        </button>
                        <div style={{ color: 'red',fontSize:'13px' }}>{errors.password && <span className="error">{errors.password}</span>}
                        </div>
                    </div>
                    <a style={{ textDecoration: 'none' }} className='' href="">Have a previous registration ? <br />Click here if you are traveling again</a>

                    <div>
                        <button className='btn btn-border-none mt-3  mb-3' style={{ backgroundColor: 'blue', color: 'white', cursor: 'pointer' }} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TravelRegistrationForm;
