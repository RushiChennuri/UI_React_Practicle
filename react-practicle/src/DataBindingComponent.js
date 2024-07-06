export default function DataBindingComponent(){

//products
//samsung tv price
//shoes price

var menu = [
  {Category : 'Electronis', products : ['TV', 'FAN'] },
  {Category : 'Footwear', products : ['Nike', 'puma'] },
]

var products = [
    {Name : 'Samsung TV', Price : 56000},
    {Name : 'Nike', Price : 500}
]


return(
    <div className="container">
       <h2>products Table</h2>
            <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                    {
       products.map(pr => 
      <tr>
        <td> {pr.Name}</td>
        <td> {pr.Price}</td>
      </tr>
)
                    }
                </tbody>  
            </table>

            <h2>products Table with nested data</h2>

               <ol>
                {
                     menu.map(item =>
                     
                      <li> {item.Category}
                      
                       <ul>
                            {
                                
                                   item.products.map(pr =>
                                          <li> {pr}</li>
                                   )

                            }

                       </ul>
                      
                      
                      
                      
                      
                      
                      </li>
                          
                         
                     
                     
                     
                     )
                    
                    }


               </ol>

            
    </div>
);
}