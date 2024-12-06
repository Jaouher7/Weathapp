import React from "react";
import { WeatherSvg } from "weather-icons-animated";
import {
 
  Sunset,
  Gauge,
  Eye,
  UsersRound,
  CalendarDays,
 
} from "lucide-react";

// Map weather states to appropriate names for each icon
export const commandIcon = <WeatherSvg state="clear-night" width={20} height={20} />;
export const searchIcon = <WeatherSvg state="sunny" width={30} height={30} />;
export const drizzleIcon = <WeatherSvg state="partlycloudy" width={30} height={30} />;
export const rain = <WeatherSvg state="rainy" width={30} height={30} />;
export const snow = <WeatherSvg state="snowy" width={30} height={30} />;
export const clearSky = <WeatherSvg state="sunny" width={30} height={30} />;
export const cloudy = <WeatherSvg state="cloudy" width={30} height={30} />;
export const navigation = <WeatherSvg state="windy" width={30} height={30} />;
export const thermo = <WeatherSvg state="sunny" width={30} height={30} />;
export const sunset = <Sunset size={30} />;
export const wind = <WeatherSvg state="windy" width={35} height={35} />;
export const gauge = <Gauge size={30} />;
export const droplets = <WeatherSvg state="rainy" width={30} height={30} />;
export const thermometer = <WeatherSvg state="sunny" width={30} height={30} />;
export const eye = <Eye size={30} />;
export const people = <UsersRound size={30} />;
export const calender = <CalendarDays size={30} />;
export const sun = <WeatherSvg state="sunny" width={30} height={30} />;

function App() {
  return (
    <div>
      <h2>Weather States</h2>

      <div>
        <h3>Sunny</h3>
        <WeatherSvg state="sunny" width={64} height={64} />
      </div>

      <div>
        <h3>Clear Night</h3>
        <WeatherSvg state="clear-night" width={64} height={64} />
      </div>

      <div>
        <h3>Partly Cloudy</h3>
        <WeatherSvg state="partlycloudy" width={64} height={64} />
      </div>

      <div>
        <h3>Cloudy</h3>
        <WeatherSvg state="cloudy" width={64} height={64} />
      </div>

      <div>
        <h3>Fog</h3>
        <WeatherSvg state="fog" width={64} height={64} />
      </div>

      <div>
        <h3>Rainy</h3>
        <WeatherSvg state="rainy" width={64} height={64} />
      </div>

      <div>
        <h3>Snowy</h3>
        <WeatherSvg state="snowy" width={64} height={64} />
      </div>

      <div>
        <h3>Windy</h3>
        <WeatherSvg state="windy" width={64} height={64} />
      </div>
    </div>
  );
}

export default App;
