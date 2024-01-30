import { Suspense } from 'react';
import { Metadata, Viewport } from 'next';

import Providers from 'app/Providers';

export const metadata: Metadata = {
	title: 'edgar',
	description: "Gagne du temps avec l'assistant virtuel du pré-diagnostic",
	icons: '/assets/logo/edgar-logo-tabs.svg',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
};

const RootLayout = ({ children }: { children: JSX.Element }): JSX.Element => (
	<html lang="fr">
		<body>
			<Suspense>
				<Providers>{children}</Providers>
			</Suspense>
		</body>
	</html>
);

export default RootLayout;
