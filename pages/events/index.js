import EventsCategory from '../../src/components/events/events-page.component';

const EventsPage = ({ data }) => {
  return <EventsCategory data={data} />
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  
  return {
    props: {
      data: events_categories,
    }
  }
}