import Tilty from 'react-tilty';
import './Logo.css';
import brain from './brain.png';

const Logo=()=>{

    return(
       
        <div className="ma4 mt0">
            <Tilty className="tilty br2 shadow-2" glare scale={1.08} maxGlare={0.5}>
                <div className="inner ">
                    <img style={{paddingTop:'5x'}} src={brain} alt="brain" />
                    </div>
            </Tilty>
        </div>   
        
    )
}

export default Logo;