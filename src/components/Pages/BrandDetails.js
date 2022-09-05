import React,{useState,useEffect} from 'react';
import  { useParams } from 'react-router-dom';
import axios from 'axios'

const BrandDetails = () => {

const {id} = useParams()


const [BrandDetails,setBrandDetails] = useState([])

console.log(BrandDetails.length)

const brand = async ()=>{
   const productees =  await axios.get(`http://localhost:8000/brands`)

   const newDetails = productees.data
  
   const filterdata = newDetails.filter(x=>
            x.brand_id == id
    )

    setBrandDetails(filterdata)

  }
  useEffect(()=>{
    brand()
  },[])


  
  return (
    <div className='Detailsp' >
    {
        BrandDetails.length <= 0 ? "No Data Found":
        BrandDetails.map((e,i)=>(
            <div className='card' key={i}>
                <div className="card-body" >
                    <img src={e.image} alt="newimage" width='100%' />
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default BrandDetails