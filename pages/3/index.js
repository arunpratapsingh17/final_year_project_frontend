import React from 'react'
import styles from '../../styles/Home.module.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    buttonCont:{
        marginTop:"100px"
    }
  }));
  const sexes = [
    {
      value: 'Male',
      label: '♂ Male',
    },
    {
        value: 'Female',
        label: '♀ Female',
      },
  ];

const index = () => {
    const classes = useStyles();
    const [sex, setSex] = React.useState('Male');
    const handleChange = (event) => {
      setSex(event.target.value);
    };
    return (
        <div className={styles.container}>
           <div>
                <h3 className={styles.questHead}>What's your <span className={styles.highlightBlue}>sex </span>?</h3>
                <link rel="icon" href="/favicon.ico" />
            </div>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={sex}
                    onChange={handleChange}
                    helperText="Please select your sex"
                >
          {sexes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </div>
                <br></br>
            </form>
            <Button className={classes.buttonCont} variant="contained" color="primary" href="/3" href="/4">
                 Submit
            </Button>
        </div>
    )
}

export default index
