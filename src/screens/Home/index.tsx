import { useState } from 'react';
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
	const [participants, setParticipants] = useState<string[]>([]);
	const [participantName, setParticipantName] = useState('');

	function handleParticipantAdd() {
		if (participants.includes(participantName)) {
			return Alert.alert(
				'Participante existe',
				'Já existe um participante com esse nome.'
			);
		}

		if (participantName !== '') {
			setParticipants((prevState) => [...prevState, participantName]);
			setParticipantName('');
		} else {
			Alert.alert(
				'Nome do participante vazio',
				'Impossível adicionar o participante sem um nome.'
			);
		}
	}

	function handleParticipantRemove(name: string) {
		Alert.alert(
			'Remover participante',
			`Deseja remover o participante ${name}?`,
			[
				{
					text: 'Sim',
					onPress: () => {
						setParticipants((prevState) =>
							prevState.filter((participant) => participant !== name)
						);
					},
				},
				{
					text: 'Não',
					style: 'cancel',
				},
			]
		);
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
					onChangeText={setParticipantName}
					value={participantName}
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
