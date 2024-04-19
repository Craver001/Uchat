import React from "react";
import { Button,View,StyleSheet, TextInput } from "react-native";


const BottomLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messagesContainer}>
        {/* Messages Go Here */}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
        />
        <Button
          title="Send"
          onPress={() => {
            // Logic to send message
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  messagesContainer: {
    flex: 1,
    // Styles for messages container
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    marginRight: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});

export default function ChatActivityPage({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BottomLayout/>
      </View>
    );
  }
