import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import'../../styles/HistoryCommits.css'
import HistoryCommitsSliderItem from "./HistoryCommitsSliderItem";
import sliderOptions from "./SettingSlider";





const HistorySlider = () => {

    let dataCommits = JSON.parse(localStorage.getItem("commitsItem"));

    return (
      <Slider {...sliderOptions()} style={{ display: 'flex', height:'auto' }} className='history-slide'>

        {dataCommits.arrItemUrl.map( (item,index) => 

        <HistoryCommitsSliderItem 
        
        key = {index}

        date = {dataCommits.arrChangesDate[index]}

        name = {dataCommits.arrName[index]}

        email = {dataCommits.arrEmail[index]}

        message = {dataCommits.arrMessage[index]}

        itemUrl = {dataCommits.arrItemUrl[index]}

        imgUrl = {dataCommits.arrImgUrl[index]}

        
        /> )}

      </Slider>
    );
  }



export default HistorySlider;
