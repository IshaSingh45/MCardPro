import React, { useState,useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, Link} from 'react-router-dom';
import Button from '../components/General/Button';
import Input from './Login/Input';

const MappingPage = () => {
    const [generatedNumber,setGeneratedNumber] = useState("");
  const navigate = useNavigate();
   useEffect(() => {
    setGeneratedNumber(localStorage.getItem("GeneratedCardNumber"));
  });
  const formik = useFormik({
    initialValues: {
        noOfPerson: '',
        price:''
      },
    onSubmit: (values) => {
      console.log(values);
      alert("Mapping added successfully");
      navigate("/log-in");
      // var dbo = db.db("cardData");
      // var myobj = { cardNumber: localStorage.getItem("GeneratedCardNumber"), noOfPerson: noOfPerson };
      // dbo.collection("CardDetailData").insertOne(myobj, function(err, res) {
      //  if (err) throw err;
      //  console.log("1 document inserted");
      //  db.close();
      // });    
      localStorage.setItem("noOfPerson",formik.values.noOfPerson);
      localStorage.setItem("cardPrice",formik.values.price);
    },
  });
  return (
    <>
    <div style={{justifyContent:"center",marginTop:"12%"}}>
      <div className=' w-full mt-10 px-6 text-center md:text-center'>
        <h1 className='text-primary mt-8 md:mt-0 font-bold text-3xl'>
          Welcome to Metro
        </h1>
        <p className='border rounded-md py-2 px-3 shadow-sm text-inactive mt-3'>Generated Card Details</p>
        <p className='border rounded-md py-2 px-3 shadow-sm text-inactive mt-3'>{generatedNumber}</p>
        <form className='flex flex-col mt-4 ' onSubmit={formik.handleSubmit}>
        <Input
            placeholder='Number of Person Mapped'
            type='text'
            name='noOfPerson'
            id='noOfPerson'
            onChange={formik.handleChange}
            value={formik.values.noOfPerson}
            classes=' w-full border rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm block bg-white border-borderColor mt-3'
          />
          <Input
            placeholder='Add amount in Card'
            type='text'
            name='price'
            id='price'
            onChange={formik.handleChange}
            value={formik.values.price}
            classes=' w-full border rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm block bg-white border-borderColor mt-3'
          />
          <Button
            type='submit'
            text='Submit the mapping'
            classes='w-full md:w-4/12 mt-6 rounded-md'
          />
        </form>
      </div>
      <div style={{justifyContent:"center",marginTop:"10%"}}></div>
      </div>
    </>
  );
};

export default MappingPage;
