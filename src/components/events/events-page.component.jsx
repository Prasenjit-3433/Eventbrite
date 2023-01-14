import Image from "next/image";
import Link from "next/link";

const EventsCategory = ({ data }) => {
    return (
        <div className='events-page'>
            {
                data.map(event => {
                return(
                    <Link className="card" href={`/events/${event.id}`} key={event.id}>
                        <Image src={event.image} alt={event.title} height={380} width={380}/>
                        <h2>{event.title}</h2>
                    </Link>
                );
                })
            }
      </div>
    );
}

export default EventsCategory;