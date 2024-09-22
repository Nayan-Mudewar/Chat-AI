import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const[question,setQuestion]=useState("");
  const[answer,setAnswer]=useState("");
  

  async function generateAnswer(){
    setAnswer("loading..");
    const response=await axios({
       url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBxv_cniVlFQLSoIzDKuR4XgoRvywZHjW8`,
       method:"post" ,
       data: 
      {contents:[{parts:[{text:question}]},
      ],
     },
     });



  

     setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);

  }

  return (
    <>
    <div className="container">
   
    
      <h1>Chat AI</h1>
      <div className="input-section">
      


      
      <textarea className="input-box" value={question}
      onChange={(e)=>setQuestion(e.target.value)}
      cols="40"
      rows="10"></textarea>
      <button className="generate-btn" onClick={generateAnswer}> Generate answer</button>
      </div>
      <div className="answer-section">
      <h2>Generated Answer :</h2>

      
      <p>{answer}</p>
      </div>
    
    </div>
    </>
  );
}

export default App


