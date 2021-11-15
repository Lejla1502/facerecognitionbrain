import './ImageLinkForm.css';
import Trianglify from "react-trianglify";

const ImageLinkForm=()=>{

    return(
       
        <div className="ma4 mt0">
           <p className="f3">
               {'This Magic Brain will detect faces in your pictures. Give it a try :)'}

           </p>

           <div className="center">
           <Trianglify variance={0.7} output={"svg"} strokeWidth={-1}
               xColors={["#eeaeca", "#94bbe9", "#FF4676", "#04286E", "#080945"]}
           />
             <div className=" pa4 br-3 shadow-5">
             {/* className=" pa4 br-3 shadow-5"
             */ }
                    <input className="w-70 center" style={{justifycontent:"center"}} type="text"></input>
                    <button className=" w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
                    
               </div>
               
           </div>

        </div>   
        
    )
}

export default ImageLinkForm;