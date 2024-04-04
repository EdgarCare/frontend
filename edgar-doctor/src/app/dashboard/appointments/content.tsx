'use client';

import { VStack, Stack } from '@chakra-ui/react';

import DashboardPageBanner from 'components/app/dashboardPages/DashboardPageBanner';
import AppointmentsCalendarCard from 'components/app/dashboardPages/appointments/AppointmentsCalendarCard';
import AppointmentsCards from 'components/app/dashboardPages/appointments/AppointmentsCards';

import { useGetDoctorAppointmentsQuery } from 'services/request/appointments';

const AppointmentsPageContent = (): JSX.Element => {
	const { data: appointments } = useGetDoctorAppointmentsQuery();

	return (
		<VStack w="100%" spacing="32px" h="100%">
			<DashboardPageBanner
				title="Mes rendez-vous"
				subTitle="Retrouvez toutes les informations liées aux rendez-vous de vos patients."
			/>
			<Stack
				direction={{ base: 'column', lg: 'row' }}
				w="100%"
				align="start"
				spacing={{ base: '32px', xl: '64px' }}
			>
				<VStack spacing="16px" w={{ base: '100%', md: 'auto' }}>
					<AppointmentsCalendarCard appointments={appointments} />
				</VStack>
				{appointments && (
					<AppointmentsCards
						appointments={[...appointments].sort(
							(a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
						)}
					/>
				)}
			</Stack>
		</VStack>
	);
};

export default AppointmentsPageContent;
