import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
let GetUsers = () => {
    let [state,setstate]=useState([]);
    let [tstate,tsetstate]=useState([]);
    let navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:3000/users`).then(res=>{
            setstate(res.data);
            tsetstate(Object.keys(res.data[2]))
        }).catch(()=>console.log("api is not working properly")
        );
    },[state])
    console.log(state);

    function deletes(id){
        axios.delete("http://localhost:3000/users/"+id).then(()=>{
            navigate("/")
        })
    }                                                                                                                                                              
  return (
    <div>
        <h1>GetUsers</h1>
        <button onClick={()=>navigate("/add")} className="main-btn"style={{
            position:"relative",
            left:"30px",
            top:"-25px",
            height:"40px"
        }}>Add New Product</button>
        
        <table border={1}>
            <caption><strong>Add products details</strong></caption>
            
            <thead>
                <tr>
                    {tstate.slice(0,6).map((x,y)=><th key={y}>{x}</th>)}
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {state.map((x,y)=>{
                    return(
                        <>
                        <tr key={y}>
                            <td>{x.id}</td>
                            <td>{x.title}</td>
                            <td>{x.price}</td>
                            <td>{x.description}</td>
                            <td>{x.category}</td>
                            <td>{x.image}</td>
                            <td><button className='btn' onClick={()=>{deletes(x.id)}}>Del</button><Link to={`/edus/${x.id}`}><button className='btn'>Edit</button></Link>
                            </td>
                        </tr>
                        </>
                    )
                })}
            </tbody>
        </table>
    </div>
  );
}
export default GetUsers;