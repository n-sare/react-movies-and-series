import React, { useImperativeHandle, useState, useEffect } from 'react'
import { movieandSeriesData} from "./data";
import * as rs from "react-bootstrap";
import Navbar from "./Navbar";
//TODO dsvödsf
export const SeriesList = ()=> {
  let series=[]
  const [searchField, setSearchField]=useState("");
  //const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('mixed');
  let filteredSeries = movieandSeriesData
  const handleChange = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
  };
  if(searchField.length>2){
    filteredSeries=movieandSeriesData.filter((i)=>{
      return i.title.toLowerCase().match(searchField); 
    });
  }
  const sortingMovies = (e) => {
    e.preventDefault();
    setSortType(e.target.value);
  };
  if(sortType==="mixed"){
    filteredSeries=movieandSeriesData.filter((i)=>{
      return i.title.toLowerCase().match(searchField); 
    });
  }

  else if(sortType==="new"){
    filteredSeries = [...filteredSeries].sort((a, b) => {
      return b["releaseYear"] - a["releaseYear"]});
  }
  else{
    filteredSeries = [...filteredSeries].sort((b, a) => {
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
            {filteredSeries.map((data, key) =>{
              if(data.programType=="series"){
                series.push(data);
                
                if(searchField.length<3 && sortType=='mixed'){
                    while(series.length<=18){
                      return (<div key={key}>
                          <rs.CardGroup>
                              <Series 
                              key={key}
                              title={data.title}
                              description={data.description}
                              programType={data.programType}
                              images={data.images['Poster Art'].url}
                              releaseYear={data.releaseYear}
                              /></rs.CardGroup>
                          </div>
                            );
                    }
                  }
                  else{
                    return (<div key={key}>
                    <rs.CardGroup>
                      <Series 
                      key={key}
                      title={data.title}
                      description={data.description}
                      programType={data.programType}
                      images={data.images['Poster Art'].url}
                      releaseYear={data.releaseYear}
                      />
                      </rs.CardGroup>
                  </div>
                    );
                  }
              
                }
            })}
            </rs.CardGroup>  
        </div>
        </>)
};
export default SeriesList;

const Series= ({title, description, programType, images, releaseYear}) =>{
    
    return(
  <div>
   <tr>
       <td>
   
   

        <rs.Card style={{ width: '18rem'}} >
             <rs.Card.Img variant="top" src={images} />
              <rs.Card.Body>
                 <rs.Card.Title>{title}</rs.Card.Title>
                 <rs.Card.Text>{description}</rs.Card.Text>
    
             </rs.Card.Body>
        </rs.Card>
    
     </td>
     </tr> 
  </div>  

// [
//     'Primary',
//     'Secondary',
//     'Success',
//     'Danger',
//     'Warning',
//     'Info',
//     'Light',
//     'Dark',
//   ].map((variant, idx) => (
//     <rs.Card
//       bg={variant.toLowerCase()}
//       key={idx}
//       text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
//       style={{ width: '18rem' }}
//       className="mb-2"
//     >
      
//       <rs.Card.Body>
//         <rs.Card.Title>{variant} Card Title </rs.Card.Title>
//         <rs.Card.Text>
//           Some quick example text to build on the card title and make up the bulk
//           of the card's content.
//         </rs.Card.Text>
//       </rs.Card.Body>
//     </rs.Card>
//   )
//     ) 
)
    
};