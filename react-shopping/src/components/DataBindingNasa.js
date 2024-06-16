import { useEffect, useState } from "react";

export default function DataBindingNasa() {
   
    const [mars, setMars] = useState([]);

    useEffect(()=>{
    fetch("https://nasadata.free.beeceptor.com/")
    .then(response=> response.json())
    .then(data=>{
        setMars(data.photos);
       })
    },[])
    

    return (
        <div className="container">
          <h2>  Mars Photos</h2>
            <table className="table table-hover accordion-flush">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody className="accordion-body">
                    {
                       
                       mars.map(photo=>
                          
                            
                            <tr>
                             <td>   {photo.id}</td>
                             <td>   {photo.camera.name}</td>
                             <td>   {photo.rover.name}</td>    
                             <td>   <img src={photo.img_src} width="100" height="100"></img></td>

                                
                                
                             </tr>

                          
                                 




                       )




                    }





                </tbody>



            </table>
        </div>
    )








}