import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'


export function NetflixRegister(){



    return(
   
   <div className="container-fluid text-center mt-3 bg-dark p-3 text-white w-75">
   
    <p> Ready to watch? Enter your email to create or restart your membership.</p>

    <div className="input-group input-group-lg">
        <input type = "email" className="form-control"/>
        <button className="btn btn-danger">
             Get Started
             <span className="bi bi-chevron-right"></span>
             </button> 
        </div>  

   </div>






    );


}