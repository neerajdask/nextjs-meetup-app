import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';
import React from 'react';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'Vue Conf, Berlin',
		address: 'Berlin, Townhall',
		image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg',
		description: 'Germanys best developers',
	},
	{
		id: 'm2',
		title: 'React Conf, Paris',
		address: 'Paris, Townhall',
		image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Louvre_Courtyard%2C_Looking_West.jpg',
		description: 'Europes finest Hooks!',
	},
	{
		id: 'm1',
		title: 'Angular Meetup, Copenhagen',
		address: 'Denmark, Creek',
		image: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Tivoligardens2.jpg',
		description: 'Conference on Directives',
	},
];
const Home = (props) => {
	// const [loadedMeetups, setLoadedMeetups] = React.useState([]);
	// React.useEffect(() => {
	// 	setLoadedMeetups(DUMMY_MEETUP);
	// }, []);
	return (
		<>
			<MeetupList meetups={props.meetups} />
		</>
	);
};

export async function getStaticProps() {
	// API calls here

	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
	};
}

export default Home;
