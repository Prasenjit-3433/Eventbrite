import Image from 'next/image';

const EventPage = ({ data }) => {
    return(
        <div>
            <Image src={data.image} alt={data.title} height={500} width={1000} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <input type="email" />
            <button>Submit</button>
        </div>
    );
}

export default EventPage;

export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json');
    const allPaths = allEvents.map(event => {
        return { params: { category: event.city.toLowerCase(), id: event.id } }
    })
    
    return {
        paths: allPaths,
        fallback: false
    }
}

// `context` is an object that is used to extract the path from browser's URL
export async function getStaticProps(context) {
    const { params: { id } } = context;
    const { allEvents } = await import('/data/data.json');
    const eventData = allEvents.find(event => event.id === id);

    return {
        props: {
            data: eventData
        }
    }
}