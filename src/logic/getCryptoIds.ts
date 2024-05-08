import { information } from "../assets/list"

export const getCryptoIds = async ()=>{
    return information.map((currency)=>currency.id)
}