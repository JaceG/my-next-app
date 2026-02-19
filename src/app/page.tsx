'use client';

import { useState, useEffect } from 'react';
import StatCard from '../components/StatCard';
import BetForm from '../components/BetForm';
import BetList from '../components/BetList';
import BalanceChart from '../components/BalanceChart';
import { Bet } from '../types';

export default function Home() {
	const [bets, setBets] = useState<Bet[]>([]);
	const [editingBet, setEditingBet] = useState<Bet | null>(null);

	const addBet = (newBet: Bet) => {
		setBets([...bets, newBet]);
	};
	const deleteBet = (id: number) => {
		setBets(bets.filter((bet) => bet.id !== id));
	};
	const startEditing = (bet: Bet) => {
		setEditingBet(bet);
	};
	const updateBet = (updatedBet: Bet) => {
		setBets(
			bets.map((bet) => (bet.id === updatedBet.id ? updatedBet : bet))
		);
		setEditingBet(null);
	};
	const cancelEdit = () => {
		setEditingBet(null);
	};
	const winRate =
		bets.length === 0
			? 0
			: (bets.filter((bet) => Number(bet.result) > 0).length /
					bets.length) *
				100;
	const totalPL = bets.reduce((total, bet) => total + Number(bet.result), 0);
	const balance = totalPL;

	useEffect(() => {
		const saved = localStorage.getItem('bets');
		if (saved) {
			setBets(JSON.parse(saved));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('bets', JSON.stringify(bets));
	}, [bets]);

	return (
		<main className='bg-zinc-50 font-sans dark:bg-black p-6'>
			<h2 className='text-2xl font-bold mb-6'>Home</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
				<StatCard title='Total Bets' value={bets.length} />
				<StatCard title='Win Rate' value={winRate} />
				<StatCard title='Total P/L' value={totalPL} />
				<StatCard title='Balance' value={balance} />
			</div>
			<BetForm
				onAddBet={addBet}
				editingBet={editingBet}
				onUpdateBet={updateBet}
				onCancelEdit={cancelEdit}
			/>
			<BetList bets={bets} onDelete={deleteBet} onEdit={startEditing} />
			<BalanceChart bets={bets} />
		</main>
	);
}
