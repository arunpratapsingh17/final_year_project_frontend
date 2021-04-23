import React from 'react'
import styles from '../../styles/Home.module.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

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
  const initialPopupConfig = {
    show: false,
    iconUrl: '',
    heading: '',
    description: 'Hey there! You can hit the "Back" button on your browser to change your answers to your earlier questions.',
};
const index = () => {
    const classes = useStyles();
    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.questHead}>Please upload your <span className={styles.highlightBlue}>MRI scan </span>?</h3>
                <link rel="icon" href="/favicon.ico" />
            </div>
           <Input type="file" />
           <br></br>
            <Button className={classes.buttonCont} variant="contained" color="primary" href="/3" href="/5" >
                 Submit
            </Button>
        </div>
    )
}

export default index
