import React, { useState } from "react";
import {
	Button,
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import Colors from "../config/colors";
import Card from "../components/Card";
import Input from "../components/Input";

const StartNewGame = () => {
	const [number, setNumber] = useState("");
	const handlerInput = (text) => setNumber(text.replace(/[^0-9]/g, ""));
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Text style={styles.title}>Start a New Game!</Text>
				<Card
					style={{ width: "80%", paddingVertical: 20, paddingHorizontal: 30 }}
				>
					<Text style={styles.subtitle}>Select a Number</Text>
					<Input
						autoCorrect={false}
						blurOnSubmit={false}
						maxLength={2}
						length={2}
						onChangeText={handlerInput}
						value={number}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button title='RESET' color={Colors.primary} />
						</View>
						<View style={styles.button}>
							<Button title='CONFIRM' color={Colors.secondary} />
						</View>
					</View>
				</Card>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default StartNewGame;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		alignContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 18,
		marginBottom: 5,
	},
	subtitle: {
		textAlign: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	button: {
		width: 100,
	},
});
