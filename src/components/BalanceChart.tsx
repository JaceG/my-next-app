'use client';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

export default function BalanceChart({ bets }) {
	let runningBalance = 0;
	const chartData = bets.map((bet) => {
		runningBalance += Number(bet.result);
		return {
			date: bet.date,
			balance: runningBalance,
		};
	});

	return (
		<div className='mt-6'>
			<h3 className='text-lg font-semibold mb-2'>Balance Over Time</h3>
			<ResponsiveContainer width='100%' height={300}>
				<LineChart data={chartData}>
					<XAxis dataKey='date' />
					<YAxis />
					<Tooltip />
					<Line type='monotone' dataKey='balance' stroke='#2563eb' />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
