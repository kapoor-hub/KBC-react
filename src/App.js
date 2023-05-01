import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import { BrowserRouter,Route, Routes } from 'react-router-dom' ;
import Register from "./Pages/Register";
import Quiz from "../src/Pages/Quiz";
import Result from "../src/Pages/Result";
import Home from "../src/Pages/Home";
import { useState } from 'react';
import axios from 'axios';
function App() 
{

  // use state is used when we need to update some value  here name has its value as "" and set name is used to change the value
  const [name,setName]=useState("");
  const [questions,setQuestions]=useState("");
  const [score,setScore]=useState(0);
  
  const fetchQuestions=async(category="",difficulty="")=>{

    const {data}=await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data);
    setQuestions(data.results);
    // console.log(category);
    // console.log(data.results);
  
  }
  
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:'url(./bg.jpg)'}}>
      <Header/>
      <Routes>

        {/* Route for home page */}
        <Route path='/' exact element={
        <Home 
        />}></Route>

        {/* Route for register page */}
        <Route path="/register" exact element=
        {
        <Register
        name={name}
        setName={setName} 
        fetchQuestions={fetchQuestions}
        />
        }></Route>

        {/* Route for Quiz page */}
        <Route path="/quiz" exact element={<Quiz
        name={name}
        questions={questions}
        score={score}
        setScore={setScore}
        setQuestions={setQuestions}
        />}></Route>

        {/* Route for result page */}
        <Route path="/result" exact element={
        <Result
        score={score} 
        name={name}
        />}></Route>
      </Routes>
      <Footer/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
