import React from 'react';
import { useFormik } from 'formik';
import Button from '../components/General/Button';
import { useNavigate, Link } from 'react-router-dom';

const LoggedInView = () => {
  const navigate = useNavigate();
  var cardNo = localStorage.getItem("GeneratedCardNumber");
   var personMapped =  localStorage.getItem("noOfPerson");
   var cardPrice = localStorage.getItem("cardPrice");
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    onSubmit: (values) => {
      console.log(values);
      alert("Mapping Found with card no : "+ localStorage.getItem("GeneratedCardNumber") + " and No of persons mapped :" + localStorage.getItem("noOfPerson"));
      navigate("/logged-in");
    },
  });
  return (
    <>
    <div style={{justifyContent:"center",marginTop:"12%"}}>
      <div className='  w-full mt-10 px-6 text-center md:text-center'>
        <h1 className='text-primary mt-8 md:mt-0 font-bold text-3xl'>
          Login Details
        </h1>
        <p className='text-inactive mt-3'>Card Number : {cardNo}</p>
        <p className='text-inactive mt-3'>People Mapped : {personMapped}</p>
        <p className='text-inactive mt-3'>Amount available : {cardPrice}</p>
        {/* <form className='flex flex-col mt-4 ' onSubmit={formik.handleSubmit}>
          <Button
            type='submit'
            text='Edit'
            classes='w-full md:w-9/12 mt-6 rounded-md'
          />
        </form> */}
      </div>
      <div style={{justifyContent:"center",marginTop:"17%"}}></div>
      </div>
    </>
  );
};

export default LoggedInView;
