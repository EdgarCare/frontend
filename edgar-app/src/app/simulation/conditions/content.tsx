'use client';

import { Text, Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import SimulationLayout from 'components/simulationPages/SimulationLayout';
import SimulationButton from 'components/simulationPages/SimulationButton';

import { useAuthContext } from 'contexts/auth';

const SimulationConditionsPageContent = (): JSX.Element => {
	const router = useRouter();
	const auth = useAuthContext();

	const handleClick = () => {
		const token = auth.getToken();
		const redirection = token ? 'start' : 'connection';
		router.push(redirection);
	};

	return (
		<SimulationLayout>
			<>
				<Text size={{ base: '2xl', md: '3xl' }} color="white" maxW="1000px">
					Avant de commencer votre simulation, notez que cette simulation n’a pas pour but de diagnostiquer
					une maladie. <br />
					A l’issue de la simulation, notre échange sera transmis à un médecin afin d’être examiné. <br />
					Si votre rendez-vous n’est pas utile alors il sera annulé par le médecin et il vous conseillera des
					méthodes de soins. <br />
				</Text>
				<Box w="100%" textAlign="end" onClick={handleClick}>
					<SimulationButton text="Continuer" />
				</Box>
			</>
		</SimulationLayout>
	);
};

export default SimulationConditionsPageContent;
