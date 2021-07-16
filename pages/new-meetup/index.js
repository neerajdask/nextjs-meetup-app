import NewMeetupForm from '../../components/meetups/NewMeetupForm';

import { useRouter } from 'next/router';

const NewMeetup = () => {
	const router = useRouter();

	const onMeetupAdd = async (meetupData) => {
		console.table(meetupData);
		const res = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(meetupData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		router.replace('/');
	};
	return (
		<>
			<NewMeetupForm onAddMeetup={onMeetupAdd} />
		</>
	);
};

export default NewMeetup;
