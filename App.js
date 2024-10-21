// import React from 'react';
// import {View,Text} from 'react-native';

// const App = () => {
//   return(
//     <View>
//     <Text style={color="black"}>Hello World</Text>
//   </View>
//   )
// }

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return(
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App;