import { Stack, Text, VStack } from '@chakra-ui/react';

import ColorText from 'components/ColorText';
import SimulationPage from 'components/pages/simulation/SimulationPage';
import DoctorCard from 'components/simulationPage/DoctorCard';
import { useEffect, useState } from 'react';

type DoctorListType = {
	name: string;
	position: string;
};

const Doctor = (): JSX.Element => {
	const [doctorList, setDoctorList] = useState<DoctorListType[]>([]);

	useEffect(() => {
		setDoctorList([
			{ name: 'Doctor A.', position: 'A 2km de chez vous' },
			{ name: 'Doctor B.', position: 'A 2km de chez vous' },
			{ name: 'Doctor C.', position: 'A 2km de chez vous' },
		]);
	}, []);

	return (
		<SimulationPage>
			<VStack>
				<Stack spacing="64px">
					<Stack spacing="32px">
						<Text size="2xl">
							Merci pour cet <ColorText textValue="échange" />
						</Text>
						<Text size="2xl">Nous avons besoin d'un médecin, pour examiner votre analyse :</Text>
					</Stack>
					<VStack overflowY="scroll" w="750px" h="400px">
						{doctorList.map((doctor) => (
							<DoctorCard doc={doctor.name} pos={doctor.position} />
						))}
					</VStack>
				</Stack>
			</VStack>
		</SimulationPage>
	);
};

export default Doctor;
