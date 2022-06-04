import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";

const { width: windowWidth } = Dimensions.get("window");

const API_KEY = "b2753da884a51d56a5b4c1d37bad51f6"; //free-api

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Rain: "rains",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Drizzle: "rain",
  Thunderstorm: "lightning",
};

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });

    const location = await Location.reverseGeocodeAsync(
      {
        latitude,
        longitude,
      },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await res.json();
    setDays(json.daily);
  };
  useEffect(() => {
    ask();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.weather}
      >
        {days.length === 0 ? (
          <View style={{ ...styles.day, alignItems: "center" }}>
            <ActivityIndicator
              color="black"
              size="large"
              style={{ marginTop: 10 }}
            />
          </View>
        ) : (
          days.map((day, i) => (
            <View key={i} style={styles.day}>
              <View
                style={{
                  // flexDirection: "colum",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Fontisto
                  name={icons[day.weather[0].main]}
                  size={70}
                  color="black"
                />
                <Text style={styles.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}
                </Text>
              </View>

              <Text style={styles.des}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  day: {
    width: windowWidth,
    alignItems: "center",
  },
  temp: {
    marginTop: 30,
    fontSize: 120,
  },
  des: {
    marginTop: -15,
    fontSize: 60,
  },
  tinyText: {
    fontSize: 20,
  },
});
