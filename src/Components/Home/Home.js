import './style/homs.css';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

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
            </div>
            
        </div>
        <div className='data_container'>
            <TextField id="outlined-basic" label="City Name" variant="outlined" />
            <TextField id="outlined-basic" label="Country Name" variant="outlined" />
            <TextField id="outlined-basic" label="Pincode" variant="outlined" />
            <Button variant="contained">Hello World</Button>
        </div>
    </div>);
}
 
export default Home;