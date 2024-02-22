import { type PatientSexType } from 'types/app/dashboard/patients/PatientSexType';
import { type PatientOnboardingStatusType } from 'types/app/dashboard/patients/PatientOnboardingStatusType';
import { type PatientMedicalAntecedentType } from 'types/app/dashboard/patients/medicalInfos/PatientMedicalAntecedentType';

export type PatientType = {
	id: string;
	email: string;
	medicalInfos: {
		name: string;
		firstname: string;
		birthdate: number;
		sex: PatientSexType;
		weight: number;
		height: number;
		primaryDoctorId: string;
		onboardingStatus: PatientOnboardingStatusType;
		medicalAntecedents: PatientMedicalAntecedentType[];
	};
};
