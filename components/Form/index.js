import React from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styles from './style'

const Form = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={10}
            style={styles.addTask}
        >
            <TextInput placeholder='Your task' style={styles.input} />
            <TouchableOpacity>
                <View style={styles.iconT}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Form;