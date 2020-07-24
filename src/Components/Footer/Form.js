import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from './styles';

function Form() {
  const [email, updateEmail] = useState('');
  const [message, updateMessage] = useState('');
  const [emailBorder, updateEmailBorder] = useState(0);
  const [messageBorder, updateMessageBorder] = useState(0);

  return (
    <View style={[styles.col, styles.left]}>
      <Text style={[styles.text, styles.heading]}>
        Any queries or feedbacks?
      </Text>
      <TextInput
        style={[
          styles.description,
          styles.formField,
          styles.formEmail,
          { borderWidth: emailBorder }
        ]}
        placeholder='Your email address'
        onChangeText={(text) => updateEmail(text)}
        value={email}
      />
      <TextInput
        style={[
          styles.description,
          styles.formField,
          styles.formMessage,
          { borderWidth: messageBorder }
        ]}
        multiline={true}
        placeholder='Your queries or feedbacks'
        onChangeText={(text) => updateMessage(text)}
        value={message}
      />
      <TouchableHighlight style={styles.formButton} onPress={submitForm}>
        <Text style={[styles.description, styles.text]}>Submit</Text>
      </TouchableHighlight>
    </View>
  );

  function submitForm() {
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let error = 0;

    if (!email || !emailRegex.test(email)) {
      updateEmailBorder(2);
      error = 1;
    } else {
      updateEmailBorder(0);
    }

    if (!message) {
      updateMessageBorder(2);
      error = 1;
    } else {
      updateMessageBorder(0);
    }

    if (!error) {
      updateEmail('');
      updateMessage('');
    }
  }
}

export default Form;
