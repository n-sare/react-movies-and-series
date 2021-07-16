import React, { Component } from "react";
import { Route, Link, Router } from "react-router-dom";
import "./HomePage.css"
import SeriesList from "./SeriesList";
import Navbar from "./Navbar";

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        return(
        <div className="container">
            <Navbar />
            <div className="row">
            <div className="column">
                <Link to="/movielist">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-movies-1600459548.jpg" className="Icon" />
                <div className="center" >Filmler</div>
                </Link>
            </div>
            <div className="column">
            <Link to="/serieslist">
                <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/04/18/15872035944874.jpg" className="Icon" />
                <div className="center">Diziler</div>
            </Link>
            </div>
            </div>
            
        </div>
        )
    }


}
export default HomePage;

