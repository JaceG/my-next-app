'use client';
import { useState } from 'react';
import StatCard from '../components/StatCard';
import BetForm from '../components/BetForm';
import BetList from '../components/BetList';

export default function Home() {
	const [bets, setBets] = useState([]);
	const addBet = (newBet) => {
		setBets([...bets, newBet]);
	};
	const deleteBet = (id) => {
		setBets(bets.filter((bet) => bet.id !== id));
	};

	return (
		<main className='bg-zinc-50 font-sans dark:bg-black p-6'>
			<h2 className='text-2xl font-bold mb-6'>Home</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
				<StatCard title='Total Bets' value={10} />
				<StatCard title='Win Rate' value={50} />
				<StatCard title='Total P/L' value={100} />
				<StatCard title='Balance' value={1000} />
			</div>
			<BetForm onAddBet={addBet} />
			<BetList bets={bets} onDelete={deleteBet} />
		</main>
	);
}
