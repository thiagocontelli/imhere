import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#011F26',
		flex: 1,
		padding: 20,
		paddingTop: 80,
	},
	eventName: {
		fontSize: 24,
		color: 'white',
	},
	eventDate: {
		fontSize: 20,
		color: 'white',
	},
	form: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 36,
		marginBottom: 42,
	},
	input: {
		backgroundColor: '#025E73',
		height: 50,
		borderRadius: 5,
		color: 'red',
		padding: 16,
		fontSize: 16,
		flex: 1,
		marginRight: 12,
	},
	button: {
		backgroundColor: '#03A64A',
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	buttonText: {
		color: 'white',
		fontSize: 30,
	},
	emptyList: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
	},
});
