import { useEffect, useState } from "react";


export default function NASAComponent(){

const[mars, setmars] = useState({photos:[]});

useEffect(()=>{
  debugger
   fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response =>response.json())
    .then(data => {
        setmars(data);
    })

},[])


return(

    <div className="container">

     <h2>mars photos</h2>
     <table className="table table-hover">
                <thead>
                  <tr>
                    <th>photo id</th>
                    <th>camera name</th>
                    <th>rover name</th>
                    <th>Picture</th>
                  </tr>
                </thead>
                <tbody>{
                    mars.photos.map(data=>
                    
                    <tr>

                        <td>
                           {data.id}

                        </td>
                        <td>
                           {data.camera.name}

                        </td>
                        <td>
                           {data.rover.name}

                        </td>
                        <td>
                           <img scr={data.img_src} width="100" height="100"/>

                        </td>





                    </tr>
                    
                    
                    
                    
                    )
                }
                </tbody>  
            </table>
        



    </div>









)









}