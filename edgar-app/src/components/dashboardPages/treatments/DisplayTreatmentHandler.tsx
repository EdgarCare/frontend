import ModalHandler from 'components/modals/ModalHandler';
import DisplayTreatmentModalContent from 'components/dashboardPages/treatments/DisplayTreatmentModalContent';

import type { TreatmentType } from 'types/dashboard/treatments/TreatmentType';

import AddHealthIssueIllustration from 'assets/illustrations/AddHealthIssueIllustration';

const DisplayTreatmentHandler = ({
	isOpen,
	onClose,
	medicalAntecedentName,
	treatment,
}: {
	isOpen: boolean;
	onClose: () => void;
	medicalAntecedentName: string;
	treatment: TreatmentType;
}): JSX.Element => (
	<ModalHandler
		isOpen={isOpen}
		onClose={onClose}
		size="3xl"
		headerTitle="Informations sur votre traitement"
		headerSubtitle={`Consulter votre traitement pour le sujet de santé: ${medicalAntecedentName}`}
		headerIcon={AddHealthIssueIllustration}
		bodyContent={<DisplayTreatmentModalContent treatment={treatment} />}
	/>
);
export default DisplayTreatmentHandler;
