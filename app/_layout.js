// https://expo.github.io/router/docs/guides/
import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMregular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    // On attend que les font soient loaded avant d'enlever le splashScreen
    const onLayoutRootView = useCallback(async () => {
        await SplashScreen.hideAsync();
    }, [fontsLoaded]);

    if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;