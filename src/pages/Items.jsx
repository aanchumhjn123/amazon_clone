import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap";
import ProductsList from '../components/UI/ProductList'
import { useLocation,Link } from 'react-router-dom'
import '../styles/items.css'
import { useEffect,useState  } from 'react'
const Items = () => {
  const location = useLocation()
  const value = location.state

  const [smartphones, setsmartphones] = useState([]);
  const [laptops, setlaptops] = useState([]);
  const [fragrances, setfragrances] = useState([]);
  const [skincare, setskincare] = useState([]);
  const [groceries, setgroceries] = useState([]);
  const [furniture, setfurniture] = useState([]);
  const [womensjewellery,setwomensjewellery]=useState([])
  const [tops, settops] = useState([]);
  const [womensdresses, setwomensdresses] = useState([]);
  const [womensshoes, setwomensshoes] = useState([]);
  const [mensshirts, setmensshirts] = useState([]);
  const [mensshoes, setmensshoes] = useState([]);
  const [menswatches, setmenswatches] = useState([]);
  const [womensbags,setwomensbags] =useState([])
  const [sunglasses,setsunglasses] =useState([])
  const [automotive,setautomotive] =useState([])

  
  if (value === 'smartphones') {
    var product
     product = smartphones 
  }
  
  if(value === 'laptops') {
     product = laptops
  } 

  if(value === 'skincare') {
    product = skincare
 } 
 if(value === 'fragrances') {
  product = fragrances
}
 if(value === 'groceries') {
  product = groceries
} 
if(value === 'furniture') {
  product = furniture
} 
if(value === 'womens-jewellery') {
  product = womensjewellery
} 
if(value === 'tops') {
  product = tops
} 
if(value === 'womens-dresses') {
  product = womensdresses
} 
if(value === 'womens-shoes') {
  product = womensshoes
} 

if(value === 'mens-shirts') {
  product = mensshirts
} 

if(value === 'mens-shoes') {
  product = mensshoes
} 

if(value === 'mens-watches') {
  product = menswatches
} 

if(value === 'womens-bags') {
  product = womensbags
} 

if(value === 'sunglasses') {
  product = sunglasses
} 
if (value === 'automotive') {
     product = automotive
}
 



  useEffect(() => {
    var url = "https://dummyjson.com/products/category/smartphones";
    async function funcName() {
      const response = await fetch(url);
      var data = await response.json();
      setsmartphones(data.products);
    }
   funcName();

   var url1 = "https://dummyjson.com/products/category/laptops";
   async function funcName1() {
    const response1 = await fetch(url1);
    var data1 = await response1.json();
    setlaptops(data1.products);
     
  }
 funcName1();

 var url2 = "https://dummyjson.com/products/category/fragrances";
   async function funcName2() {
    const response2 = await fetch(url2);
    var data2 = await response2.json();
    setfragrances(data2.products);
     
  }
 funcName2();

 var url3 = "https://dummyjson.com/products/category/skincare";
   async function funcName3() {
    const response3 = await fetch(url3);
    var data3 = await response3.json();
    setskincare(data3.products);
     
  }
 funcName3();

 var url4 = "https://dummyjson.com/products/category/groceries";
   async function funcName4() {
    const response4 = await fetch(url4);
    var data4 = await response4.json();
    setgroceries(data4.products);
     
  }
 funcName4();

 var url5 = "https://dummyjson.com/products/category/womens-jewellery";
 async function funcName5() {
  const response5 = await fetch(url5);
  var data5 = await response5.json();
  setwomensjewellery(data5.products);
   
}
funcName5();

var url6 = "https://dummyjson.com/products/category/furniture";
 async function funcName6() {
  const response6 = await fetch(url6);
  var data6 = await response6.json();
  setfurniture(data6.products);
   
}
funcName6();

var url7 = "https://dummyjson.com/products/category/tops";
 async function funcName7() {
  const response7 = await fetch(url7);
  var data7 = await response7.json();
  settops(data7.products);
   
}
funcName7();

var url8 = "https://dummyjson.com/products/category/womens-dresses";
 async function funcName8() {
  const response8 = await fetch(url8);
  var data8 = await response8.json();
  setwomensdresses(data8.products);
   
}
funcName8();

var url9 = "https://dummyjson.com/products/category/womens-shoes";
 async function funcName9() {
  const response9 = await fetch(url9);
  var data9 = await response9.json();
  setwomensshoes(data9.products);
   
}
funcName9();

var url10 = "https://dummyjson.com/products/category/mens-shirts";
 async function funcName10() {
  const response10 = await fetch(url10);
  var data10 = await response10.json();
  setmensshirts(data10.products);
   
}
funcName10();

var url11 = "https://dummyjson.com/products/category/mens-shoes";
 async function funcName11() {
  const response11 = await fetch(url11);
  var data11 = await response11.json();
  setmensshoes(data11.products);
   
}
funcName11();

var url12 = "https://dummyjson.com/products/category/womens-bags";
 async function funcName12() {
  const response12 = await fetch(url12);
  var data12 = await response12.json();
  setwomensbags(data12.products);
   
}
funcName12();

var url13 = "https://dummyjson.com/products/category/mens-watches";
 async function funcName13() {
  const response13 = await fetch(url13);
  var data13 = await response13.json();
  setmenswatches(data13.products);
   
}
funcName13();

var url14 = "https://dummyjson.com/products/category/sunglasses";
async function funcName14() {
 const response14 = await fetch(url14);
 var data14 = await response14.json();
 setsunglasses(data14.products);
  
}
funcName14();

var url15 = "https://dummyjson.com/products/category/automotive";
 async function funcName15() {
  const response15 = await fetch(url15);
  var data15 = await response15.json();
  setautomotive(data15.products);
   
}
funcName15();
     
  }, []);
 

  return( <> 
  <Helmet title={"Items"}></Helmet>
  <section className="main_section">
        <Row className="row-margin ">
           
          <h1 className='product'>PRODUCT</h1>
           
        </Row>
         
    {product?
     <Row className="margin">
    
    <ProductsList data={product}/>
    </Row>
    : 
     <>
     <Row className="margin">
     <ProductsList data ={smartphones}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={laptops}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={fragrances}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={skincare}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={groceries}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={furniture}/>
        
        </Row><Row className="margin">
     <ProductsList data ={womensjewellery}/>
        
        </Row>
        <Row className="margin">
     <ProductsList data ={tops}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={womensdresses}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={womensshoes}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={mensshirts}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={mensshoes}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={menswatches}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={womensbags}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={sunglasses}/>
        
        </Row>

        <Row className="margin">
     <ProductsList data ={automotive}/>
        
        </Row></> 
}
      </section>
  </>
 )
}

export default Items