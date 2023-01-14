import Image from "next/image";
import Link from "next/link";

const CategoryEvent = ({ data, category }) => {
    return(
        <div className="category-events">
            <h1>Events in {category}</h1>
            <div className="content">
                {
                    data.map(event => (
                        <Link className="card" href={`/events/${event.city.toLowerCase()}/${event.id}`} key={event.id}>
                            <Image src={event.image} alt={event.title} height={300} width={300}/>
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default CategoryEvent;