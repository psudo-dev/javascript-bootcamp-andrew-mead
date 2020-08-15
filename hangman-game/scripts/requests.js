const getPuzzle4 = (wordCount) =>
    fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error("Unable to fetch new data")
        }
    }).then((data) => {
        return data.puzzle
    })


const getPuzzle2 = (wordCount = 2) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    console.log(request);
    request.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            console.log(e.target);
            const data = JSON.parse(e.target.responseText)
            console.log(data);
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject("an error was detected")
        }
    })
    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})

const getPuzzle3 = (wordCount, callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback("error message", undefined)
        }
    })
    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

const getCountry3 = (countryCode) =>
    fetch("http://restcountries.eu/rest/v2/all", {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error("The data was not fetched")
        }
    }).then((data) => {
        const country = data.find(country => country.alpha2Code === countryCode)
        return country
    })


const getCountry2 = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()
    countryRequest.addEventListener("readystatechange", e => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find(country => country.alpha2Code === countryCode)
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject("unable to fetch the data")
        }
    })
    countryRequest.open("GET", "http://restcountries.eu/rest/v2/all")
    countryRequest.send()
})

// For Real
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error("Unable to get Puzzle")
    }
}
const getLocation = async () => {
    const response = await fetch("//ipinfo.io/json?token=d7781331c3ecd4")
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error("Unable to get current location")
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return {
        country: location.country,
        region: location.region,
        city: location.city
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch("//restcountries.eu/rest/v2/all", {})
    if (response.status === 200) {
        const data = await response.json()
        country = data.find(country => country.alpha2Code === countryCode)
        return country
    } else {
        throw new Error("The data was not fetched")
    }
}