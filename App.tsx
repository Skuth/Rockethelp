import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"

import { Routes } from './src/routes';

import { Loading } from './src/components/Loading';

import { theme } from './src/styles/theme';

export default function App() {
  const [isFontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })


  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {isFontLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  )
}
