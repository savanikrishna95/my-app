import { useEffect, useState } from "react";

const HocComponent = (OriginalComponent) => {
    const WrappedComponent = (props) => {
        const [data, setData] = useState(null);
        const [isLoading, setIsLoading] = useState(true);
        useEffect( () => {
            const fetchdataAPi = async () => {
                try{
                    let response =  await fetch('https://fakestoreapi.com/products')
                     response = await response.json();
                    setData(response);
                }
                catch(error){
                    console.error('Error fetching data:', error);
                }
                finally{
                    setIsLoading(false)
                }
            }

            fetchdataAPi();

        },[])
        return   isLoading ? <Loader/> : <OriginalComponent data={data} {...props}>{props.children}</OriginalComponent>

        
        
    }
    

    return WrappedComponent;
}

 const GetdataComponent = ({data}) => {
return(
    <>
    {data.map( (datva, i) => {
        return(<div key={i}>
            {datva.id}
        </div>)
    })}
    </>
)
}

export const GetdataComponent2 = HocComponent(GetdataComponent);



const Loader = () => {
    return(<>Loading...</>)
}


