import { View, Text, StyleSheet } from "react-native";

function WeatherUI(props) {
  return (
    <View>
      <Text style={style.description}>{props.datas.main}</Text>
      <Text style={style.mainTemp}>{props.datas.temperature}°c</Text>
      <Text style={style.description}>{props.datas.description}</Text>
      <Text style={style.description}>
        Timezone: {props.datas.timezone} / {props.datas.country}
      </Text>
      <Text style={style.feels}>
        Feels like {props.datas.feelsLike}°c • Humidity {props.datas.humidity}°c
      </Text>
      <Text style={style.feels}>
        Latitude: {props.datas.latitude}°
      </Text>
      <Text style={style.feels}>
        Longitude: {props.datas.longitude}°
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  description: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
    color: '#fff',
  },
  mainTemp: {
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 20,
    color: '#fff',
  },
  feels: {
    fontSize: 15.8,
    textAlign: "center",
    marginBottom: 30,
    color: '#fff',
  }
});

export default WeatherUI;
