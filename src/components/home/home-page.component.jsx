import Image from "next/image";
import Link from "next/link";


const HomePage = ({ data }) => {
    return (
        <>
        {
          data.map((event) => {
            return(
              <Link href={`/events/${event.id}`} key={event.id}>
                  <Image src={event.image} alt={event.title} height={300} width={300}/>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
              </Link>
            );
          })
        }
      </>
    );
}

export default HomePage;