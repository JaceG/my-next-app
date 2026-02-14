function BetList({ bets }) {
	if (bets.length === 0) {
		return (
			<p className='text-zinc-500 dark:text-zinc-400'>
				No bets yet. Add one above!
			</p>
		);
	}

	return (
		<div className='space-y-2'>
			<h3 className='text-lg font-bold text-zinc-900 dark:text-zinc-100'>
				Your Bets
			</h3>
			<ul className='space-y-2'>
				{bets.map((bet) => (
					<li
						key={bet.id}
						className='rounded border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-900'>
						{' '}
						<p className='text-zinc-900 dark:text-zinc-100'>
							{bet.description}
						</p>
						<p className='text-sm text-zinc-500'>
							{bet.date} | Bet: ${bet.amount} | Result: $
							{bet.result}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default BetList;
