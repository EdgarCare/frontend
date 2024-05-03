import { Box } from '@chakra-ui/react';

const HelixLoader = ({ size, color, speed }: { size: string; color: string; speed: string }): JSX.Element => (
	<Box
		sx={{
			'.container': {
				'--uib-size': `${size}px`,
				'--uib-color': color,
				'--uib-speed': `${speed}s`,
				'--uib-dot-size': 'calc(var(--uib-size) * 0.1)',
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-start',
				height: 'calc(var(--uib-size) * 0.64)',
				width: 'calc(var(--uib-size) * 0.64)',
			},

			'@keyframes jump': {
				'0%, 100%': {
					transform: 'translateY(120%)',
				},

				'50%': {
					transform: 'translateY(-120%)',
				},
			},

			'.dot': {
				'--uib-d1': '-0.48',
				'--uib-d2': '-0.4',
				'--uib-d3': '-0.32',
				'--uib-d4': '-0.24',
				'--uib-d5': '-0.16',
				'--uib-d6': '-0.08',
				'--uib-d7': '-0',
				position: 'absolute',
				bottom: 'calc(var(--uib-bottom) + var(--uib-dot-size) / 2)',
				right: 'calc(var(--uib-right) + var(--uib-dot-size) / 2)',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-start',
				height: 'var(--uib-dot-size)',
				width: 'var(--uib-dot-size)',
				animation: 'jump var(--uib-speed) ease-in-out infinite',
				opacity: 'var(--uib-scale)',
				willChange: 'transform',
				backfaceVisibility: 'hidden',
			},

			'.dot::before': {
				content: '""',
				height: '100%',
				width: '100%',
				backgroundColor: 'var(--uib-color)',
				borderRadius: '50%',
				transform: 'scale(var(--uib-scale))',
				transition: 'background-color 0.3s ease',
			},

			'.dot:nth-child(1)': {
				'--uib-bottom': '24%',
				'--uib-right': '-35%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d1))',
			},
			'.dot:nth-child(2)': {
				'--uib-bottom': '16%',
				'--uib-right': '-6%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d2))',
			},
			'.dot:nth-child(3)': {
				'--uib-bottom': '8%',
				'--uib-right': '23%',
				'--uib-scale': '0.98',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d3))',
			},
			'.dot:nth-child(4)': {
				'--uib-bottom': '-1%',
				'--uib-right': '51%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d4))',
			},
			'.dot:nth-child(5)': {
				'--uib-bottom': '38%',
				'--uib-right': '-17.5%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d2))',
			},
			'.dot:nth-child(6)': {
				'--uib-bottom': '30%',
				'--uib-right': '10%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d3))',
			},
			'.dot:nth-child(7)': {
				'--uib-bottom': '22%',
				'--uib-right': '39%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d4))',
			},
			'.dot:nth-child(8)': {
				'--uib-bottom': '14%',
				'--uib-right': '67%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d5))',
			},
			'.dot:nth-child(9)': {
				'--uib-bottom': '53%',
				'--uib-right': '-0.8%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d3))',
			},
			'.dot:nth-child(10)': {
				'--uib-bottom': '44.5%',
				'--uib-right': '27%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d4))',
			},
			'.dot:nth-child(11)': {
				'--uib-bottom': '36%',
				'--uib-right': '55.7%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d5))',
			},
			'.dot:nth-child(12)': {
				'--uib-bottom': '28.7%',
				'--uib-right': '84.3%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d6))',
			},
			'.dot:nth-child(13)': {
				'--uib-bottom': '66.8%',
				'--uib-right': '15%',
				'--uib-scale': '0.82',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d4))',
			},
			'.dot:nth-child(14)': {
				'--uib-bottom': '58.8%',
				'--uib-right': '43%',
				'--uib-scale': '0.84',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d5))',
			},
			'.dot:nth-child(15)': {
				'--uib-bottom': '50%',
				'--uib-right': '72%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d6))',
			},
			'.dot:nth-child(16)': {
				'--uib-bottom': '42%',
				'--uib-right': '100%',
				animationDelay: 'calc(var(--uib-speed) * var(--uib-d7))',
			},
			'.dot:nth-child(2), .dot:nth-child(8)': {
				'--uib-scale': '0.96',
			},
			'.dot:nth-child(1), .dot:nth-child(7)': {
				'--uib-scale': '0.94',
			},
			'.dot:nth-child(6), .dot:nth-child(12)': {
				'--uib-scale': '0.92',
			},
			'.dot:nth-child(5), .dot:nth-child(11)': {
				'--uib-scale': '0.9',
			},
			'.dot:nth-child(10),	.dot:nth-child(16)': {
				'--uib-scale': '0.88',
			},
			'.dot:nth-child(9), .dot:nth-child(15)': {
				'--uib-scale': '0.86',
			},
		}}
	>
		<Box className="container">
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
			<Box className="dot"></Box>
		</Box>
	</Box>
);

export default HelixLoader;