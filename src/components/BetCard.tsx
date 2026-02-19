'use client';

import { useState } from 'react';
import ConfirmDialog from './ConfirmDialog';
import { Bet } from '../types';

interface BetCardProps {
	id: number;
	date: string;
	description: string;
	amount: string;
	result: string;
	onDelete: (id: number) => void;
	onEdit: (bet: Bet) => void;
}

function BetCard({
	id,
	date,
	description,
	amount,
	result,
	onDelete,
	onEdit,
}: BetCardProps) {
	const [showConfirm, setShowConfirm] = useState(false);

	return (
		<div className='rounded border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900'>
			<p className='text-zinc-900 dark:text-zinc-100'>{description}</p>
			<p className='text-sm text-zinc-500'>
				{date} | Bet: ${amount} | Result: $${result}
			</p>
			<button
				onClick={() => setShowConfirm(true)}
				className='rounded bg-red-600 px-2 py-1 text-sm font-medium text-white hover:bg-red-700'>
				Delete
			</button>{' '}
			<button
				onClick={() =>
					onEdit({ id, date, description, amount, result })
				}
				className='rounded bg-yellow-500 px-2 py-1 text-sm font-medium text-black hover:bg-yellow-600'>
				Edit
			</button>
			{showConfirm && (
				<ConfirmDialog
					message='Are you sure you want to delete this bet?'
					onConfirm={() => onDelete(id)}
					onCancel={() => setShowConfirm(false)}
				/>
			)}
		</div>
	);
}

export default BetCard;
