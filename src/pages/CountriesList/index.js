import axios from 'axios'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

function CountriesList () {

    const [countries, setCountries] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        async function fetchCountries (){
            const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
            setCountries(response.data)
        setLoading(false)
        }

        fetchCountries()
    }, [])

    console.log(countries)

    return (
    <>
                {!loading && (
            <> 
                <div className="container">
                    <div className="row">
                        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                            <div className="list-group">
                        {countries.map(country => {
                            return (<Link key ={country._id} className="list-group-item list-group-item-action" to="/ABW">🇦🇼 {country.name.common}</Link>)})}
                            </div>
                        </div>
                    </div>
                </div>
            </>)}
    </>)

                
        

}


export default CountriesList