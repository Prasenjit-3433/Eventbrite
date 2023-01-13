import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({ data }) => {

    return(
        <div>
          <h1>Events Page!</h1>
          <div>
            {
              data.map(event => {
                return(
                  <Link href={`/events/${event.id}`} key={event.id}>
                    <Image src={event.image} alt={event.title} height={300} width={300}/>
                    <h2>{event.title}</h2>
                  </Link>
                );
              })
            }
          </div>
        </div>
    );
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