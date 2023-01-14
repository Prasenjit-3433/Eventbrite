import CategoryEvent from '../../../src/components/events/categoryEvent.component';

const EventsCategoryPage = ({ data, category }) => {
    return <CategoryEvent data={data} category={category} />
}

export default EventsCategoryPage;

// We need to explicitely tell NextJs how many routes & pages, MextJs has to build at build-time
export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map(event => {
        return { params: { category: event.id } }
    });
    
    return {
        paths: allPaths,
        fallback: false,
    }
}

// Then use the above  Component `EventsCategory` as a template to build & serve a page corr. to those paths:
export async function getStaticProps(context) {
    const { params : { category }} = context;
    const { allEvents } = await import('/data/data.json');
    const data = allEvents.filter(event => event.city.toLowerCase() === category.toLowerCase());

    return { props: { data, category } }; 
}

// Note: Therefore, for Dynamic Pages, we need both getStaticPaths as well as getStaticProps. But for Static Pages, 
//       we only need getStaticProps.