import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: '#026873',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		marginBottom: 10,
	},
	textName: {
		color: 'white',
		fontSize: 20,
		flex: 1,
		padding: 10,
	},
	button: {
		backgroundColor: '#D92525',
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	buttonText: {
		color: 'white',
		fontSize: 36,
	},
});
