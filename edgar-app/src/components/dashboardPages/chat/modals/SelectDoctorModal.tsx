import { useState } from 'react';
import {
	Button,
	Icon,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Text,
	VStack,
} from '@chakra-ui/react';

import SelectDoctorContent from 'components/dashboardPages/chat/modals/SelectDoctorContent';
import StartChatContent from 'components/dashboardPages/chat/modals/StartChatContent';

import CreateChatIllustration from 'assets/illustrations/CreateChatIllustration';

import { type DoctorType } from 'types/dashboard/DoctorType';

const SelectDoctorModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const [selectedDoctor, setSelectedDoctor] = useState<DoctorType | undefined>(undefined);

	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				setSelectedDoctor(undefined);
				onClose();
			}}
			size="2xl"
		>
			<ModalOverlay />
			<ModalContent>
				<ModalBody p="32px 32px 24px 32px">
					<VStack w="100%" spacing="32px">
						<VStack w="100%">
							<Icon as={CreateChatIllustration} w="48px" h="48px" />
							<VStack w="100%">
								<Text size="xl">Démarrez une nouvelle conversation</Text>
							</VStack>
						</VStack>
						{selectedDoctor ? (
							<StartChatContent
								selectedDoctor={selectedDoctor}
								onClose={() => {
									setSelectedDoctor(undefined);
									onClose();
								}}
							/>
						) : (
							<SelectDoctorContent onClick={(doctorInfos) => setSelectedDoctor(doctorInfos)} />
						)}
					</VStack>
				</ModalBody>
				<ModalFooter p="24px 32px 32px 32px">
					<Button
						size="customMd"
						variant="secondary"
						w="100%"
						onClick={() => {
							setSelectedDoctor(undefined);
							onClose();
						}}
					>
						Annuler
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default SelectDoctorModal;
