
import { useEffect, useState } from "react"

const useFetch = () => {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/md-maruf-billa/My-all-API/main/mm-sites-api.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    return {allData};
}
export default useFetch;