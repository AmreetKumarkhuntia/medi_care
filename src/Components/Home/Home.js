import './style/homs.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Home = () => {
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
            <TableContainer sx={{ width: 400 }}  component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>
                                <input type="text"></input>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>City</TableCell>
                            <TableCell>
                                <input type="text"></input>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>District</TableCell>
                            <TableCell>
                            <input type="text"></input>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>State</TableCell>
                            <TableCell>
                            <input type="text"></input>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pincode</TableCell>
                            <TableCell>
                            <input type="text"></input>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained">SUBMIT</Button>

                
        </div>
    </div>);
}
 
export default Home;