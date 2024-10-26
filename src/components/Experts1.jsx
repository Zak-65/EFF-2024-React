import Expert from "./Expert"

export default function Experts1({expertsData}){
    return(
        <ul>
        {expertsData.map((item,index)=>{
                return(
                    <Expert expert={item} key={index}/>
                )
        })}
        </ul>
    )
}