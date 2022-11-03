import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
  },
});

export const header = StyleSheet.create({
  container: {
    padding: 20,
    color: '#fff',
    backgroundColor: '#6d289b',
  },
  title: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
})

export const error = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    fontSize: 20,
    padding: 10,
    color: '#ff',
  }
})
