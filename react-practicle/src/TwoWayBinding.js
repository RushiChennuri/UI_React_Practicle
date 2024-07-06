import { useState } from "react"

export default function TwoWayBinding(){

  

      const[products, setProducts] = useState({
        name: '',
        price :0,
        city : '',
        stock:false
      });

      const[newproducts, newsetProducts] = useState({
        name: '',
        price :0,
        city : '',
        stock:false
      });
      

      function handlename(e){
        setProducts({
            
            name: e.target.value,
            price : products.price,
            city :products.city,
            stock:products.stock

        })

      }
      function handleprice(e){
        setProducts({
            name: products.name,
            price : e.target.value,
            city :products.city,
            stock:products.stock

        })

      }
      function handlecity(e){
        setProducts({
            name: products.name,
            price : products.price,
            city :e.target.value,
            stock:products.stock

        })

      }
      function handlestock(e){
        setProducts({
            name: products.name,
            price : products.price,
            city :products.city,
            stock:e.target.value

        })
    }
        function handlestock(e){
            setProducts({
                name: products.name,
                price : products.price,
                city :products.city,
                stock:e.target.value
    
            })

      }

      function handleregister(){
       
       newsetProducts(products);
       
     }



    return(
        <div className="container">
            <div className="row">
                     <div className="col-3">      
                    <h2>Register Product</h2>
                     <dl>
                       <dt>Name</dt>
                         <dd>
                           <input type="text" onChange={handlename}/>
                         </dd>
                           <dt>Price</dt>     
                         <dd>
                            <input type="text" onChange={handleprice}/>
                         </dd>
                        <dt>City</dt>     
                         <dd>
                           <input type="text" onChange={handlecity}/>
                         </dd>
                        <dt>Stock</dt> 

                         <dd className="form-switch">
                         <input type="checkbox" className="form-check-input" onChange={handlestock}/> 
                             Available
                         </dd>
                         </dl>

                         <button onClick={handleregister} className="btn btn-primary"> Register</button>
                     </div>


                     <div className="col-9">      
                    <h2> Product details</h2>
                     <dl>
                       <dt>Name</dt>
                         <dd>
                           {newproducts.name }
                         </dd>
                           <dt>Price</dt>     
                         <dd>
                         {newproducts.price }  
                         </dd>
                        <dt>City</dt>     
                         <dd>
                         {newproducts.city }  
                         </dd>
                        <dt>Stock</dt> 

                         <dd>
                           {(newproducts.stock==true)?"Available": "Out of stock"}
                         </dd>
                         </dl>

                        
                     </div>

            </div>


        </div>
    )










}