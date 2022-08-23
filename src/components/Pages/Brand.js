import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Slider from "react-slick";


const Brand = () => {
  const [myproduct,setMyproduct] = useState(null)

  console.log(myproduct)

  const mydata = async()=>{
       const myproducts =  await axios.get(` http://localhost:8000/products`)

      //  console.log(myproducts.data)
       setMyproduct(myproducts.data)
  }
  useEffect(()=>{
      mydata()
  },[])


  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

 
  return (
    <React.Fragment>

      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>


          {
               myproduct &&  myproduct.map((element) => (
                            <div className="box">

                            <img src={element.image} className="images-1 " />

                            </div>
                        ))
                    }
         


        </Slider>
      </div>

      
      
    </React.Fragment>
  )
}

export default Brand