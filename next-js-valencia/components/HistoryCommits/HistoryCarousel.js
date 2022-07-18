import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../../styles/HistoryCommits.module.css"
import HistoryCarouselItem from "./HistoryCarouselItem";
import { useState,useEffect } from "react";
import {setting} from "../../components/HistoryCommits/SettingsSlider"


  const HistoryCarousel = () => {

    const [arrCommits, setArrCommits] = useState([])
    const [itemCommits, setItemCommits] = useState([])

    
    useEffect(() => {
      const dataCommits = JSON.parse(localStorage.getItem("commitsItem"));
      setItemCommits(dataCommits)
      setArrCommits(dataCommits.arrDate)
    }, [])

    return (
      <div >
        <Slider {...setting()}  className={styles.historySlider}>

         {arrCommits.map((item,index) =>(

            <HistoryCarouselItem 

            key={index}

            date = {itemCommits.arrChangesDate[index]}

            name = {itemCommits.arrName[index]}

            email = {itemCommits.arrEmail[index]}

            message = {itemCommits.arrMessage[index]}

            itemUrl = {itemCommits.arrItemUrl[index]}

            imgUrl = {itemCommits.arrImgUrl[index]}

            />

          ))}

        </Slider>
      </div>
    );
  }





export default  HistoryCarousel;