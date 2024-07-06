import { useEffect, useState } from "react";

export default function Shoppingcomponent(){


const[catagories, setCatagories] = useState([]);

const[products, setProducts] = useState([]);


useEffect(()=>{
    loadCatagories();
    loadProducts();
},[])

function loadCatagories(){

    fetch("https://fakestoreapi.com/products/categories")
    .then(response => response.json())
    .then(data=>{
        setCatagories(data);
    });
}

function loadProducts(){

    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data=>{
        setProducts(data);
    })
}

return(
 <div className="container-flux">
    <header className="bg-success text-white text-center p-3">
     <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
    </header>
   <section className="row">
       <nav className="col-3">
           <div className="container">
               <h1>select catagories</h1>
                  <div>
                    <select className="form-select">      
                {catagories.map(cat=>
                      <option key={cat}>{cat}</option>
              )}
                    </select>
                  </div>
           </div>
       </nav>
       <main className="col-9 d-flex flex-wrap overflow-auto" style={{height:'600px'}}>
        {
           products.map(po=>
               
            <div key="{po.id}" className="card m-2 p-2 w-25">
                  <img src={po.image} className="card-img-top" height="150"/>
                 <div className="card-header">
                  <p>{po.title}</p>
                 </div>
                 <div className="card-body">
                   <dl>
                     <dt>Price</dt>
                     <dd>{po.price}</dd>
                     <dt>Ratin</dt>
                      <dd>{po.rating.rate}</dd>
                   </dl>   
                      

                 </div>





            </div>
               



           )


        }



       </main>
   </section>
 </div>
)


}