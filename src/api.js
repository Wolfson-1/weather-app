/* eslint-disable import/prefer-default-export */
export const getApiData = async () => {
   try{
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=2231c78911074d8182d152508232503&q=London&days=7&aqi=yes&alerts=no',{mode: 'cors'}
   );

   const data = await response.json();
   console.log(data);
} catch(error) {
    console.log(error);
}};