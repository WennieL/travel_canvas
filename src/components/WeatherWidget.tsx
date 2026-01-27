import React, { useState } from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';

const WeatherWidget: React.FC = () => {
    const weathers = [{ icon: <Sun size={16} className="text-orange-400" />, text: '24°' }, { icon: <Cloud size={16} className="text-gray-400" />, text: '20°' }, { icon: <CloudRain size={16} className="text-blue-400" />, text: '19°' }];
    const [weather, setWeather] = useState(weathers[0]);
    const toggleWeather = () => setWeather(weathers[(weathers.indexOf(weather) + 1) % weathers.length]);
    return (<div onClick={toggleWeather} className="flex items-center gap-1.5 bg-white border border-gray-100 px-2 py-1 rounded-full cursor-pointer hover:border-teal-200 transition-colors shadow-sm select-none"> {weather.icon} <span className="text-xs font-bold text-gray-600">{weather.text}</span> </div>);
};

export default WeatherWidget;
