
import { useEffect, useState } from "react";

export default function Test(){
    
    const [userName, setUserName] = useState('John');

    function handleUserName(e){
    setUserName(e.target.value);
    }
    
   return(
    <div className="container-fluid">
    <dl>
    <dt>User Name</dt>
    <dd><input type="text" value={userName} onChange={handleUserName}/></dd>
    </dl>
<h3>Hello ! {userName}</h3>
</div>
)
}