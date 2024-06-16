


export default function DataBindingComponent() {

  var products = [
    { Name: 'TV', Price: 240 },
    { Name: 'Washing', Price: 340 }
  ]


  var menu = [

    { category: "Electoronics", Products: ['samsung tv', ' mobile'] },
    { category: "Cloths", Products: ['Trends', 'Gap'] },


  ]

  return (
    <div className="container">

      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              product Name
            </th>
            <th>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product =>
              <tr>
                <td>{product.Name}</td>
                <td>{product.Price}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      <ol>
        {
          menu.map(item =>
            <li key={item.category} > {item.category}
              <ul>
                {
                  item.Products.map(pro =>
                    <li key={pro}>{pro}</li>
                  )
                }
              </ul>
            </li>
          )
        }
      </ol>

      <h2> Select Product</h2>

      <select className="accordion-header">

        {

          menu.map(items =>

            <optgroup key={items.category} label={items.category}>

              {

                items.Products.map(pr =>
                  <option value={pr}> {pr}</option>


                )

              }


            </optgroup>



          )



        }


      </select>






    </div>




  )






}