import { Text, VStack, Stack, HStack, Button, Link } from '@chakra-ui/react';

import ColorText from 'components/GradientText';
import SimulationPage from 'components/pages/simulation/SimulationPage';

const Doctor = (): JSX.Element => (
	<SimulationPage>
		<VStack spacing="128px">
			<Stack spacing="64px" maxW="670px">
				<Text size="2xl">
					Ce médecin va examiner votre analyse sous <ColorText textValue="maximum 48h" />
				</Text>
				<Text size="2xl">Pour que je puisse revenir vers vous, il me faudrait un moyen de communication</Text>
			</Stack>
			<HStack spacing="64px">
				<Link href="/connection/signup?redirect=/simulation/advise">
					<Button variant="primary" size="lg">
						Créer un compte
					</Button>
				</Link>
				<Link href="/connection/login?redirect=/simulation/advise">
					<Button variant="secondary" size="lg">
						Se connecter
					</Button>
				</Link>
			</HStack>
		</VStack>
	</SimulationPage>
);

export default Doctor;