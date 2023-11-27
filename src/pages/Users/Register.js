import React, { useState, useEffect } from 'react'
import "./Register.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState(null);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState(null);
    const [country, setCountry] = useState("");
    const [state, setState] = useState(null);
    const [profession, setProfession] = useState(null);
    const [tnc, setTnc] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const calculatingAge = useSelector(state => state.calculatingAge);

    const handleSubmit =async (e) => {

        e.preventDefault();

        const data = { name, email, dob, age, gender, country, state, profession };
        
        console.log(data);


        const fullNameField = document.getElementById("fullname");
        const nameError = document.getElementById("nameError");
        var val = /^[A-Za-z ]{1,}$/;
        var filter = 0;

        if (!val.test(document.getElementById("fullname").value)) {

            nameError.classList.add("visible");
            fullNameField.classList.add("invalid");
            nameError.setAttribute('aria-hidden', false);
            nameError.setAttribute('aria-invalid', true);
            window.scrollTo(0, 0);
            filter = 1;
        }
        else {
            nameError.classList.remove("visible");
            fullNameField.classList.remove("invalid");
            nameError.setAttribute('aria-hidden', true);
            nameError.setAttribute('aria-invalid', false);
        }

        const emailField = document.getElementById("emailcheck");
        const emailError = document.getElementById("emailError");
        var val1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!val1.test(document.getElementById("emailcheck").value)) {

            emailError.classList.add("visible");
            emailField.classList.add("invalid");
            emailError.setAttribute('aria-hidden', false);
            emailError.setAttribute('aria-invalid', true);
            window.scrollTo(0, 0);
            filter = 1;
        }
        else {
            emailError.classList.remove("visible");
            emailField.classList.remove("invalid");
            emailError.setAttribute('aria-hidden', true);
            emailError.setAttribute('aria-invalid', false);
        }

        if (gender === null || country === null || state === null || profession === null || dob === null) {
            alert("Please fill the details completely");
            filter = 1;
        }

        if (filter === 0) {
            if (tnc === false) {
                alert('Please check the terms and conditions box');
            } else {
                const data = { name, email, dob, age, gender, country, state, profession };
    
                try {
                    const response = await fetch('https://assesment-web.onrender.com/demographic/', {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)
                    });
    
                    if (response.ok) {
                        const responseData = await response.json();
                        const { user_id } = responseData; 
    
                        if (user_id) {
                            localStorage.setItem('user_id', user_id);
                            console.log('Registered successfully with user ID:', user_id);
    
                            dispatch({ type: "SETTING_REGISTERED_NAME", val: "Hi " + name + " !" });
                            navigate("/expertise");
                        } else {
                            console.error('User ID not found in the response');
                            alert('User ID not found. Registration might not have been completed successfully.');
                        }
                    } else {
                        console.error('Registration failed with status:', response.status);
                        alert('Registration failed. Please try again later.');
                    }
                } catch (error) {
                    console.error('Error during registration:', error);
                    alert('An error occurred during registration. Please try again later.');
                }
            }
        }
    };
    const checkboxHandler = () => {
        setTnc(!tnc);
    }

    var calculated_age = 0;

    function calculate_age() {
        var birth_date = new Date(document.getElementById("birth_date").value);
        var birth_date_day = birth_date.getDate();
        var birth_date_month = birth_date.getMonth();
        var birth_date_year = birth_date.getFullYear();

        var today_date = new Date();
        var today_day = today_date.getDate();
        var today_month = today_date.getMonth();
        var today_year = today_date.getFullYear();



        if (today_month > birth_date_month) {
            calculated_age = today_year - birth_date_year;
        }
        else if (today_month === birth_date_month) {
            if (today_day >= birth_date_day) {
                calculated_age = today_year - birth_date_year;
            }
            else {
                calculated_age = today_year - birth_date_year - 1;
            }
        }
        else {
            calculated_age = today_year - birth_date_year - 1;
        }

        document.getElementById("calculated_age").value = calculated_age;

    }

    const handleDobAge = (e) => {
        e.preventDefault();

        setDob(e.target.value);
        calculate_age();
        setAge(calculated_age);
        dispatch({ type: "SETTING_AGE", val: calculated_age });

        const ageField = document.getElementById("calculated_age");
        const ageError = document.getElementById("ageError");

        ageError.classList.remove("visible");
        ageField.classList.remove("invalid");
        ageError.setAttribute('aria-hidden', true);
        ageError.setAttribute('aria-invalid', false);
    }

    const handleClick = () => {
        const ageField = document.getElementById("calculated_age");
        const ageError = document.getElementById("ageError");
        if (calculatingAge === null) {
            ageError.classList.add("visible");
            ageField.classList.add("invalid");
            ageError.setAttribute('aria-hidden', false);
            ageError.setAttribute('aria-invalid', true);
            window.scrollTo(0, 0);
        }
    }

    // useEffect(() => {
    //     setName(JSON.parse(window.localStorage.getItem('name')));
    //   }, []);

    //   useEffect(() => {
    //     window.localStorage.setItem('name', name);
    //   }, [name]);




    return (
        <div className='create'>

            <form className='.formcss'>
                <h1>Register</h1>
                <label>Name*</label>
                <input
                    type="text"
                    placeholder="Your Full name"
                    required
                    value={name}
                    id="fullname"
                    onChange={(e) => setName(e.target.value)}
                />
                <span role="alert" id="nameError" aria-hidden="true">*Name should be in characters only and shouldn't include any special character!</span>
                <label>Email*</label>
                <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={email}
                    id="emailcheck"
                    onChange={(e) => setEmail(e.target.value)}

                />
                <span role="alert" id="emailError" aria-hidden="true">*Enter a correct email address!</span>
                <label>Date of Birth*</label>
                <input
                    type="date"
                    id="birth_date"
                    required
                    value={dob}
                    onChange={handleDobAge}
                />
                <label>Age</label>
                <input
                    type="text"
                    placeholder="Your age"
                    required
                    id="calculated_age"
                    onClick={handleClick}
                    value={calculatingAge}
                    readOnly
                />
                <span role="alert" id="ageError" aria-hidden="true">*Please select your Date of Birth first!</span>
                <label>Gender*</label>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="-Select-" selected disabled>--Select--</option>
                    <option value="2">Male</option>
                    <option value="1">Female</option>
                    <option value="3">Others</option>
                </select>
                <label>Country*</label>
                {/* <select
                    value={country}
                    onChange={handleCountry}
                    
                >
                    <option value="-Select-" selected disabled>--Select--</option>
                    { 
                        countryData.map(getCountry=>(    
                            <option key={getCountry.id} value={getCountry.id}> {getCountry.name} </option>
                        ))   
                    }
                </select> */}
                <CountryDropdown
          value={country}
          onChange={(val) => setCountry(val)} />
            <label>State*</label>
        <RegionDropdown
          country={country}
          value={state}
          onChange={(val) => setState(val)} />
              
                {/* <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                >

                    <option value="-Select-" selected disabled>--Select--</option>
                    { 
                        stateData.map(getState=>(    
                            <option key={getState.id} value={getState.name}> {getState.name} </option>
                        ))   
                    }
                   
                </select> */}
                <label>Role*</label>
                <select
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                >
                    <option value="----Select----" selected disabled>--Select--</option>
                    <option value="1">Student</option>
                    <option value="3">Academician</option>
                    <option value="2">Industrialist</option>
                </select>

                <label id="Tnc"><input type="checkbox" id="cbox"
                    onChange={checkboxHandler}
                />By using this form you agree with the storage and handling of your data by this website in accordance with our Privacy Policy.</label>
                <Link to={"/"}><button >Cancel</button></Link>

                <button onClick={handleSubmit}>Submit</button>

            </form>
        </div>
    );

}

export default Register;