import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
  },
  content: {
    justifyContent: 'center'
  }
});

export const header = StyleSheet.create({
  container: {
    padding: 20,
    color: '#fff',
    backgroundColor: '#6d289b',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
})

export const error = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  message: {
    marginTop: 40,
    fontSize: 20,
    padding: 10,
    color: '#fff',
  }
})

export const scanner = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 30,
    paddingBottom: 40,
    textAlign: 'center',
    color: 'white'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  scannerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    width: 300,
    height: 300,
  },
})

export const button = StyleSheet.create({
  container: {
    backgroundColor: '#6d289b',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    width: 300,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
})
