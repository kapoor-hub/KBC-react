import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import "./Result.css"

const Result = ({name,score}) => {
  useEffect(()=>{
    if(!name)
    {
      History.push("/");
    }
  },[name,History]);
  return (
    <div className='result'>
      <span className='title'>Final Score: {score}</span>
      <Button
      variant="contained"
      color="secondary"
      size="large"
      style={{alignSelf:"center",marginTop:20}}
      href="/">
        Go to Homepage
      </Button>
    </div>
  )
}

export default Result
