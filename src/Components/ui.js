const body = document.querySelector('body')

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
    const weatherFeelingData = document.createElement('p')
    const weatherHumidityText = document.createElement('p')
    const weatherHumidityData = document.createElement('p')

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
    weatherFeelingData.id = 'weather-feeling-data-value'
    weatherHumidityText.id = 'weather-humidity-text-value'
    weatherHumidityData.id = 'weather-humidity-data-value'

    // append all
    weatherFeeling.appendChild(weatherFeelingText)
    weatherFeeling.appendChild(weatherFeelingData)
    weatherHumidity.appendChild(weatherHumidityText)
    weatherHumidity.appendChild(weatherHumidityData)
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

function displayData(dataList) {
    // dataList = weatherStatus, temperature, feeling, humidity
    
    console.log('worked')
}

export { displayData }

createSeachbar()
createInfoDisplay()