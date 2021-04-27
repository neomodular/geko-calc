import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReportsAction, saveReportAction } from "../actions/reportActions";

import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../screens/Login";
import Report from "../screens/Report";
import Calculator from "../screens/Calculator";

const stackNavigatorOptions = {
  headerShown: false,
};

const AppNavigator = createStackNavigator();

const BackImg = () => {
  return (
    <Image
      style={{ width: 33, height: 33, marginLeft: 27 }}
      source={require("../images/back.png")}
    />
  );
};

const Navigation = (props) => {
  function LogoTitle() {
    return (
      <Image
        style={{ width: 148, height: 44 }}
        source={require("../images/logo.png")}
      />
    );
  }

  const dispatch = useDispatch();
  const [operation, saveOp] = useState("");

  const getReports = () => dispatch(getReportsAction());
  const newLog = useSelector((state) => state.new);

  useEffect(() => {
    getReports();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName="Home">
        <AppNavigator.Screen
          name="Home"
          component={Login}
          options={stackNavigatorOptions}
        />
        <AppNavigator.Screen
          name="Report"
          component={Report}
          options={{
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerBackTitle: " ",
            headerBackImage: (props) => <BackImg {...props} />,
            headerStyle: {
              backgroundColor: "#F4F4F4",
              height: 127,
            },
          }}
        />
        <AppNavigator.Screen
          name="Calculator"
          component={Calculator}
          options={{
            headerShown: true,
            headerTitle: (props) => <LogoTitle {...props} />,
            headerBackTitle: " ",
            headerBackImage: (props) => <BackImg {...props} />,
            headerStyle: {
              backgroundColor: "#F4F4F4",
              height: 127,
            },
          }}
        />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
