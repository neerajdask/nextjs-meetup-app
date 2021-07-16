import { MongoClient } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;

		const client = await MongoClient.connect(
			'mongodb+srv://neerajdask:halamadrid@cluster0.ushvj.mongodb.net/mmeetups?retryWrites=true&w=majority'
		);

		const db = client.db();
		const meetupCollection = db.collection('meetups');
		const result = await meetupCollection.insertOne(data);

		console.log(result);

		client.close();

		res.status(201).json({ message: 'Inserted successfully' });
	}
}
