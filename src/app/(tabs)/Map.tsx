import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';

const Map = () => {
  const [origin, setOrigin] = useState({
    latitude: -34.904740,
    longitude: -56.205107


  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.1, 
          longitudeDelta: 0.1, 
        }}
      > 
      <Marker coordinate={origin}/>
      
      
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegúrate de que el contenedor ocupe todo el espacio disponible
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
