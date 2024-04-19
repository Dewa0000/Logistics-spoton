import { useEffect,useState } from "react";

const useFetch = (url) => {

    const abortCont = new AbortController();

    const [value, setValue] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);
     
    useEffect(() => {
        fetch(url, {signal: abortCont.signal})
            .then((res) => {
                if(!res.ok){
                    throw Error ("Could not fetch data");
                }
                return res.json();
            }).then((data) => {
                setValue(data);
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === "AbortError"){
                    console.log("Fetch Aborted")
                }else{
                    setError(err.message)
                    setLoading(false);
                }
                
            })
            return () => abortCont.abort();
    }, [url])
    return {value,loading,error};
}

export default useFetch;