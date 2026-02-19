'use client';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import { Bet } from '../types';

interface BalanceChartProps {
	bets: Bet[];
}

export default function BalanceChart({ bets }: BalanceChartProps) {
	if (bets.length === 0) {
		return (
			<p className='text-zinc-500 dark:text-zinc-400'>
				No balance data yet. Add some bets above!
			</p>
		);
	}
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
