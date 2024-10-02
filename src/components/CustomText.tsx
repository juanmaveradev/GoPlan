// CustomText.tsx
import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { useFonts } from 'expo-font';


interface CustomTextProps extends TextProps {
  children: React.ReactNode; // Asegúrate de que sea React.ReactNode
  style?: object; // Estilo opcional
}

const CustomText: React.FC<CustomTextProps> = ({ children, style, ...props }) => {
  const [fontsLoaded] = useFonts({
    'RobotoSlim': require('../../assets/fonts/RobotoSlab-VariableFont_wght.ttf'), // Reemplaza con tu fuente
  });


  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'RobotoSlim', // Asegúrate de usar el nombre correcto de la fuente
  },
});

export default CustomText;
