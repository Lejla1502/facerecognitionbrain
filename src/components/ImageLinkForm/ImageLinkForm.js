import './ImageLinkForm.css';

const ImageLinkForm=({onInputChange, onButtonSubmit})=>{

    return(
       
        <div>
        <p className="f3">
               {'This Magic Brain will detect faces in your pictures. Give it a try :)'}

           </p>

           <div className="center">
                 {
                    /*<Trianglify variance={0.7} output={"svg"} strokeWidth={-1}
                    xColors={["#eeaeca", "#94bbe9", "#FF4676", "#04286E", "#080945"]}
                    />*/
                }
             
            <div className="form pa4 br3 shadow-5 center">
             
                    <input className="f4 pa2 w-70 center"  type="text"  onChange={onInputChange} ></input>
                    <button className=" w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>Detect</button>
                    
               </div>
               
           </div>

        </div>   
        
    )
}

export default ImageLinkForm;