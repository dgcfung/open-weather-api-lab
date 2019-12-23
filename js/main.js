const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

const api_key = '&units=imperial&appid=e035818f654f2bd9508a6d45c0efc40b';

// let getInput= document.querySelector("#city").value
let newSubmit= document.querySelector('#getTemp')
newSubmit.addEventListener('click', getInfo);

// let submission= []

// let input= city.value

// console.log?(input)

function getInfo(event){
    event.preventDefault()
    // let newCity= null
    let getInput= document.querySelector("#city").value
    // newCity= getInput.innerHTML
    // console.log(newCity)
    // console.log(getInput)
    // console.log('Hello')
    // console.log(input)
  // city.innerHTML= getInput.value
  cityName.append(": "+ getInput)

  let url= (`http://api.openweathermap.org/data/2.5/weather?q=${getInput}&units=imperial&appid=e035818f654f2bd9508a6d45c0efc40b`)

  let dataCurrent= axios.get(url).then(res=>{
        // console.log(res.data.main.temp)
        console.log(res.data.main.temp)
      let currentTemp= document.querySelector('#temp')
      // console.log(currentTemp)
    // currentTemp.innerHTML= res.data.main.temp
    currentTemp.append(": "+ res.data.main.temp)
    let wDescrip= document.querySelector('#description')
    wDescrip.append(": " + res.data.weather[0]["description"])
    let minTemp= document.querySelector('#min')
    minTemp.append(": "+ res.data.main.temp_min)
    let maxTemp= document.querySelector('#max')
    maxTemp.append(": "+ res.data.main.temp_max)
      })

  // let dataDescription = axios.get(url).then(res=>{
  //   let wDescrip= document.querySelector('#description')
  //   wDescrip.append(": " +res.data.weather.main)
  // })
 
  
    //     console.log(res)
    //   })

  // let cityName= document.querySelector('#temp')
  
  // cityName.append(getInput)


    // return getInput
    // getWeather(getInput)
    // alert(getInput)
    // return getInput
}


// console.log(getInput)

// let cityWeather= document.querySelector('#city')
// let addTemp= document.querySelector('#temp')

// const getWeather = () =>{
  // let url= await axios.get('http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=e035818f654f2bd9508a6d45c0efc40b')
//   let data= axios.get(url).then(res=>{
//     console.log(res)
//   })

// }
// getWeather()

// let inputValue=document.querySelector('#city').value
// let newSubmit= document.querySelector('.getTemp')
// newSubmit.addEventListener('submit', getWeather)




// async function getWeather() {

//   // console.log(inputValue)

//     // read recipe
//     let url = await axios.get(
//       `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=e035818f654f2bd9508a6d45c0efc40b`);
//       let data= axios.get(url).then(main=>{
//       console.log(main.data);
//     })

//     let cityName= document.querySelector('#temp')

    // cityWeather.innerHTML= cityName


    // let city= document.querySelector('.city')
    // // city.innerHTML= data.sys.results.name
    // // append
    // // city.append(city)
   
    // let currentTemp= document.querySelector('#current-t')
    // currentTemp.innerHTML= data.main.temp
    // console.log(currentTemp)

    // let descrip = document.querySelector('#description')
    // // descrip.innerHTML= 

    // let minTemp = document.querySelector('#min')
    // // minTemp.innerHTML=

    // let maxTemp = document.querySelector('#max')



    // document.getElementById('recipe-title').innerHTML = response.data.results[0].title
  
    // document.getElementById('recipe-url').href = response.data.results[0].url
   
  
    // return  weather
  
    // document.getElementById('recipe-title').innerHTML = ???
    // document.getElementById('recipe-url').href = ???
  
    // showIngredients( ??? );
  // }
//  getWeather('90210')