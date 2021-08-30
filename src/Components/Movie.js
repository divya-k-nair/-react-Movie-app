import { Grid, Typography,TextField, Button } from '@material-ui/core'
import React from 'react'

export default function Movie() {
    return (
        <Grid container>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>

            </Grid>
            <Grid item  xs={12} sm={4} md={4} lg={4} xl={4}>
            <Typography>MOVIE APP</Typography>
            <TextField
            variant="outlined"
            label="Movie name"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            variant="outlined"
            label="Actor"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            variant="outlined"
            label="Actress"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            variant="outlined"
            label="Producer"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            variant="outlined"
            label="Director"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            variant="outlined"
            label="Camera"
            fullWidth
            required
            margin="normal"
            />
            <TextField
            variant="outlined"
            label="Year of release"
            fullWidth
            required
            margin="normal"

            />
            <Button 
            variant="contained"
            color="primary"
            margin="normal"
            >SUBMIT</Button>

            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>

            </Grid>

        </Grid>
      
    )
}
