import React from 'react';
import {useState} from 'react';
import './App.css';
import Data from './components/Data';

const App=()=>{
  const [searchItem, setSearchItem]=useState('');
  const [searchResult, setSearchResult]=useState({});

  const searchUser= async (username)=>{
          setSearchResult({});
          const url="https://leetcode-stats-api.herokuapp.com/"+username;
          const response= await fetch(url);
          const data= await response.json();
          setSearchResult(data);
          if(data.status!=="success")
            alert("User Not Found!");
          console.log(data);
  };
  return (
    <div className="App">
      <h1>LeetCode Statistics</h1>
      <div id="query">
        <input
          placeholder='Search username'
          value={searchItem}
          onChange={(event)=>setSearchItem(event.target.value)}
        />
        <button onClick={()=>searchUser(searchItem)}>
          Search
        </button>
      </div>
        {
          searchResult.status==="success"?
          (
            <div id="result">
              <Data title="Total Solved" value={searchResult.totalSolved}/>
              <Data title="Easy Solved" value={searchResult.easySolved}/>
              <Data title="Medium Solved" value={searchResult.mediumSolved}/>
              <Data title="Hard Solved" value={searchResult.hardSolved}/>
              <Data title="Acceptance Rate" value={searchResult.acceptanceRate.toString()+"%"}/>
              <Data title="Ranking" value={searchResult.ranking}/>
            </div>
          ) :
          (
            <></>
          )
        }
    </div>
  )
}

export default App;