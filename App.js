import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartNewGame from "./screens/StartNewGame";

export default function App() {
	return (
		<View style={styles.container}>
			<Header title='Guess a Number' />
			<StartNewGame />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
