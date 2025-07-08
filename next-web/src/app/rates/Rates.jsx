'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Rates({num_stars, ...props}) {
    const [value, setValue] = React.useState(num_stars);

  return (
        <Box sx={{ '& > legend': { mt: 2 } }}>
        <Rating
            className="custom-rating"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            {...props}
        />
        </Box>
    );
}

export default Rates;