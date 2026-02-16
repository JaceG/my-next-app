function BetCard({ id, date, description, amount, result, onDelete }) {
	return (
		<div className='rounded border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900'>
			<p className='text-zinc-900 dark:text-zinc-100'>{description}</p>
			<p className='text-sm text-zinc-500'>
				{date} | Bet: ${amount} | Result: $${result}
			</p>
			<button
				onClick={() => onDelete(id)}
				className='rounded bg-red-600 px-2 py-1 text-sm font-medium text-white hover:bg-red-700'>
				Delete
			</button>
		</div>
	);
}

export default BetCard;
