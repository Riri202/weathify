import axios from "axios";


 const fetchData = async (city: string) => {
    if (city !== undefined){
        const response = await axios (
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a93119d28619d48fb6e748ef894f2870`
        );
         const result = await response.data.main.temp; 
        //  const res = await response.data.name;
         console.log(result)
        return result
}
}

export default fetchData