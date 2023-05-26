import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

///COMANDO PARA FAZER O COMMIT
/*
  1) echo "# aula01" >> README.md
  2) git init
  3) git status -u
  4) git add .
  5) git status -u
  6) git commit -m "first commit"
  7) git config user.email "alana.schafhauser@escola.pr.gov.br"
  8) git config user.name "Alana's commit"
  9) git commit -m "first commit"
  10) git staus -u
  11) git remote add origin "https://github.com/schaffa21alana/React-Native.git"
  12) git push -u origin master
  13) git log
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
