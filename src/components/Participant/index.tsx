import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface ParticipantProps {
	name: string;
	onRemove: () => void;
}

export function Participant({ name, onRemove }: ParticipantProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.textName}>{name}</Text>
			<TouchableOpacity style={styles.button} onPress={onRemove}>
				<Text style={styles.buttonText}>-</Text>
			</TouchableOpacity>
		</View>
	);
}
