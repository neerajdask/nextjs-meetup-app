import MeetupDetail from '../../components/meetups/MeetupDetail';
const MeetupDetails = () => {
	return (
		<>
			<MeetupDetail
				title={'Vue Conf, Berlin'}
				address={'Berlin, Townhall'}
				image={
					'https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg'
				}
				description={'Germanys best developers'}
			/>
		</>
	);
};

export default MeetupDetails;
