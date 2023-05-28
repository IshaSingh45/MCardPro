import React, { useState } from 'react';
import { useFormik } from 'formik';
import Input from './Input';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Modal, TextField, Typography, Button } from '@mui/material';
// import {db} from "firebase/database";
import { doc, setDoc,addDoc } from "firebase/firestore"; 
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const LoginForm = () => {
  const navigate = useNavigate();

  const [cardNumber, SetCardNumber] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectedCardNumber = (e) => {
    SetCardNumber(e.target.value)
    console.log("************************",e.target.value)
    localStorage.setItem("GeneratedCardNumber", e.target.value);
  }

  
  const selectedPassengerCount = (e) => {
    localStorage.setItem("PassengerCount", e.target.value);
  }

  const loggedIn = (e) =>{
    // if(e.target.value.length < 5 ){
    //   alert("InValid Card Number : Less than 5 Characters");
    // }
    // else{
      getAvailableBalance();
      alert("Mapped Successfully");
      navigate('/')
    // }
  }

  function getAvailableBalance(){
      var minm = 100;
      var maxm = 499;
      var balance = Math.floor(Math
            .random() * (maxm - minm + 1)) + minm;
      localStorage.setItem("cardBalance",balance);
      console.log("6666666666666666666666666666666666",localStorage.getItem("cardBalance"))  ; 
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  onSubmit: async (values) => {
    console.log(values);
    // const userCollectionRef = collection(db , "users" )
    // set(ref(db, 'users' + ChtA5HLcyM0c1O3AQ1VN), {
    //   cardNumber: localStorage.getItem("GeneratedCardNumber"),
    //   noOfPeopleMapped: localStorage.getItem("noOfPerson"),
    //   availableBalance : getAvailableBalance()
    // });
    // const item = {
    //   cardNumber: localStorage.getItem("GeneratedCardNumber"),
    //   noOfPeopleMapped: localStorage.getItem("noOfPerson"),
    // }
    // await addDoc(userCollectionRef,item)
    // await setDoc(doc(db, "users",localStorage.getItem("GeneratedCardNumber")), item);
    // await setDoc(doc(db, "users", ChtA5HLcyM0c1O3AQ1VN), {
    //   cardNumber: localStorage.getItem("GeneratedCardNumber"),
    //   noOfPeopleMapped: localStorage.getItem("noOfPerson"),
    //   availableBalance : getAvailableBalance()
    // });
    // const item = {
    //   "cardNumber" : localStorage.getItem("GeneratedCardNumber"),
    //   "mappedPeople" : localStorage.getItem("noOfPerson"),
    //   "availableBalance" : getAvailableBalance()
    // }
    // db.push(item);
    alert("Mapping Found with card no : " + localStorage.getItem("GeneratedCardNumber") + " and No of persons mapped :" + localStorage.getItem("noOfPerson"));
    navigate("/logged-in");
  }

  return (
    <>
      <Box
        sx={{
          width: "40%",
          height: 400,
          backgroundColor: '#cfe0e8',
        }}
      >
        <Typography sx={{ marginTop: "12%", marginLeft: "31%" }} variant='h5' component="h5">Enter Card Number</Typography>
        <TextField onChange={(e) => selectedCardNumber(e)} sx={{ marginTop: "10%", marginLeft: "30%" }} id="outlined-basic" label="Card Number" variant="outlined" />
        <Button onClick={handleOpen} sx={{ marginTop: "10%", marginLeft: "40%" }} variant="contained">Submit</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <TextField sx={{marginLeft:6}} id="outlined-basic" label="Card Number" variant="outlined" value={localStorage.getItem("GeneratedCardNumber")} /><br/><br/>
          <TextField onChange={(e)=>selectedPassengerCount(e)} sx={{marginLeft:6}} id="outlined-basic" label="No. Of Passenger" variant="outlined" /><br/>
          <Button onClick={(e) => loggedIn(e)} sx={{marginLeft:9}} variant="contained">Submit Mapping</Button>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default LoginForm;
