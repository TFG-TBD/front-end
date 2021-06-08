import Link from 'next/link';
import React from 'react';

const imageUrl = 'https://image.tmdb.org/t/p/w200';

interface PersonCardProps {
	person: any;
}

const PersonCard = ({ person }: PersonCardProps) => {
	return (
		<Link href={`/persons/${person.id}`}>
			<div
				className="relative flex-shrink-0 h-40 bg-gray-300 bg-center bg-no-repeat bg-cover rounded-md shadow-md w-28 min-w-max"
				style={{
					backgroundImage: `${
						person.profile_path
							? `url(${imageUrl}${person.profile_path})`
							: 'linear-gradient(#333b4a, #4d3d65)'
					}`,
				}}
			>
				<div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent rounded-b-md"></div>
				<span className="absolute bottom-0 m-2 text-left text-white">{person.name}</span>
			</div>
		</Link>
	);
};

export default PersonCard;
