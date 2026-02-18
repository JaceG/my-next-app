'use client';

import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const icon = theme === 'light' ? '🌙' : '☀️';

	return (
		<button
			onClick={toggleTheme}
			className='text-2xl text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer'>
			{icon}
		</button>
	);
}
