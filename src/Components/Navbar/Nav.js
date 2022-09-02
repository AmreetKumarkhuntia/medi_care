import { useState } from 'react';
// import { Link } from 'react-router-dom';
import './Style/nav.css';

const Header = () => {
    const hamburger='https://res.cloudinary.com/dke9xzbl6/image/upload/v1642206049/portfolio-content/Hamburger_icon_uq3wb6.png';

    const style1={
        display: "block"
    }

    const style2={
        display: "none"
    }

    const [linkdisplay,setLinkdisplay]=useState(style2);
    var [linkstate,setLinkstate]=useState(false);

    function hamburger_toggle(){
        if(!linkstate){
            setLinkstate(true);
            setLinkdisplay(style1);
            console.log(linkstate);
        }
        else{
            setLinkstate(false);
            setLinkdisplay(style2);
            console.log(linkstate);
        }
    }

    return ( 
        <>
        <header>
                {/* <img  className='logo_img' src={logo} alt="loading_image"></img> */}
                <div className='logo'>
                  Medi_Care
                </div>
                <button className='hamburger' onClick={()=> {
                    hamburger_toggle();
                }}><img src={hamburger} alt='error'></img></button>
                <div className='links'>
                    <ul>
                        <li><a href='https://google.com/search'>SWAGAT</a></li>
                        <li><a href='https://google.com/search'>AMREET</a></li>
                        <li><a href='https://google.com/search'>GITHUB</a></li>
                        <li><a href='https://google.com/search'>HOME</a></li>
                    </ul>
                </div>
                <div style={linkdisplay} className='links'>
                    <ul>
                        <li><a href='https://google.com/search'>SWAGAT</a></li>
                        <li><a href='https://google.com/search'>AMREET</a></li>
                        <li><a href='https://google.com/search'>GITHUB</a></li>
                        <li><a href='https://google.com/search'>HOME</a></li>
                    </ul>
                </div>
            </header> 
        </>
     );
}
 
export default Header;