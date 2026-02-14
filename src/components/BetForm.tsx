'use client';
import { useState } from 'react';

function BetForm({ onAddBet }) {
	const [date, setDate] = useState('');
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');
	const [result, setResult] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		onAddBet({ id: Date.now(), date, description, amount, result });

		setDate('');
		setDescription('');
		setAmount('');
		setResult('');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-4 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900'
			style={{ marginTop: '20px' }}>
			<h3 className='text-lg font-bold text-zinc-900 dark:text-zinc-100'>
				Add a Bet
			</h3>
			<label className='block text-sm font-medium text-zinc-700 dark:text-zinc-300'>
				Date
				<input
					type='date'
					value={date}
					onChange={(e) => setDate(e.target.value)}
					className='mt-1 block w-full rounded border border-zinc-300 p-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100'
				/>
			</label>

			<label className='block text-sm font-medium text-zinc-700 dark:text-zinc-300'>
				Description
				<input
					type='text'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className='mt-1 block w-full rounded border border-zinc-300 p-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100'
				/>
			</label>

			<label className='block text-sm font-medium text-zinc-700 dark:text-zinc-300'>
				Bet Amount
				<input
					type='number'
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					className='mt-1 block w-full rounded border border-zinc-300 p-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100'
				/>
			</label>

			<label className='block text-sm font-medium text-zinc-700 dark:text-zinc-300'>
				Result {' (Win/Loss Amount)'}
				<input
					type='number'
					value={result}
					onChange={(e) => setResult(e.target.value)}
					className='mt-1 block w-full rounded border border-zinc-300 p-2 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100'
				/>
			</label>

			<button
				type='submit'
				className='rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700'>
				Add Bet
			</button>
		</form>
	);
}

export default BetForm;
