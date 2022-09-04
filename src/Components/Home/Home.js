import './style/homs.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import {useState} from 'react';

const Home = () => {
    const [pin,setPin] = useState(753012);
    const [city,setCity] = useState('');
    const [name,setName] = useState('');
    const [district,setDistrict] = useState('');
    const [state,setState] = useState('');

    const [hospital,setHospital] = useState([]);

    
    
    function hospitalMap(hospital){
        return (
            <div className="hospital">
                <h2>{hospital.name}</h2>
                <div>Contact No.= {hospital.contactno}</div>
                <div>City Name= {hospital.city}</div>
                <div>State= {hospital.state}</div>
                <div>District= {hospital.district}</div>
                <div>Pincode= {hospital.pincode}</div>
                <div>Country= {hospital.country}</div>
            </div>
        );
    }

    async function  fetchhospital(){
        let url="http://localhost:80/hospital"

        fetch(url+'?city='+city+'&pin='+pin+'&name='+name+'&district='+district+'&state='+state).then(
            (res)=>{
                return res.json();
            }
        ).then((res)=>{
            console.log(res.hospitals);
            setHospital(res.hospitals);
        })
    }

    return ( <div className="Home">
        <div className='heading_container'>
            <div className='left'>
                <h1>
                    Medi_Care
                </h1>
                <span className='contain'>
                    We provide a simple interface for managing your health.
                </span>
            </div>
            <div className='right'>
                {/* <img src="https://www.pngmart.com/files/21/Hospital-Vector-PNG-Transparent.png" alt="loading image" /> */}
                
            </div>
        </div>

        <div className="form_showcase"> 
            <h1>Search Hospitals</h1>
            <TableContainer sx={{ width: 350 }}  component={Paper}>
                <Table aria-label="simple table">
                <TableBody>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>
                                <input type="text" onChange={(e)=>{setName(e.target.value)}} ></input>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>City</TableCell>
                            <TableCell>
                                <input type="text" onChange={(e)=>{setCity(e.target.value)}}></input>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>District</TableCell>
                            <TableCell>
                            <input type="text" onChange={(e)=>{setDistrict(e.target.value)}}></input>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>State</TableCell>
                            <TableCell>
                            <input type="text" onchange={(e)=>{setState(e.target.value)}}></input>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pincode</TableCell>
                            <TableCell>
                            <input type="text" onChange={(e)=>{setPin(e.target.value)}}></input>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" onClick={()=>{fetchhospital()}}>SUBMIT</Button>
            

                
        </div>

        <div className="show_hospital">
            <h1>We got:</h1>
            {
                hospital.map(hospitalMap)
            }
        </div>
    </div>);
}
 
export default Home;