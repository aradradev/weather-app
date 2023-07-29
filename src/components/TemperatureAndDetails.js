import {
  UilTemperature,
  UilWind,
  UilTear,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons';

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy or whatever</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="weather"
          className="w-20"
        />
        <p className="text-5xl">35°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-center items-center font-light text-sm">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">32°</span>
          </div>

          <div className="flex justify-center items-center font-light text-sm">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>
          <div className="flex justify-center items-center font-light text-sm">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span>06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set: <span>07:35 PM</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          High: <span>45°</span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Low: <span>40°</span>
        </p>
      </div>
    </div>
  );
};
export default TemperatureAndDetails;
