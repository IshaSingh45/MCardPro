import React, { useState, useEffect } from "react";
import Raw_data from "../data/data.json";
import Input from "./Login/Input";
import { Box, Modal } from '@mui/material';
import {
        Select, FormControl, InputLabel, MenuItem, Grid, TextField, FormControlLabel, Paper, Radio
        , Button, Card, CardContent, Slider, Typography, Stack
} from '@mui/material';

const SameSourceDiffDest = () => {

    const [getDetails, SetGetDetails] = useState("");
    const [startJourney, setStartJourney] = useState("");
    const [traveller, setTraveller] = useState("");

    const [open, setOpen] = React.useState(false);
    const [openForStart, setOpenForStart] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenForStart = () => setOpenForStart(true);
    const handleCloseForStart = () => setOpenForStart(false);

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

    const getCardDetails = () => {
            SetGetDetails(true)
    }

    const startTheJourney = () => {
            //check for the balance here//
            setStartJourney(true);
    }

    const setTravellers = (e) => {
            setTraveller(e.target.value)
    }

    const selectSource = (e) => {
            console.log("&&&&&&&&&&&&&&&&&&&&", e.target.value)
            localStorage.setItem("SourceStationForSame", e.target.value);
    }

    const selectDest1 = (e) => {
            console.log("&&&&&&&&&&&&&&&&&&&&", e.target.value)
            localStorage.setItem("DestStation1", e.target.value);
    }
    const selectDest2 = (e) => {
        console.log("&&&&&&&&&&&&&&&&&&&&", e.target.value)
        localStorage.setItem("DestStation2", e.target.value);
}

    return (
            <>
                    <Grid sx={{ flexGrow: 1, height: 800, width: "100%" }} container >
                            <Grid item xs={12}>
                                    <Grid container justifyContent="center" >
                                            <Grid item
                                                    sx={{
                                                            height: 800,
                                                            width: "35%",
                                                            backgroundColor: "#87bdd8"
                                                    }}>
                                                    <div style={{ height: 800, marginTop: "30%", marginLeft: "10%" }}>
                                                            <FormControl fullWidth>
                                                                    <InputLabel id="demo-simple-select-label1">Source Station</InputLabel>
                                                                    <Select
                                                                            labelId="demo-simple-select-label"
                                                                            id="demo-simple-select"
                                                                            label="sourceStation"
                                                                            style={{ width: "60%" }}
                                                                            onChange={(e) => selectSource(e)}
                                                                    >
                                                                            <MenuItem value={"Samaypur Badli"} > Samaypur Badli</MenuItem>
                                                                            <MenuItem value={"Rohini Sector"} > Rohini Sector </MenuItem>
                                                                            <MenuItem value={"Haiderpur Badli"} > Haiderpur Badli</MenuItem>
                                                                            <MenuItem value={"Jahangirpuri"} > Jahangirpuri</MenuItem>
                                                                            <MenuItem value={"Adarsh Nagar"} > Adarsh Nagar</MenuItem>
                                                                            <MenuItem value={"Azadpur"} > Azadpur</MenuItem>
                                                                            <MenuItem value={"Model Town"} > Model Town</MenuItem>
                                                                            <MenuItem value={"GTB Nagar"} > GTB Nagar</MenuItem>
                                                                            <MenuItem value={"Vishwa Vidyalaya"} > Vishwa Vidyalaya</MenuItem>
                                                                            <MenuItem value={"Vidhan Sabha"} > Vidhan Sabha</MenuItem>
                                                                            <MenuItem value={"Civil Lines"} > Civil Lines</MenuItem>
                                                                            <MenuItem value={"Kashmere Gate"} > Kashmere Gate</MenuItem>
                                                                            <MenuItem value={"Chandni Chowk"} > Chandni Chowk</MenuItem>
                                                                            <MenuItem value={"Chawri Bazar"} > Chawri Bazar</MenuItem>
                                                                            <MenuItem value={"New Delhi"} > New Delhi</MenuItem>
                                                                            <MenuItem value={"Rajiv Chowk"} > Rajiv Chowk</MenuItem>
                                                                            <MenuItem value={"Patel Chowk"} > Patel Chowk</MenuItem>
                                                                            <MenuItem value={"Central Secretariat"} > Central Secretariat</MenuItem>
                                                                            <MenuItem value={"Udyog Bhawan"} > Udyog Bhawan</MenuItem>
                                                                            <MenuItem value={"Lok Kalyan Marg"} > Lok Kalyan Marg</MenuItem>
                                                                            <MenuItem value={"Jor Bagh"} > Jor Bagh</MenuItem>
                                                                            <MenuItem value={"Dilli Haat - INA"} > Dilli Haat - INA</MenuItem>
                                                                            <MenuItem value={"AIIMS"} > AIIMS</MenuItem>
                                                                            <MenuItem value={"Green Park"} > Green Park</MenuItem>
                                                                            <MenuItem value={"Hauz Khas"} > Hauz Khas</MenuItem>
                                                                            <MenuItem value={"Malviya Nagar"} > Malviya Nagar</MenuItem>
                                                                            <MenuItem value={"Saket"} > Saket</MenuItem>
                                                                            <MenuItem value={"Qutab Minar"} > Qutab Minar</MenuItem>
                                                                            <MenuItem value={"Chhatarpur"} > Chhatarpur</MenuItem>
                                                                            <MenuItem value={"Sultanpur"} > Sultanpur</MenuItem>
                                                                            <MenuItem value={"Ghitorni"} > Ghitorni</MenuItem>
                                                                            <MenuItem value={"Arjan Garh"} > Arjan Garh</MenuItem>
                                                                            <MenuItem value={"Guru Dronacharya"} > Guru Dronacharya</MenuItem>
                                                                            <MenuItem value={"Sikanderpur"} > Sikanderpur</MenuItem>
                                                                            <MenuItem value={"MG Road"} > MG Road</MenuItem>
                                                                            <MenuItem value={"IFFCO Chowk"} > IFFCO Chowk</MenuItem>
                                                                            <MenuItem value={"HUDA City Centre"} > HUDA City Centre </MenuItem>
                                                                    </Select>
                                                            </FormControl>
                                                            <br /><br />
                                                            <FormControl fullWidth>
                                                                    <InputLabel id="demo-simple-select-label2">Destination 1</InputLabel>
                                                                    <Select
                                                                            labelId="demo-simple-select-label"
                                                                            id="demo-simple-select"
                                                                            label="destStation"
                                                                            style={{ width: "60%" }}
                                                                            onChange={(e) => selectDest1(e)}
                                                                    >
                                                                            <MenuItem value={"Samaypur Badli"} > Samaypur Badli</MenuItem>
                                                                            <MenuItem value={"Rohini Sector"} > Rohini Sector </MenuItem>
                                                                            <MenuItem value={"Haiderpur Badli"} > Haiderpur Badli</MenuItem>
                                                                            <MenuItem value={"Jahangirpuri"} > Jahangirpuri</MenuItem>
                                                                            <MenuItem value={"Adarsh Nagar"} > Adarsh Nagar</MenuItem>
                                                                            <MenuItem value={"Azadpur"} > Azadpur</MenuItem>
                                                                            <MenuItem value={"Model Town"} > Model Town</MenuItem>
                                                                            <MenuItem value={"GTB Nagar"} > GTB Nagar</MenuItem>
                                                                            <MenuItem value={"Vishwa Vidyalaya"} > Vishwa Vidyalaya</MenuItem>
                                                                            <MenuItem value={"Vidhan Sabha"} > Vidhan Sabha</MenuItem>
                                                                            <MenuItem value={"Civil Lines"} > Civil Lines</MenuItem>
                                                                            <MenuItem value={"Kashmere Gate"} > Kashmere Gate</MenuItem>
                                                                            <MenuItem value={"Chandni Chowk"} > Chandni Chowk</MenuItem>
                                                                            <MenuItem value={"Chawri Bazar"} > Chawri Bazar</MenuItem>
                                                                            <MenuItem value={"New Delhi"} > New Delhi</MenuItem>
                                                                            <MenuItem value={"Rajiv Chowk"} > Rajiv Chowk</MenuItem>
                                                                            <MenuItem value={"Patel Chowk"} > Patel Chowk</MenuItem>
                                                                            <MenuItem value={"Central Secretariat"} > Central Secretariat</MenuItem>
                                                                            <MenuItem value={"Udyog Bhawan"} > Udyog Bhawan</MenuItem>
                                                                            <MenuItem value={"Lok Kalyan Marg"} > Lok Kalyan Marg</MenuItem>
                                                                            <MenuItem value={"Jor Bagh"} > Jor Bagh</MenuItem>
                                                                            <MenuItem value={"Dilli Haat - INA"} > Dilli Haat - INA</MenuItem>
                                                                            <MenuItem value={"AIIMS"} > AIIMS</MenuItem>
                                                                            <MenuItem value={"Green Park"} > Green Park</MenuItem>
                                                                            <MenuItem value={"Hauz Khas"} > Hauz Khas</MenuItem>
                                                                            <MenuItem value={"Malviya Nagar"} > Malviya Nagar</MenuItem>
                                                                            <MenuItem value={"Saket"} > Saket</MenuItem>
                                                                            <MenuItem value={"Qutab Minar"} > Qutab Minar</MenuItem>
                                                                            <MenuItem value={"Chhatarpur"} > Chhatarpur</MenuItem>
                                                                            <MenuItem value={"Sultanpur"} > Sultanpur</MenuItem>
                                                                            <MenuItem value={"Ghitorni"} > Ghitorni</MenuItem>
                                                                            <MenuItem value={"Arjan Garh"} > Arjan Garh</MenuItem>
                                                                            <MenuItem value={"Guru Dronacharya"} > Guru Dronacharya</MenuItem>
                                                                            <MenuItem value={"Sikanderpur"} > Sikanderpur</MenuItem>
                                                                            <MenuItem value={"MG Road"} > MG Road</MenuItem>
                                                                            <MenuItem value={"IFFCO Chowk"} > IFFCO Chowk</MenuItem>
                                                                            <MenuItem value={"HUDA City Centre"} > HUDA City Centre </MenuItem>
                                                                    </Select>
                                                            </FormControl><br /><br />
                                                            <FormControl fullWidth>
                                                                    <InputLabel id="demo-simple-select-label2">Destination 2</InputLabel>
                                                                    <Select
                                                                            labelId="demo-simple-select-label"
                                                                            id="demo-simple-select"
                                                                            label="destStation"
                                                                            style={{ width: "60%" }}
                                                                            onChange={(e) => selectDest2(e)}
                                                                    >
                                                                            <MenuItem value={"Samaypur Badli"} > Samaypur Badli</MenuItem>
                                                                            <MenuItem value={"Rohini Sector"} > Rohini Sector </MenuItem>
                                                                            <MenuItem value={"Haiderpur Badli"} > Haiderpur Badli</MenuItem>
                                                                            <MenuItem value={"Jahangirpuri"} > Jahangirpuri</MenuItem>
                                                                            <MenuItem value={"Adarsh Nagar"} > Adarsh Nagar</MenuItem>
                                                                            <MenuItem value={"Azadpur"} > Azadpur</MenuItem>
                                                                            <MenuItem value={"Model Town"} > Model Town</MenuItem>
                                                                            <MenuItem value={"GTB Nagar"} > GTB Nagar</MenuItem>
                                                                            <MenuItem value={"Vishwa Vidyalaya"} > Vishwa Vidyalaya</MenuItem>
                                                                            <MenuItem value={"Vidhan Sabha"} > Vidhan Sabha</MenuItem>
                                                                            <MenuItem value={"Civil Lines"} > Civil Lines</MenuItem>
                                                                            <MenuItem value={"Kashmere Gate"} > Kashmere Gate</MenuItem>
                                                                            <MenuItem value={"Chandni Chowk"} > Chandni Chowk</MenuItem>
                                                                            <MenuItem value={"Chawri Bazar"} > Chawri Bazar</MenuItem>
                                                                            <MenuItem value={"New Delhi"} > New Delhi</MenuItem>
                                                                            <MenuItem value={"Rajiv Chowk"} > Rajiv Chowk</MenuItem>
                                                                            <MenuItem value={"Patel Chowk"} > Patel Chowk</MenuItem>
                                                                            <MenuItem value={"Central Secretariat"} > Central Secretariat</MenuItem>
                                                                            <MenuItem value={"Udyog Bhawan"} > Udyog Bhawan</MenuItem>
                                                                            <MenuItem value={"Lok Kalyan Marg"} > Lok Kalyan Marg</MenuItem>
                                                                            <MenuItem value={"Jor Bagh"} > Jor Bagh</MenuItem>
                                                                            <MenuItem value={"Dilli Haat - INA"} > Dilli Haat - INA</MenuItem>
                                                                            <MenuItem value={"AIIMS"} > AIIMS</MenuItem>
                                                                            <MenuItem value={"Green Park"} > Green Park</MenuItem>
                                                                            <MenuItem value={"Hauz Khas"} > Hauz Khas</MenuItem>
                                                                            <MenuItem value={"Malviya Nagar"} > Malviya Nagar</MenuItem>
                                                                            <MenuItem value={"Saket"} > Saket</MenuItem>
                                                                            <MenuItem value={"Qutab Minar"} > Qutab Minar</MenuItem>
                                                                            <MenuItem value={"Chhatarpur"} > Chhatarpur</MenuItem>
                                                                            <MenuItem value={"Sultanpur"} > Sultanpur</MenuItem>
                                                                            <MenuItem value={"Ghitorni"} > Ghitorni</MenuItem>
                                                                            <MenuItem value={"Arjan Garh"} > Arjan Garh</MenuItem>
                                                                            <MenuItem value={"Guru Dronacharya"} > Guru Dronacharya</MenuItem>
                                                                            <MenuItem value={"Sikanderpur"} > Sikanderpur</MenuItem>
                                                                            <MenuItem value={"MG Road"} > MG Road</MenuItem>
                                                                            <MenuItem value={"IFFCO Chowk"} > IFFCO Chowk</MenuItem>
                                                                            <MenuItem value={"HUDA City Centre"} > HUDA City Centre </MenuItem>
                                                                    </Select>
                                                            </FormControl><br /><br />
                                                            <div style={{ display: "flex" }}>
                                                                    <TextField
                                                                            sx={{
                                                                                    width: "60%"
                                                                            }}
                                                                            id="outlined-basic" label="Card Number" variant="outlined" />
                                                                    <Button
                                                                            sx={{
                                                                                    height: "55px",
                                                                                    width: "80px"
                                                                            }}
                                                                            onClick={() => getCardDetails()}
                                                                            variant="contained">Get</Button>
                                                            </div>
                                                            <div>
                                                                    {getDetails == true ? (
                                                                            <Card sx={{ minWidth: 275, marginRight: "24%" }}>
                                                                                    <CardContent>
                                                                                            <Typography variant="h1" component="h2" sx={{ fontSize: 18, fontWeight: 'bold' }} color="#034f84" gutterBottom>
                                                                                                    Card Number : {localStorage.getItem("GeneratedCardNumber")}
                                                                                            </Typography>
                                                                                            <Typography variant="h1" component="h2" sx={{ fontSize: 18, fontWeight: 'bold' }} color="#034f84" gutterBottom>
                                                                                                    No. of People Mapped : {localStorage.getItem("noOfPerson")}
                                                                                            </Typography>
                                                                                            <Typography variant="h1" component="h2" sx={{ fontSize: 18, fontWeight: 'bold' }} color="#034f84" gutterBottom>
                                                                                                    Balance : {localStorage.getItem("cardPrice")}
                                                                                            </Typography>
                                                                                    </CardContent>
                                                                            </Card>
                                                                    ) : (
                                                                            <div></div>
                                                                    )}
                                                            </div>
                                                            <br /><br />
                                                            <Button onClick={() => startTheJourney()} variant="contained">Start Journey</Button>
                                                    </div>
                                            </Grid>


                                            <Grid item
                                                    sx={{
                                                            height: 800,
                                                            width: "65%",
                                                            backgroundColor: "#b7d7e8"
                                                    }}>
                                                    {startJourney == false ? (
                                                            <Typography sx={{ marginTop: "35%", marginLeft: "10%" }} variant="h3" component="h3" >
                                                                    Select the values to start the journey
                                                            </Typography>
                                                    ) : (
                                                            <div style={{ marginTop: "20%" }}>
                                                                    <Button sx={{
                                                                            marginLeft: "30%",
                                                                            width: 400
                                                                    }}
                                                                    onClick={handleOpenForStart}      variant="contained">Start (Source : {localStorage.getItem("SourceStationForSame")})</Button><br />
                                                                    <Modal
                                                                            open={openForStart}
                                                                            onClose={handleCloseForStart}
                                                                            aria-labelledby="modal-modal-title"
                                                                            aria-describedby="modal-modal-description"
                                                                    >
                                                                            <Box sx={style}>
                                                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                                                            The system will check the minimum balance for the number of travellers specified
                                                                                    </Typography>
                                                                                    <Typography style={{color:"green"}} id="modal-modal-description" sx={{ mt: 2 }}>
                                                                                            Initiated Journey Successfully
                                                                                    </Typography>
                                                                            </Box>
                                                                    </Modal>
                                                                            <div style={{display:"flex"}}>
                                                                    <Stack sx={{ height: 300, marginLeft: "30%" }}>
                                                                            <Slider
                                                                                   sx={{transform: "rotate(40deg)"}}
                                                                                    orientation="vertical"
                                                                                    defaultValue={100}
                                                                                    track="inverted"
                                                                            />
                                                                    </Stack><br /><br />
                                                                    <Stack sx={{ height: 300, marginLeft: "30%" }}>
                                                                            <Slider
                                                                                   sx={{transform: "rotate(140deg)"}}
                                                                                    orientation="vertical"
                                                                                    defaultValue={0}
                                                                                    track="normal"
                                                                            />
                                                                    </Stack>
                                                                            </div>


                                                                    <div style={{display:"flex"}}>
                                                                    <TextField
                                                                                sx={{
                                                                                        marginLeft: "13%"
                                                                                }}
                                                                                id="outlined-basic"  label="Card Number" variant="outlined" />
            

                                                                    <TextField
                                                                                sx={{
                                                                                        marginLeft: "33%"
                                                                                }}
                                                                                id="outlined-basic"  label="Card Number" variant="outlined" />
                                                                     </div>
                                                                    <div style={{display:"flex"}}>
                                                                    <Button sx={{
                                                                            marginLeft: "10%",
                                                                            width: 300,
                                                                            marginTop: "0%"
                                                                    }}
                                                                            onClick={handleOpen} variant="contained">End (Destination 1 : {localStorage.getItem("DestStation1")})</Button><br />
                                                                
                                                                    <Modal
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            aria-labelledby="modal-modal-title"
                                                                            aria-describedby="modal-modal-description"
                                                                    >
                                                                            <Box sx={style}>
                                                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                                                    The system will check the balance & validity of card Number, and amount will be deducted accordingly
                                                                                    </Typography>
                                                                                    <Typography style={{color:"green"}} id="modal-modal-description" sx={{ mt: 2 }}>
                                                                                    Journey Completed Successfully
                                                                                    </Typography>
                                                                            </Box>
                                                                    </Modal>


                                                                    <Button sx={{
                                                                            marginLeft: "25%",
                                                                            width: 300,
                                                                            marginTop: "0%"
                                                                    }}
                                                                            onClick={handleOpen} variant="contained">End (Destination 2 : {localStorage.getItem("DestStation2")})</Button><br />

                                                                    <Modal
                                                                            open={open}
                                                                            onClose={handleClose}
                                                                            aria-labelledby="modal-modal-title"
                                                                            aria-describedby="modal-modal-description"
                                                                    >
                                                                            <Box sx={style}>
                                                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                                                            The system will check the balance & validity of card Number, and amount will be deducted accordingly
                                                                                    </Typography>
                                                                                    <Typography style={{color:"green"}} id="modal-modal-description" sx={{ mt: 2 }}>
                                                                                            Journey Completed Successfully
                                                                                    </Typography>
                                                                            </Box>
                                                                    </Modal>
                                                                    </div>
                                                            </div>
                                                    )}
                                            </Grid>

                                    </Grid>
                            </Grid>
                    </Grid>

            </>
    );
}


export default SameSourceDiffDest;