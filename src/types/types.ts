export interface Temp {
    temp: number | undefined;
    feels_like: number | undefined;
    humidity: number | undefined;
    temp_max: number | undefined;
    temp_min: number | undefined;
  }
  
  export interface Weather {
    id: number | undefined;
    main: string | undefined;
    description: string | undefined;
    icon: string | undefined;
  }
  
  export const tempDefault = {
    temp: undefined,
    feels_like: undefined,
    humidity: undefined,
    temp_max: undefined,
    temp_min: undefined,
  };
  
  export const weatherDefault = {
    id: undefined,
    main: undefined,
    description: undefined,
    icon: undefined,
  };
  
  export interface InputProps {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    addFavs?: () => void
    city: string
  }
  export interface LargestCitiesProps {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    tempData: Temp;
    setTemp: React.Dispatch<React.SetStateAction<number>>;
    temp: number;
    cityName: string




  }
  export interface HomeProps {
    setCity: React.Dispatch<React.SetStateAction<string>>;
    addFavs?: () => void
    city: string
    tempData: Temp;
    setTemp: React.Dispatch<React.SetStateAction<number>>;
    temp: number;
    cityName: string



  }
  export interface WeatherDetailsProps {
    tempData: Temp;
    weatherData: Weather;
    city: string
    cityName: string


   

  }
  