import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	Alert,
} from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './style';

export default function Home() {
	const participants = [
		'Thiago',
		'Maria',
		'João',
		'Carlos',
		'Abner',
		'Juliana',
		'Beto',
		'Edvaldo',
		'Arnaldo',
		'Beatriz',
	];

	function handleParticipantAdd() {
		if (participants.includes('Thiago')) {
			Alert.alert(
				'Participante existe',
				'Já existe um participante com esse nome.'
			);
		}

		console.log('Você clicou em adicionar');
	}

	function handleParticipantRemove(name: string) {
		Alert.alert(
			'Remover participante',
			`Deseja remover o participante ${name}?`,
			[
				{
					text: 'Sim',
					onPress: () => Alert.alert('Deletado!'),
				},
				{
					text: 'Não',
					style: 'cancel',
				},
			]
		);

		console.log(`Você clicou em remover ${name}`);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do evento</Text>
			<Text style={styles.eventDate}>Sexta-feira, 4 de novembro de 1994</Text>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor={'#A5A692'}
				/>

				<TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				data={participants}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Participant
						key={item}
						name={item}
						onRemove={() => handleParticipantRemove(item)}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text style={styles.emptyList}>Sua lista está vazia</Text>
				)}
			/>
		</View>
	);
}
