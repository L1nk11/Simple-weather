const body = document.querySelector('body')
let unitType = 'c'

function createSeachbar() {
    const searchContainer = document.createElement('div')
    const searchForm = document.createElement('form')
    const searchInput = document.createElement('input')
    searchForm.action = '#'
    searchForm.id = 'searchbar-form'
    searchContainer.classList.add('searchContainer')
    searchInput.type = 'text'
    searchInput.placeholder = 'São paulo'
    searchInput.id = 'search-bar'

    searchForm.appendChild(searchInput)
    searchContainer.appendChild(searchForm)
    body.appendChild(searchContainer)
}

function createInfoDisplay() {
    // base display
    const infoDisplay = document.createElement('div')
    const topDisplay = document.createElement('div')
    const bottomDisplay = document.createElement('div')
    
    // top display
    const weatherStatus = document.createElement('div')
    const dataHolder = document.createElement('div')
    const tempDisplay = document.createElement('div')
    const tempValue = document.createElement('p')
    const tempUnit = document.createElement('p')
    const weatherData = document.createElement('div')
    const weatherFeeling = document.createElement('div')
    const weatherHumidity = document.createElement('div')
    const weatherFeelingText = document.createElement('p')
    const weatherHumidityText = document.createElement('p')

    // bottom display
    const placeDisplay = document.createElement('div')
    
    // div labels
    infoDisplay.classList.add('infoDisplay')
    weatherData.classList.add('weatherData')
    topDisplay.classList.add('topDisplay')
    weatherStatus.classList.add('weatherStatus')
    tempDisplay.classList.add('tempDisplay')
    weatherFeeling.classList.add('weatherFeelingHolder')
    weatherHumidity.classList.add('weatherHumidityHolder')
    dataHolder.classList.add('weatherDataHolder')
    bottomDisplay.classList.add('bottomDisplay')
    placeDisplay.classList.add('placeDisplay')

    tempValue.id = 'temp-display'
    tempUnit.id = 'temp-unit'
    weatherFeelingText.id = 'weather-feeling-text-value'
    weatherHumidityText.id = 'weather-humidity-text-value'

    // append all
    weatherFeeling.appendChild(weatherFeelingText)
    weatherHumidity.appendChild(weatherHumidityText)
    tempDisplay.appendChild(tempValue)
    tempDisplay.appendChild(tempUnit)
    weatherData.appendChild(weatherFeeling)
    weatherData.appendChild(weatherHumidity)
    dataHolder.appendChild(tempDisplay)
    dataHolder.appendChild(weatherData)

    topDisplay.appendChild(weatherStatus)
    topDisplay.appendChild(dataHolder)
    bottomDisplay.appendChild(placeDisplay)
    infoDisplay.appendChild(topDisplay)
    infoDisplay.appendChild(bottomDisplay)
    body.appendChild(infoDisplay)
}

// location, weather description, cur condition, 
// cur temperature, cur feelslike, cur humidity
function displayData(dataList) {
    // console.log(dataList)
    const humidityDisplayText = document.getElementById('weather-humidity-text-value')
    const feelingDisplayText = document.getElementById('weather-feeling-text-value')
    const tempDisplay = document.getElementById('temp-display')
    const tempUnit = document.getElementById('temp-unit')
    const placeDisplay = document.querySelector('.placeDisplay')
    const statusDisplay = document.querySelector('.weatherStatus')

    statusDisplay.textContent = `${dataList[2]}. ${dataList[1]}`
    feelingDisplayText.textContent = `feelslike: ${dataList[4]}°${unitType}`
    humidityDisplayText.textContent = `current humidity: ${dataList[5]}%`
    tempDisplay.textContent = `${dataList[3]}`
    tempUnit.textContent = `°${unitType}`
    placeDisplay.textContent = dataList[0]
}

export { displayData, unitType }

createSeachbar()
createInfoDisplay()