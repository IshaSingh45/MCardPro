import React, { useState, useEffect } from "react";
import Raw_data from "../data/data.json";
import Input from "./Login/Input";
import { Box } from '@mui/material';
import {
    Select, FormControl, InputLabel, MenuItem, Grid, TextField, FormControlLabel, Paper, Radio
    , Button, Card, CardContent, CardActions, Typography
} from '@mui/material';


const DiffSourceDiffDest = () => {

    const [getDetails, SetGetDetails] = useState("");

    const getCardDetails = () => {
        SetGetDetails(true)
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
                                    //     onChange={handleChange}
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
                                    <InputLabel id="demo-simple-select-label2">Destination Station</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="destStation"
                                        style={{ width: "60%" }}
                                    //     onChange={handleChange}
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
                                        alert("No Data Found")
                                    )}
                                </div>
                                <br /><br />
                                <Button variant="contained">Start Journey</Button>
                            </div>
                        </Grid>


                        <Grid item
                            sx={{
                                height: 800,
                                width: "65%",
                                backgroundColor: "#b7d7e8"
                            }}>

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </>
    );
}


export default DiffSourceDiffDest;