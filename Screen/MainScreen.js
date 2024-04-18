import React from "react";
import { Button, View } from "react-native";

export default function MainScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to ChatActivityPage"
          onPress={() => navigation.navigate('ChatActivityPage')}
        />
      </View>
    );
  }