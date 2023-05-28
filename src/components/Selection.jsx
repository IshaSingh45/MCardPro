import React, { useState, useEffect } from "react";
import Raw_data from "../data/data.json";
import Input from "./Login/Input";
import { Box } from '@mui/material';
import {
    Select, FormControl, InputLabel, MenuItem, Grid, TextField, FormControlLabel, Paper, Radio
    , Button, Card, CardContent, CardActions, Typography
} from '@mui/material';

import metroImg from "../../public/images/metroImg.jpg";


const Selection = () => {

    // let navigate = useNavigate();

    // const choose = () => {
    //   navigate(`/select-template/${screen}`);
    // };

    return (
        <>
            <Grid sx={{ flexGrow: 1, height: 700, width: "100%" }} container >
                <Grid item xs={12}>
                    <Grid container justifyContent="center" >
                        <Grid item
                            sx={{
                                height: 700,
                                width: "35%",
                                backgroundColor: "#87bdd8"
                            }}>
                            <Box
                                sx={{
                                    marginTop: "50%",
                                    marginLeft: "10%"
                                }}
                            >
                                <Button href="/find-route" 
                                sx={{
                                   height:150
                                }}
                                variant="contained">Same Source - Same Destination</Button>
                            </Box><br/><br/><br/><br/><br/><br/>
                             
                           {/* <Box
                                sx={{
                                    marginTop: "10%",
                                    marginLeft: "10%"
                                }}
                            >
                                <Button href="diff-source-same-dest" variant="contained">Different Source - Same Destination</Button>
                            </Box>
                            <Box
                                sx={{
                                    marginTop: "10%",
                                    marginLeft: "10%"
                                }}
                            >
                                <Button href="diff-source-diff-dest" variant="contained">Different Source - Different Destination</Button>
                            </Box> */}

                        </Grid>


                        <Grid item
                            sx={{
                                height: 700,
                                width: "65%",
                                backgroundColor: "black"
                            }}>
                            {/* <Typography
                            sx={{
                                justifyContent:"center",
                                alignContent:"center",
                                marginTop:"35%",
                                marginLeft :"10%"
                            }}
                                variant="h3" component="h3">
                                Please Select the type of Journey
                            </Typography> */}
                            <Box
                            sx={{
                                marginTop:"10%",
                                width: "100%",
                                backgroundColor:"black"
                            }}><img  
                              src={metroImg}/>
                              </Box>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </>
    );
}


export default Selection;