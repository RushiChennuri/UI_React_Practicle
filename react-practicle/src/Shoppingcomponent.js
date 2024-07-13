import { useEffect, useState } from "react";

export default function Shoppingcomponent(){


const[catagories, setCatagories] = useState([]);

const[products, setProducts] = useState([]);

const[cartItems, setcartItems] = useState([]);


useEffect(()=>{
    loadCatagories();
    loadProducts("https://fakestoreapi.com/products");
},[])

function loadCatagories(){

    fetch("https://fakestoreapi.com/products/categories")
    .then(response => response.json())
    .then(data=>{
        setCatagories(data);
    });
}

function loadProducts(url){

    fetch(url)
    .then(response => response.json())
    .then(data=>{
        setProducts(data);
    })
}

function handleAddtoCart(e) {
    const id = e.target.id;

    fetch("https://fakestoreapi.com/products/${id}")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update cartItems state with the new item
            setcartItems([...cartItems, data]);
        })
        .catch(error => {
            console.error('Error fetching product:', error);
        });
}


function handlecatagorychange(e){
    const key = e.target.value;
    loadProducts(`https://fakestoreapi.com/products/category/${key}`);


}

return(
 <div className="container-flux">
    <header className="bg-success text-white text-center p-3">
     <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
    </header>
   <section className="row">
       <nav className="col-2">
           <div className="container">
               <h1>select catagories</h1>
                  <div>
                    <select className="form-select" onChange={handlecatagorychange}>      
                {catagories.map(cat=>
                      <option key={cat}>{cat}</option>
              )}
                    </select>
                  </div>
           </div>
       </nav>
       <main className="col-6 d-flex flex-wrap overflow-auto" style={{height:'600px'}}>
        {
           products.map(po=>
               
            <div key={po.id} className="card m-2 p-2 w-25">
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
                 <div className="card-footer">
                   <button id={po.id} onClick={handleAddtoCart} className="btn btn-danger w-100"> 
                    <span className="bi bi-cart4"> Add to card</span>
                   </button>
                 </div>

            </div>
           )
        }
       </main>
       <aside className="col-4">
           
           <table className="table table-hover">
               <thead>
                  <tr>
                    <th>title</th>
                    <th>price</th>
                    <th>preview</th>
                  </tr>
               </thead>
               <tbody>

                 {

cartItems.map(item=>
              <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td><img src = {item.image} width="50" height="50"/>
                    </td>


              </tr>


)


                 }


               </tbody>

           </table>
             


      </aside>
   </section>
 </div>
)


}