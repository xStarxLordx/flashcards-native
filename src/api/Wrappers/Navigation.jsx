import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import { ROUTES } from "../constants/navigation.constant";

const Stack = createStackNavigator();

function Navigation(params) {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen component={} mane = {ROUTES.sigUp}></Stack.Screen>
        </Stack.Navigator>

    </NavigationContainer>
}

export default Navigation