import axios from 'axios'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

function CountriesDetails () {
    const {alpha3code} = useParams()

    const [country, setCountry] = useState({borders: []})

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setLoading(true)
      async function fetchCountry (){
        const response = await axios.get(`https://ih-countries-api.herokuapp.com/${country.name.alpha3code}`)
        setCountry(response.data)
      setLoading(false)
      }

      fetchCountry()
    }, [])

    return (
      <>

        { !loading && (
          <>
          <div className="col-7">
            <h1>{country.name}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>{country.capital}</td>
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        

                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>

                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </>
        )
         
        }
      </>
    )
}


export default CountriesDetails