function ConfirmDialog({ message, onConfirm, onCancel }) {
	return (
		<div className='mt-2 rounded border border-red-300 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950'>
			<p className='text-sm text-zinc-900 dark:text-zinc-100'>
				{message}
			</p>
			<div className='mt-2 flex gap-2'>
				<button
					onClick={onConfirm}
					className='rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700'>
					Yes, Delete
				</button>
				<button
					onClick={onCancel}
					className='rounded bg-zinc-300 px-3 py-1 text-sm text-zinc-800 hover:bg-zinc-400'>
					Cancel
				</button>
			</div>
		</div>
	);
}

export default ConfirmDialog;
