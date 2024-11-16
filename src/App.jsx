import { Button, shouldSkipGeneratingVar, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';



function App() {

const [principle,setPrinciple]=useState(0)
const [interest,setInterest]=useState(0)
const [year,setYear]=useState(0)
const [simpleInterest,setSimpleInterest]=useState(0)

const[isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
const[isInvalidIntrest,setIsInvalidIntrest]=useState(false)
const[isInvalidYear,setIsInvalidYear]=useState(false)

console.log(principle);



const validateInput=(tag)=>{

  const {name,value}=tag
  console.log(name,value);
  

  console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
  if(!!value.match(/^\d*.?[0-9]+$/)){
  
    if(name=='principle'){
      setPrinciple(value)
      setIsInvalidPrinciple(false)
    }
    else if(name=='interest'){
      setInterest(value)
      setIsInvalidIntrest(false)
    }
    else{
      setYear(value)
      setIsInvalidYear(false)
    }  
  }else{
    if(name=='principle'){
      setIsInvalidPrinciple(true)
    }
    else if(name=='interest'){
      setIsInvalidIntrest(true)
    }
    else{
      setIsInvalidYear(true)
    }
  }



  console.log(tag);

}

const handleCalculate=(e)=>{
  e.preventDefault()
  console.log("Button Clicked");

  if(principle && interest && year){
   
    setSimpleInterest(principle*interest*year/100)
    

  }
  else{
    alert("please fill the field properly")
  }
  
}

const handleReset=()=>{

setPrinciple(0)
setInterest(0)
setYear(0)
setSimpleInterest(0)

setIsInvalidPrinciple(false)
setIsInvalidIntrest(false)
setIsInvalidYear(false)


}
  return (
    <>
      <div
        style={{ minHeight: "100vh", width: "100%" }}
        className="d-flex align-item-center justify-content-center bg-dark"
      >
        <div
          style={{ width: "500px" }}
          className="bg-light p-5 rounded m-3"
        >
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your Interest Easily</p>

          <div
            className="shadow bg-warning rounded d-flex align-items-center justify-content-center text-light flex-column"
            style={{ height: "120px", width: "400px" }}
          >
            <h1> ₹ {simpleInterest} </h1>
            <h5>Total Simple Interest</h5>
          </div>

          <form action="" className="mt-5">
            <div className="mb-3">
              <TextField name='principle' value={principle || ""} onChange={e=>validateInput(e.target)} className="mb-3" style={{ width: "100%" }} id="outlined-basic" label=" ₹ Principle Amount" variant="outlined" />
            </div>
             {
             isInvalidPrinciple &&
             <p className='text-danger'>Invalid Principle Amount</p>
             }

            <div className="mb-3">
            <TextField name='interest' value={interest || ""} onChange={e=>validateInput(e.target)}  style={{ width: "100%" }} id="outlined-basic" label="Rate" variant="outlined" />

            </div>  
            {
             isInvalidIntrest &&
             <p className='text-danger'>Invalid Intrest Rate</p>
            }

            <div className="mb-3">
            <TextField name='year' value={year || ""} onChange={e=>validateInput(e.target)}  style={{ width: "100%" }} id="outlined-basic" label="Time Period" variant="outlined" />

            </div>  
            {
             isInvalidYear &&
             <p className='text-danger'>Invalid Time Period</p>
            }

            <Stack direction="row" spacing={2}>

            <Button disabled={isInvalidPrinciple || isInvalidIntrest || isInvalidYear} type='submit' onClick={handleCalculate} className='w-100 bg-dark' style={{height:"50px"}} variant="contained">Calculate</Button>
            <Button onClick={handleReset} className='w-100'  variant="outlined">Reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
