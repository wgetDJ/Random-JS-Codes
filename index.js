// Learning Promises

// V1

// const promiseTest = () => {
//     fetch("https://api2.binance.com/api/v3/ticker/24hr")

//     apiData.then(gotData)
//     apiData.catch(gotError)

//     function gotData (data) {
//         console.log(data)
//     }

//     function gotError(error) {
//         console.log(error)
//     }
// }
// promiseTest()




// V2

// const promiseTest = () => {
//     fetch("https://api2.binance.com/api/v3/ticker/24hr").then(gotData).catch(gotError)

//     function gotData (data) {
//         console.log(data)
//     }

//     function gotError(error) {
//         console.log(error)
//     }
// }
// promiseTest()



// V3

// const promiseTest = () => {
//     fetch("https://api2.binance.com/api/v3/ticker/24hr")
//     .then(responce => responce.json())
//     .then(json => console.log(json[1]))
//     .catch(error => console.log(error))
// }
// promiseTest()



// async/await

async function asyncAwait () {
    let responce = await fetch("https://api2.binance.com/api/v3/ticker/24hr")
    let json = await responce.json()
    // console.log(json)
    // this kind of functions return an object
    return {
        json: json
    }
}

asyncAwait()
.then(json => console.log(json.json[0]))
.catch(err => console.error(err))