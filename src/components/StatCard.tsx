function StatCard({ title, value }) {
	return (
		<div className='rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
			<p className='text-sm font-medium text-zinc-500 dark:text-zinc-400'>
				{title}
			</p>
			<p className='mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-100'>
				{value}
			</p>
		</div>
	);
}

export default StatCard;
