import axios from "axios"
export const getAPI=async()=>{
    try{
        const data=await axios.get("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20")
        return data.data.results;
    }
    catch(error)
    {
        console.log(error)
    }
}