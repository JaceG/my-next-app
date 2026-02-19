import BetCard from './BetCard';
import { Bet } from '../types';

interface BetListProps {
	bets: Bet[];
	onDelete: (id: number) => void;
	onEdit: (bet: Bet) => void;
}
function BetList({ bets, onDelete, onEdit }: BetListProps) {
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
					<BetCard
						key={bet.id}
						{...bet}
						onDelete={onDelete}
						onEdit={onEdit}
					/>
				))}
			</ul>
		</div>
	);
}

export default BetList;
