import React, {  useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import LoadingComp from "../../Loading/LoadingComp"
import result from '../../result/result';

const index = () => {
    let l = false;
    const [loading,setLoading] = useState(false);
    const [ans,setAns] = useState(null);
    const [send,setSend] = useState(false)


    const submitData=async(e)=>{
        // setLoading(true)
        e.preventDefault();
        let myForm = document.getElementById('myForm');
        let formData = new FormData(myForm);
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        console.log(object);
         axios.post("https://alzhemy-be.herokuapp.com/predict",object).then((res)=>{
            //  console.log(loading);
            console.log(res.data);
            setAns(res.data);
            alert(res.data)
             console.log(ans);
             setLoading(false);
             l = false;
             console.log(loading);
         })
    }

// useEffect(()=>{
//     if(ans=="CN"){
//         alert("CN")
//     }
//     else if(ans=="MCI"){
//         alert("MCI")
//     }
//     else{
//         console.log("AD");
//     }
// },[ans])  

  

    // if(l===true){
    //     return <LoadingComp />
    // }
    return (
         (loading)?(<LoadingComp  />):
        (<div className={styles.parent}>
            <div className={styles.header} >
                Answer the following questions to get your result
            </div>
            <form className={styles.container} onSubmit={(e)=>submitData(e)} id="myForm">
            <div className={styles.question}>
              <label htmlFor="fname" >(1) What's your <a className={styles.highlighter}>AGE </a>?</label><br></br>
               <input type="number" className={styles.age_input} className={styles.input}  name="AGE" /><br></br>
            </div>
            <div id="sex" id="question" className={styles.question}>
                    <label htmlFor="sex">(2) What's your <a className={styles.highlighter}>SEX </a>?</label><br></br>
                    <div className={styles.options}>
                        <input type="radio" id="male" name="PTGENDER" value="Male" />
                        <label htmlFor="male">Male</label><br></br>
                        <input type="radio" id="female" name="PTGENDER" value="Female" />
                        <label htmlFor="female">Female</label><br></br>
                    </div>
            </div><br></br>
            <div className={styles.question}>
                <label htmlFor="fname" >How many years of <a className={styles.highlighter}>FORMAL EDUCATION </a> do you have?</label><br></br>
                <input type="number" id="fname" name="PTEDUCAT" className={styles.input} /><br></br>
            </div>
            <div id="ethnicity" className={styles.question}>
                <label htmlFor="ethnicity">What's your <a className={styles.highlighter}>ETHNICITY </a>?</label><br></br>
                <div className={styles.options}>
                    <input type="radio" id="unknown" name="PTETHCAT" value="Unknown" />
                    <label htmlFor="unknown">Unknown</label><br></br>
                    <input type="radio" id="nothisporlatino" name="PTETHCAT" value="Not Hisp/Latino" />
                    <label htmlFor="nothisporlatino">Not Hisp/Latino</label><br></br>
                    <input type="radio" id="hisporlatino" name="PTETHCAT" value="Hisp/Latino" />
                    <label htmlFor="hisporlatino">Hisp/Latino</label><br></br>
                </div>
            </div><br></br>
            <div id="race" className={styles.question}>
                <label htmlFor="race">What's your <a className={styles.highlighter}>RACE </a>?</label><br></br>
                <div className={styles.options}>
                    <input type="radio" id="white" name="PTRACCAT" value="White" />
                    <label htmlFor="White">White</label><br></br>
                    <input type="radio" id="black" name="PTRACCAT" value="Black" />
                    <label htmlFor="Black">Black</label><br></br>
                </div>
            </div><br></br>
            <div id="apoe4" className={styles.question}>
                <label htmlFor="apoe4">What's your <a className={styles.highlighter}>APOE4 GENOTYPE </a>?</label><br></br>
                <div className={styles.options}>
                    <input type="radio" id="zero" name="APOE4" value="0" />
                    <label htmlFor="0">0</label><br></br>
                    <input type="radio" id="one" name="APOE4" value="1" />
                    <label htmlFor="1">1</label><br></br>
                    <input type="radio" id="two" name="APOE4" value="2" />
                    <label htmlFor="2">2</label><br></br>
                </div>
            </div><br></br>
            <div className={styles.question}>
                <label htmlFor="fname" className={styles.question}>What's your <a className={styles.highlighter}>MMSE SCORE </a> on cognitive test ?</label><br></br>
                <input type="number" id="mmse" name="MMSE" className={styles.input}  /><br></br>
            </div>
            <div id="imputed_genotype" className={styles.question}>
                <label htmlFor="imputed_genotype">What's your  <a className={styles.highlighter}>CHALLENGE SPECIFIC DESIGNATION </a>?</label>
                <div className={styles.options}>
                    <input type="radio" id="true" name="imputed_genotype" value="True" />
                    <label htmlFor="True">True[Has imputed Genotypes]</label><br></br>
                    <input type="radio" id="false" name="imputed_genotype" value="False" />
                    <label htmlFor="False">False</label><br></br>
                </div>
            </div><br></br>
            <div id="apoe_genotype" className={styles.question}>
                <label htmlFor="apoe_genotype">What's your  <a className={styles.highlighter}>APOE ALLELE 1 </a> and <a className={styles.highlighter}>ALLELE 2 GENOTYPES </a> ?</label>
                <br></br>
                <div className={styles.options}>
                    <input type="radio" id="option" name="APOE Genotype " value="3,4" />
                    <label htmlFor="3,4">3,4</label><br></br>
                    <input type="radio" id="option" name="APOE Genotype" value="3,3" />
                    <label htmlFor="3,3">3,3</label><br></br>
                    <input type="radio" id="option" name="APOE Genotype" value="2,3" />
                    <label htmlFor="2,3">2,3</label><br></br>
                    <input type="radio" id="option" name="APOE Genotype" value="4,4" />
                    <label htmlFor="4,4">4,4</label><br></br>
                    <input type="radio" id="option" name="APOE Genotype" value="2,4" />
                    <label htmlFor="2,4">2,4</label><br></br>
                    <input type="radio" id="option" name="APOE Genotype" value="2,2" />
                    <label htmlFor="2,2">2,2</label><br></br>
                </div>
            </div><br></br>
            <input type="submit" name="Sign Up" className={styles.question} className={styles.button} />
        </form>
        </div>)
    )
}

export default index
