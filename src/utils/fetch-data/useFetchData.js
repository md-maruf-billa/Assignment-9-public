
import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    return {allData};
}
export default useFetch;