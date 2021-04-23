import React from 'react'
import styles from '../../styles/Home.module.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

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
const index = () => {
    const classes = useStyles();

    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.questHead}>What's your <span className={styles.highlightBlue}>email id </span>?</h3>
                <link rel="icon" href="/favicon.ico" />
            </div>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField required id="standard-required" placeholder="please write your email-id  here" className={styles.input}/>
                </div>
                <br></br>
            </form>
            <Button className={classes.buttonCont} variant="contained" color="primary" href="/2">
                 Submit
            </Button>
        </div>
    )
}

export default index
