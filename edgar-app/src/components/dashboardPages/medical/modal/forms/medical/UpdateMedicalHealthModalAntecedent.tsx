import {
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
	Text,
	useDisclosure,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors } from 'react-hook-form';

import ErrorMessage from 'components/forms/ErrorMessage';
import HealthIssueCard from 'components/dashboardPages/medical/modal/forms/medical/healthIssues/HealthIssueCard';
import SelectHealthIssueHandler from 'components/dashboardPages/medical/modal/forms/medical/healthIssues/SelectHealthIssueHandler';

import type { UpdatePatientMedicalHealthType } from 'types/dashboard/medical/form/UpdatePatientMedicalType';
import type { PatientMedicalAntecedentType } from 'types/dashboard/medical/PatientMedicalAntecedentType';

import AddIcon from 'assets/icons/AddIcon';

const UpdateMedicalHealthModalAntecedent = ({
	control,
	errors,
	healthIssues,
}: {
	control: Control<UpdatePatientMedicalHealthType>;
	errors: FieldErrors<UpdatePatientMedicalHealthType>;
	healthIssues: PatientMedicalAntecedentType[];
}): JSX.Element => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<VStack w="100%" align="start" spacing="16px">
			<VStack spacing="4px" align="start" w="100%">
				<FormLabel size="lg" id="edgar-onboardingMedicalPage-formHealthIssues-text">
					Vos antécédents médicaux et sujets de santé
				</FormLabel>
				<InputGroup>
					<Controller
						control={control}
						name="medicalAntecedents"
						rules={{ required: true }}
						render={({ field: { value, onChange } }) => (
							<>
								<Input
									placeholder="Renseignez vos informations"
									type="text"
									w="100%"
									readOnly
									onClick={onOpen}
									cursor="pointer"
									id="edgar-onboardingMedicalPage-formHealthIssues-input"
								/>
								<SelectHealthIssueHandler
									isOpen={isOpen}
									onClose={onClose}
									onChange={onChange}
									healthIssues={value}
								/>
							</>
						)}
					/>
					<InputRightElement>
						<AddIcon color="blue.700" />
					</InputRightElement>
				</InputGroup>
				{errors.medicalAntecedents?.type === 'required' && (
					<ErrorMessage id="edgar-onboardingMedicalPage-formHealthIssuesErrorRequired-text">
						Ce champ est nécessaire
					</ErrorMessage>
				)}
			</VStack>
			<VStack w="100%" align="start">
				<Text id="edgar-onboardingMedicalPage-formHealthIssuesAdded-text">
					Vos antécédénts médicaux et sujets de santé renseignés
				</Text>
				<Wrap w="100%">
					{healthIssues.map((healthIssue) => (
						<WrapItem key={healthIssue.name}>
							<Controller
								control={control}
								name="medicalAntecedents"
								render={({ field: { value, onChange } }) => (
									<HealthIssueCard
										healthIssue={healthIssue}
										isDeletable
										onClick={() => onChange(value.filter((item) => item.name !== healthIssue.name))}
									/>
								)}
							/>
						</WrapItem>
					))}
				</Wrap>
			</VStack>
		</VStack>
	);
};

export default UpdateMedicalHealthModalAntecedent;
