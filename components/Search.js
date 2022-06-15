import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import WeatherUI from "./WeatherUI";

function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({
    timezone: "City",
    country: "Country",
    temperature: "0",
    main: "main weather",
    description: "description",
    humidity: "0",
    feelsLike: "0",
    latitude: "0",
    longitude: "0",
  });

  const request = async function (city) {
    const APIKEY = "e4e8a38e9749c6c32501f0c3ed976e93";
    try {
      const weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
      );
      const data = weather.json();

      const weatherData = await data;

      console.log(weatherData);

      setData({
        timezone: weatherData.name,
        country: weatherData.sys.country,
        temperature: weatherData.main.temp.toFixed(0),
        main: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
        humidity: weatherData.main.humidity,
        feelsLike: weatherData.main.feels_like.toFixed(0),
        latitude: weatherData.coord.lat,
        longitude: weatherData.coord.lon,
      });
    } catch (error) {
      alert(error);
    }
  };

  const inputHandler = (texts) => {
    setSearch(texts);
  };

  const pressHandler = () => {
    request(search);
    setSearch("");
  };

  return (
    <View style={styles.img}>
      <View style={styles.Input}>
        <TextInput
          style={styles.textInput}
          placeholder="Search by city"
          placeholderTextColor={"#fff"}
          onChangeText={inputHandler}
          value={search}
        />
        <Button title="Search" onPress={pressHandler} />
      </View>
      <View style={styles.weatherCon}>
        <WeatherUI datas={data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 9,
    width: "70%",
    backgroundColor: "#101039",
    color: "#fff",
  },
  weatherCon: {
    borderColor: "#bdc3c7",
    backgroundColor: "#ffffff00",
    borderWidth: 2,
    borderRadius: 15,
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 80,
  },
});

export default Search;
