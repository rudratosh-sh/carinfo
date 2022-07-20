import React,{useState} from 'react';
import '../assets/App.css';
import CarBudgetPopular from '../components/car/CarBudgetPopular';
import CarMostPopular from '../components/car/CarMostPopular';
import CarNewPopular from '../components/car/CarNewPopular';
import CarNews from '../components/car/CarNews';
import CarSearch from '../components/car/CarSearch';
import CarSlider from '../components/car/CarSlider';
import CarUsedPoplular from '../components/car/CarUsedPopular';


const Car = () =>{
    return(
        <>
        <CarSlider/>
        <CarNewPopular/>
        <CarUsedPoplular/>
        <CarBudgetPopular/>
        <CarMostPopular/>
        <CarNews/>     
        </>
    );
};

export default Car;