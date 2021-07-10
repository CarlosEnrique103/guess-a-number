import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = (props) => {
	return (
		<View style={styles.container}>
			<TextInput {...props} style={styles.input} />
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginVertical: 10,
	},
	input: {
		width: "20%",
		height: 40,
		textAlign: "center",
		borderColor: "#000",
		borderBottomWidth: 1,
	},
});
