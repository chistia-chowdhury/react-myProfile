import { useEffect, useState } from 'react'
import "./Weather.css"
import sunnyImg from "../assets/sunny.png";
import coldImg from "../assets/cold.png";
import mildImg from "../assets/mild.png";


function Weather() {

    const [temperature, setTemperature] = useState<number | null>(null);
    const [unit, setUnit] = useState<"C" | "F">("C");
    const [condition, setCondition] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState<string>(mildImg);

    const coords = { city:'Dhaka', lat: 23.8103, lon: 90.4125 };

    const fetchWeather = async () => {
        setLoading(true);
        try {
            const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m`
            );
            const data = await response.json();
            const tempC = data.current.temperature_2m;
            setTemperature(tempC);
            setUnit("C");
            if (tempC < 10) {
                setCondition("Cold ❄️");
                setImage(coldImg);
            }
            else if (tempC <= 20){
                setCondition("Mild 🌤️");
                setImage(mildImg);
            }
            else{ 
                setCondition("Sunny ☀️");
                setImage(sunnyImg);
            }
        } catch (error) {
            console.error("Error fetching weather:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    const toggleUnit = () => {
        if (temperature === null) return;
        if (unit === "C") {
            setTemperature((temperature * 9) / 5 + 32);
            setUnit("F");
        } else {
            setTemperature(((temperature - 32) * 5) / 9);
            setUnit("C");
        }
    };

  return (
    <div className="weathbody">
      <div className="weatint">
        <h2 className="weather-title">Weather in {coords.city}, Bangladesh</h2>

        <div className="weather-section">
          <img src={image} alt={condition} className="weather-image" />
          <div className="weather-info">
            <h3>{condition}</h3>
            {temperature !== null && (
              <h3>🌡 {temperature.toFixed(1)}°{unit}</h3>
            )}
          </div>
        </div>

        <div>
          <button className="toggle-btn" onClick={toggleUnit}>
            Switch to {unit === "C" ? "°F" : "°C"}
          </button>
          <button className="refresh-btn" onClick={fetchWeather} disabled={loading}>
            {loading ? "Refreshing…" : "Refresh"}
          </button>
        </div>

        <p className="weather-note">
          {temperature !== null
            ? `Currently experiencing ${condition.toLowerCase()} weather — a great day in ${coords.city}!`
            : "Fetching weather data..."
          }
        </p>
      </div>
    </div>
  )
}

export default Weather