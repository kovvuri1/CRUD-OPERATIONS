import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
let  Eduser=()=>{
    let navigate=useNavigate()
    let [state,setstate]=useState({id:"",title:"",price:"",description:"",category:"",image:""})
    let change=(e)=>{
        setstate({...state,[e.target.name]:e.target.value})
    }
    let {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/users/`+id).then(res=>setstate(res.data))
    },[])
    function update(){
        axios.put("http://localhost:3000/users/"+id,state).then(()=>navigate("/"))
    }
    let back=()=>{
        navigate("/")
    }
    return(
        <>
         <button onClick={back} style={{margin:"10px"}}className="btn">Back</button>
        <h1>edit your profile</h1>
        <form>
            <table>
                <tr>
                    <td>id</td>
                    <td><input type="text" value={state.id} name="id" onChange={change}/></td>
                </tr>
                <tr>
                    <td>title</td>
                    <td><input type="text" value={state.title} name="title" onChange={change}/></td>
                </tr>
                <tr>
                    <td>price</td>
                    <td><input type="text" value={state.price} name="price" onChange={change}/></td>
                </tr>
                <tr>
                    <td>description</td>
                    <td><textarea name="description" value={state.description} onChange={change}></textarea></td>
                </tr>
                <tr>
                    <td>category</td>
                    <td><input type="text" value={state.category} name="category" onChange={change}/></td>
                </tr>
                <tr>
                    <td>image url</td>
                    <td><input type="text" value={state.image} name="image" onChange={change}/></td>
                </tr>
            </table>
        </form>
        <button onClick={update} style={{position:"absolute",bottom:"40px",left:"500px",width:"200px"}} className="main-btn">Edit</button>
        
        </>
    )
}
export default Eduser