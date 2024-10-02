import { Pressable, StyleSheet, Text, View } from 'react-native';
import { forwardRef } from 'react';

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
        <View  style={styles.container}>
            <Pressable ref={ref} {...pressableProps} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
        </View>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0B6623',
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
   
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30
  },

  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});

export default Button;