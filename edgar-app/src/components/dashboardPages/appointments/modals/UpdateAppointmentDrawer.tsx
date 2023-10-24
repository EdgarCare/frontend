import { useState } from 'react';
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	Icon,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	VStack,
} from '@chakra-ui/react';

import AppointmentDoctorCard from 'components/dashboardPages/appointments/AppointmentDoctorCard';
import UpdateAppointmentFooterContent from 'components/dashboardPages/appointments/modals/UpdateAppointmentFooterContent';

import SearchIcon from 'assets/icons/SearchIcon';
import CalendarIllustration from 'assets/illustrations/Calendarllustration';

import { type DoctorType } from 'types/dashboard/appointments/doctorTypes';

const UpdateAppointmentDrawer = ({
	isOpen,
	onClose,
	appointmentId,
}: {
	isOpen: boolean;
	onClose: () => void;
	appointmentId: string;
}): JSX.Element => {
	const [selectedAppointment, setSelectedAppointment] = useState('');

	const doctors: DoctorType[] = [
		{
			id: 'Quentin',
			name: 'Doctor XX',
			address: '1 rue de la paix',
		},
		{
			id: '1',
			name: 'Doctor YY',
			address: '1 rue de la paix',
		},
		{
			id: '1',
			name: 'Doctor ZZ',
			address: '1 rue de la paix',
		},
	];

	return (
		<Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="bottom">
			<DrawerOverlay />
			<DrawerContent
				borderRadius="16px 16px 0px 0px"
				maxH="700px"
				overflowY={{ base: 'hidden', smd: 'scroll' }}
				sx={{
					'::-webkit-scrollbar': {
						width: '6px',
					},
					'::-webkit-scrollbar-track': {
						background: '#F1F1F1',
						borderRadius: '8px',
						marginTop: '32px',
						marginBottom: '32px',
					},
					'::-webkit-scrollbar-thumb': {
						background: 'grey.200',
						borderRadius: '8px',
					},
					'::-webkit-scrollbar-thumb:hover': {
						background: 'grey.300',
					},
					scrollbarWidth: 'thin',
					scrollbarColor: '#CCC #F1F1F1',
				}}
			>
				<DrawerBody p="16px">
					<VStack spacing="32px" w="100%">
						<VStack w="100%">
							<Icon as={CalendarIllustration} w="48px" h="48px" />
							<VStack spacing="16px" w="100%">
								<Text size="xl">Choisissez un rendez-vous</Text>
								<InputGroup>
									<Input placeholder="Docteur Edgar" />
									<InputRightElement>
										<Icon as={SearchIcon} />
									</InputRightElement>
								</InputGroup>
							</VStack>
						</VStack>
						<VStack w="100%">
							{doctors.map((doctor) => (
								<AppointmentDoctorCard
									key={doctor.name}
									doctorInfos={doctor}
									selectedAppointment={selectedAppointment}
									setSelectedAppointment={setSelectedAppointment}
								/>
							))}
						</VStack>
					</VStack>
				</DrawerBody>
				<DrawerFooter p="16px">
					<UpdateAppointmentFooterContent
						onClose={onClose}
						selectedAppointment={selectedAppointment}
						appointmentId={appointmentId}
					/>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default UpdateAppointmentDrawer;