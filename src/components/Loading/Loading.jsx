import { DotWave } from "@uiball/loaders";
import "../Loading/loading.css"

const Loading = ()=>{
    return (
        <div className="loading">
             <DotWave size={90} speed={1} color="black"/>
            
        </div>
        )
}

export default Loading;