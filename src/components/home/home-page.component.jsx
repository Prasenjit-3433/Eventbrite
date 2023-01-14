import Image from "next/image";
import Link from "next/link";


const HomePage = ({ data }) => {
    return (
        <div className="home_body">
        {
          data.map((event) => {
            return(
              <Link className="card" href={`/events/${event.id}`} key={event.id}>
                <div className="card-image">
                  <Image src={event.image} alt={event.title} height={300} width={450}/>
                </div>
                <div className="card-content">
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                </div>
              </Link>
            );
          })
        }
      </div>
    );
}

export default HomePage;