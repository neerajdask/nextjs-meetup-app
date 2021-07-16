import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUP = [
    {
        id: 'm1',
        title: 'Vue Comf, Berlin',
        address: 'Berlin, Townhall',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg',
        description: 'Germanys best developers'
    },
    {
        id: 'm2',
        title: 'React Conf, Paris',
        address: 'Paris, Townhall',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Louvre_Courtyard%2C_Looking_West.jpg',
        description: 'Europes finest Hooks!'
    },
    {
        id: 'm1',
        title: 'Angular Meetup, Copenhagen',
        address: 'Denmark, Creek',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Tivoligardens2.jpg',
        description: 'Conference on Directives'
    },
]
const Home = () => {
	return (
		<>
			<MeetupList meetups={DUMMY_MEETUP} />
		</>
	);
};

export default Home;
