import { VStack } from '@chakra-ui/react';

const BasicPage = ({ children }: { children: JSX.Element }): JSX.Element => (
	<VStack bg="blue.50" minH="100vh">
		{children}
	</VStack>
);

export default BasicPage;
