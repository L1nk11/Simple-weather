import { displayData, unitType } from "./ui.js"

const form = document.getElementById('searchbar-form')
const searchbar = document.getElementById('search-bar')

searchbar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        form.submit()
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    processSeach(searchbar.value)
    form.reset()
})

async function processSeach(searchTerm) {
    const apiKey = 'PDURQ2DKJY8KQUADG9E29T5FP'
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchTerm}?key=${apiKey}`, {mode: 'cors'})
    if (response.status !== 200) {
        // write error coded here
        console.log('error '+ response.status)

        return
    }
    const weatherData = await response.json()
    const processedData = await processData(weatherData)
    displayData(processedData)
}

function processData(weatherDataJson) {
    // console.log(weatherDataJson)
    // process the json data
    const location = weatherDataJson.resolvedAddress
    const weatherDescription = weatherDataJson.description
    const currentCondition = weatherDataJson.currentConditions.conditions
    const currentHumidity = weatherDataJson.currentConditions.humidity
    let cTemp = undefined
    let cFeel = undefined
    if (unitType === 'c') {
        cTemp = fahrenheitToCelsius(weatherDataJson.currentConditions.temp)
        cFeel  = fahrenheitToCelsius(weatherDataJson.currentConditions.feelslike)
    } else {
        cTemp = weatherDataJson.currentConditions.temp
        cFeel = weatherDataJson.currentConditions.feelslike
    }
    const currentTemperature = cTemp
    const currentFeelslike = cFeel

    const querryResult = []
    querryResult.push(location)
    querryResult.push(weatherDescription)
    querryResult.push(currentCondition)
    querryResult.push(currentTemperature)
    querryResult.push(currentFeelslike)
    querryResult.push(currentHumidity)

    return querryResult
}

function fahrenheitToCelsius(fahrenheit) {
    return parseFloat(((fahrenheit - 32) * 5 / 9).toFixed(1))
}

function changeUnit() {
    // function to change temperature unit
}

export { unitType }

processSeach('São paulo')