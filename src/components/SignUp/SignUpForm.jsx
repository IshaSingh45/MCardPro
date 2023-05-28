import React from 'react';
import { useFormik } from 'formik';
import Button from '../General/Button';
import Input from '../Login/Input';
import { useNavigate, Link} from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    onSubmit: (values) => {
      console.log(values);
      var minm = 100000;
      var maxm = 9999999;
      var generatedCardNo = Math.floor(Math
            .random() * (maxm - minm + 1)) + minm;
      localStorage.setItem("GeneratedCardNumber",generatedCardNo);      
      navigate('/mapping-page');
    },
  });
  return (
    <>
      <div className='md:w-5/12  w-full mt-10 px-6 text-center md:text-left'>
        <h1 className='text-primary mt-8 md:mt-0 font-bold text-3xl'>
          Welcome to Metro
        </h1>
        <p className='text-inactive mt-3'>Enter details to Sign Up</p>
        <form className='flex flex-col mt-4 ' onSubmit={formik.handleSubmit}>
          <Button
            type='submit'
            text='Generate a digital card'
            classes='w-full md:w-9/12 mt-6 rounded-md'
          />
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
