import React from 'react';
import { Stack,Typography  } from '@mui/material';

const Footer = () => {
  return (
    <React.Fragment>
      <Stack
        // display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ paddingBottom:"10px",color:"#7E8286" }}
      >
       <img
                  src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
                  style={{ width: "100px" }}
                  alt="logo"
                />
        <Typography>
            orderonline@flipkart.com
        </Typography>
        <Typography>
          © 2007-2022 Flipkart.com 
        </Typography>     
      </Stack>
      
    </React.Fragment>
  )
}

export default Footer