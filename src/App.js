import React, { Component } from 'react'
import './App.css';
import WheatherForm from './components/WheatherForm';
import ShowDataWheather from './components/ShowDataWheather';
 class App extends Component {
   state = {
     temperature: "",
     humidity: "",
     city: "",
     country: "",
     description: "",
     error: "",
   };
   getWheather = async (e) => {
     e.preventDefault();
     // console.log("ff");
     const city = e.target.elements.city.value;
     const country = e.target.elements.country.value;
          console.log(city);
     console.log(country);

     const api_key = "6be7b43d1c424ee43ec51a8ab34ebdd2";
     const api = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`
     );
     console.log(api);
     const data =await api.json();
     console.log(data);
     if(city==="cairo"&&country==="egypt"){
      this.setState({
        temperature:data.main.temp ,
        humidity:data.main.humidity ,
        city:data.name,
        country:data.sys.country ,
        description:data.weather[3] ,
        error:"" ,
      });
     }
     else{
      this.setState({
        temperature: "",
        humidity: "",
        city: "",
        country: "",
        description: "",
        error: "the country and city not found",
      });
     }
   };
   render() {
     return (
       <div className='wrapper'>
      <div className='form-container'>

         <WheatherForm getWheather={this.getWheather} />
         <ShowDataWheather
           temperature={this.state.temperature}
           humidity={this.state.humidity}
           city={this.state.city}
           country={this.state.country}
           description={this.state.description}
           error={this.state.error}/>
         </div>
       </div>
     );
   }
 }

export default App

// اضع الرابط لل api داخل الشرط


// if(city && country){
//       const api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
//       const data =await api.json()
//       this.setState({
//         tempreatur:data.main.temp,
//         city: data.name,
//         country:data.sys.country,
//         humidity:data.main.humidity,
//         description:data.weather[0].description,
//         error:'',
//       })
//     }else{
//       this.setState({
//         tempreatur:'',
//         city:'',
//         country:'',
//         humidity:'',
//         description:'',
//         error:'Please Enter Data City And Country',
//       })
//     }

