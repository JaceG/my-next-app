import ThemeToggle from './ThemeToggle';

export default function Header() {
	return (
		<header className='bg-zinc-50 font-sans dark:bg-black flex justify-between items-center p-4'>
			<h1 className='text-2xl font-bold'>BetTrackr Lite</h1>
			<ThemeToggle />
		</header>
	);
}
