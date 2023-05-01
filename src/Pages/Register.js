import React, { useState } from 'react';
import './Register.css';
import TextField from '@mui/material/TextField';
import Categories from "../data/Categories";
import { Button, MenuItem } from '@mui/material';
import {  useNavigate } from "react-router-dom";
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const Register = ({name,setName,fetchQuestions}) => 
{

  const [category,setCategory]=useState("");
  const [difficulty,setDifficulty]=useState("");
  const [error,setError]=useState(false);

  const navigate=useNavigate();

  const handleSubmit=()=>
  {
    if( !name || !category || !difficulty )
    {
    setError(true);
    return;
    }
    else
    {
      setError(false);
      fetchQuestions(category,difficulty);
      navigate("/quiz");
    }
  }


  return (
    <div className='content'>
      <div className='settings'>
        <span className='reg'>Register Here</span>

        <div className='settings_select'>
          {error &&<ErrorMessage>Please Fill all the Fields</ErrorMessage>}
          <TextField
            sx={{ background: "#e4c20cf7" }}
            className='textfield'
            label="Enter Your Name"
            variant='filled' 
            style={{marginBottom:50}}
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

          <TextField
          select
          className='textfield'
          sx={{background:"#e4c20cf7"}}
          label="Select Category" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          variant='filled'
          style={{marginBottom:50}}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
            
          </TextField>

          <TextField
          select
          className='textfield'
          sx={{background:"#e4c20cf7"}}
          label='Select Difficulty'
          variant='filled'
          style={{marginBottom:40}}
          onChange={(e) => setDifficulty(e.target.value)}
          value={difficulty}
          >
          <MenuItem key="Easy"  value="easy">Easy</MenuItem>
            <MenuItem key="Medium"  value="medium">Medium</MenuItem>
            <MenuItem key="Hard"  value="hard">Hard</MenuItem>
          </TextField>

            <Button 
            variant='contained' 
            color='primary' 
            size='large'
            onClick={handleSubmit}
            > Start Playing</Button>
        </div>
      </div>

      <img src="/kbc.webp" alt="quiz img" className='banner' />


    </div>
  )
}

export default Register
