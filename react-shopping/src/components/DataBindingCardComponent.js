import { useEffect, useState } from "react";

export default function DataBindingCardComponent() {

    const url = "https://nasadata.free.beeceptor.com/";

    const [marsphotos, setmarsphotos] = useState([]);


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {

                setmarsphotos(data.photos);
            })
    }, [])



  return(

      <div className="container">
            

            

      </div>




  )








}

