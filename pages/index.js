import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../utils/api';

function HomePage (props){
	return (
		<div>
			<EventList items={props.featuredEvents} />
		</div>
	);
}

export async function getStaticProps (){
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			featuredEvents
		},
		revalidate: 1800
	};
}

export default HomePage;
