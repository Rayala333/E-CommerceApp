import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {ArrowForwardIos,ArrowBackIos} from '@mui/icons-material';

function SampleNextArrow(props) {
  console.log(props)
  const { className, style, onClick } = props;
  return (
        <div onClick={onClick} className={className} >
          <ArrowForwardIos style={{fontSize:"2.3rem"}}/>
        </div>
  );
}


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div onClick={onClick} className={className}>
        <ArrowBackIos style={{fontSize:"2.3rem"}} />
      </div>
  );
}

const Brand = () => {

  const [productess, setProductess] = useState([])

  console.log(productess,"state")

  const brand = async()=>{
   const productees =  await axios.get('http://localhost:8000/products')
  //  console.log(productees.data)
   setProductess(productees.data)
  }
  useEffect(()=>{
    brand()
  },[])
  const settings ={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow  />,
      prevArrow: <SamplePrevArrow />
  }
  return (
    <div className='mulslider'>
        <Slider {...settings}>
          {
            productess.map((item,id)=>(

              <div className='card' >
                <div class="card-body">
                        <img src={item.image} alt="newimage" width='100%' />
                </div>
              </div>  
              
            ))
          }
        </Slider>
    </div>
  )
}

export default Brand