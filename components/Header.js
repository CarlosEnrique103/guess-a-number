import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const Header = ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	container: {
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.terceary,
		paddingTop: 60,
		paddingBottom: 20,
	},
	title: {
		fontSize: 16,
		color: "#000",
	},
});
