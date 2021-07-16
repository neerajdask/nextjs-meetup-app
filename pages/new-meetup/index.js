import NewMeetupForm from '../../components/meetups/NewMeetupForm';
const NewMeetup = () => {
	const onMeetupAdd = (meetupData) => {
        console.table(meetupData)
    };
	return (
		<>
			<NewMeetupForm onAddMeetup={onMeetupAdd} />
		</>
	);
};

export default NewMeetup;
