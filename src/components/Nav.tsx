import Link from 'next/link';

export default function Nav() {
	return (
		<nav className='flex justify-center gap-4 bg-zinc-50 font-sans dark:bg-black'>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>
		</nav>
	);
}
