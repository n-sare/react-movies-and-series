import React, { useImperativeHandle, useState, useEffect } from 'react'
import { movieandSeriesData} from "./data";
import * as rs from "react-bootstrap";
import Navbar from "./Navbar";
 


export const MovieList = ()=> {
  let movies=[]
  const [searchField, setSearchField]=useState("");
  //const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('mixed');
  let filteredMovies = movieandSeriesData
  //filteredMovies=movieandSeriesData.slice(1,19)
  const handleChange = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
  };
  if(searchField.length>2){
    filteredMovies=movieandSeriesData.filter((i)=>{
      return i.title.toLowerCase().match(searchField); 
    });
  }
  const sortingMovies = (e) => {
    e.preventDefault();
    setSortType(e.target.value);
  };
  if(sortType=="mixed"){
    filteredMovies=movieandSeriesData.filter((i)=>{
      return i.title.toLowerCase().match(searchField); 
    });
  }

  else if(sortType=="new"){
    filteredMovies = [...filteredMovies].sort((a, b) => {
      return b["releaseYear"] - a["releaseYear"]});
  }
  else{
    filteredMovies = [...filteredMovies].sort((b, a) => {
      return b["releaseYear"] - a["releaseYear"]});
  }
    return(<>
    <Navbar/>
    <input type= "text" placeholder="Film Ara" onChange={handleChange} value={searchField}/>
    <select onChange={sortingMovies}>
        <option value="mixed">Rastgele</option> 
        <option value="old">En eskiye göre sırala</option>
        <option value="new">En yeniye göre sırala</option>
    </select>
      
        <div className="movie-container">
        <rs.CardGroup>
            {filteredMovies.map((data, key) =>{
              if(data.programType=="movie"){
                movies.push(data);
                
                if(searchField.length<3 && sortType=='mixed'){
                  while(movies.length<=18){
                    return (<div key={key}>
                            <Movie 
                            key={key}
                            title={data.title}
                            description={data.description}
                            programType={data.programType}
                            images={data.images['Poster Art'].url}
                            releaseYear={data.releaseYear}
                            />
                        </div>
                          );
                  }
                }
                else{
                  return (<div key={key}>
                    
                    <Movie 
                    key={key}
                    title={data.title}
                    description={data.description}
                    programType={data.programType}
                    images={data.images['Poster Art'].url}
                    releaseYear={data.releaseYear}
                    />
                </div>
                  );
                }
              }
            })}
          </rs.CardGroup>  
        </div>
        </>)
};

const Movie= ({title, description, programType, images, releaseYear}) =>{
    
    return(

      <rs.Card style={{ width: '18rem' }}>
        <rs.Card.Img variant="top" src={images} />
        <rs.Card.Body>
          <rs.Card.Title>{title}</rs.Card.Title>
        <rs.Card.Text>{description}</rs.Card.Text>
    
        </rs.Card.Body>
      </rs.Card>
   
        )
    
};