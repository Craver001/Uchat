import React, { useState, useCallback } from "react";
import { Button, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function ChatScreen({ navigation }) {
  const [messageText, setMessageText] = useState("");

  const sendMessage = useCallback(() => {
    setMessageText("");
  }, []);

  return (
    <SafeAreaView
      edges={['right', 'left', 'bottom']}
      style={styles.container}
    >
      <View style={styles.messagesContainer}>
        {/* Messages will be displayed here */}
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => console.log("Pressed")}
        >
          <Feather name="image" size={28} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.textbox}
          value={messageText}
          onChangeText={setMessageText}
          placeholder="Type a message..."
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
        >
          <MaterialCommunityIcons name="send" size={28} color="orange" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  messagesContainer: {
    flex: 1,
    // Styles for messages container
  },
  inputContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    height: 50
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 5,
    paddingHorizontal: 12
  },
  sendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35
  }
});
