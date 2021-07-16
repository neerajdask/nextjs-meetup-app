import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
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

// export async function getServerSideProps(context) {
// 	// API calls here
// 	// SUitable for high frequency data changes.

// 	// const req = context.req;
// 	// const res = context.res;

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }

export async function getStaticProps() {
	// API calls here
	const client = await MongoClient.connect(
		'mongodb+srv://neerajdask:halamadrid@cluster0.ushvj.mongodb.net/mmeetups?retryWrites=true&w=majority'
	);

	const db = client.db();
	const meetupCollection = db.collection('meetups');
	const result = await meetupCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: result.map((meetup) => {
				return {
					title: meetup.title,
					image: meetup.image,
					address: meetup.address,
					id: meetup._id.toString(),
				};
			}),
		},
		revalidate: 10,
	};
}

export default Home;
