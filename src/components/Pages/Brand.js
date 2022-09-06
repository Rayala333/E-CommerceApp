import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {ArrowForwardIos,ArrowBackIos} from '@mui/icons-material';
import { NavLink } from "react-router-dom";

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
        <ArrowBackIos style={{fontSize:"2.3rem"}} className="arrow"/>
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
      infinite: false,
      lazyLoad: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow  />,
      prevArrow: <SamplePrevArrow />,
      responsive:[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            initialSlide: 1,
          }
        }
      ]
  }
  return (
    <div className='mulslider'>
        <Slider {...settings}>
          {
            productess.map((item,id)=>(
              <NavLink to={`/BrandDetails/${item.id}`} key={id}>
              <div className='card' >
                <div className="card-body" >
                        <img src={item.image} alt="newimage"  className='imageclass' />
                </div>
                
              </div>  
              </NavLink>
            ))
          }
        </Slider>
    </div>
  )
}

export default Brand