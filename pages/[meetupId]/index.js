import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

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

export async function getStaticPaths() {
	const client = await MongoClient.connect(
		'mongodb+srv://neerajdask:halamadrid@cluster0.ushvj.mongodb.net/mmeetups?retryWrites=true&w=majority'
	);

	const db = client.db();
	const meetupCollection = db.collection('meetups');
	const result = await meetupCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		fallback: false,
		paths: result.map((meetup) => {
			return {
				params: {
					meetupId: meetup._id.toString(),
				},
			};
		}),
	};
}

export async function getStaticProps(context) {
	const id = context.params.meetupId;

	const client = await MongoClient.connect(
		'mongodb+srv://neerajdask:halamadrid@cluster0.ushvj.mongodb.net/mmeetups?retryWrites=true&w=majority'
	);

	const db = client.db();
	const meetupCollection = db.collection('meetups');
	const result = await meetupCollection
		.findOne({
			_id: ObjectId(id),
		})
		.toArray();

	client.close();

	return {
		props: {
			meetupData: {
				id: result._id.toString(),
				title: result.title,
				description: result.description,
				image: result.image,
				address: result.address,
			},
		},
	};
}

export default MeetupDetails;
