import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

function CategoryGridTile({ title, color }) { //required props
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }} //for android
        style={({ pressed }) => [ //for ios
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, //for android
    backgroundColor: 'white', //for ios
    shadowColor: 'black', //ios
    shadowOpacity: 0.25,  //ios
    shadowOffset: { width: 0, height: 2 }, //ios
    shadowRadius: 8, //ios 
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', //both
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5, //for ios ripple effect
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
