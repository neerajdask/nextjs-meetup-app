import MeetupDetail from '../../components/meetups/MeetupDetail';
const MeetupDetails = (props) => {
	return (
		<>
			<MeetupDetail
				title={props.meetupData.title}
				id={props.meetupData.id}
				address={props.meetupData.address}
				image={props.meetupData.image}
				description={props.meetupData.description}
			/>
		</>
	);
};

export async function getStaticProps(context) {
	const id = context.params.meetupId;

	return {
		props: {
			meetupData: {
				id: id,
				title: 'Vue Conf, Berlin',
				address: 'Berlin, Townhall',
				image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg',

				description: 'Germanys best developers',
			},
		},
	};
}

export default MeetupDetails;
