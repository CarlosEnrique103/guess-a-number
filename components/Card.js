import React from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children, style }) => {
	return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		shadowColor: "#ccc",
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		elevation: 6,
	},
});
