
import { Quotes } from "deco-sites/campleite/loaders/zequotes.ts"; 
export interface Props{
    quotes?: Quotes
    title?: string
}

export default function zequotes(props:Props){
    return(
        <div>
         <h3>{props.title}</h3>
         {props.quotes && ( props.quotes?.data[0]) }
        </div>
    )
}