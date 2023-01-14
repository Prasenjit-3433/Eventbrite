import Image from "next/image";

const SingleEvent = ({ data }) => {

    const onSubmit = (event) => {
        event.preventDefault();
        const emailId = document.getElementById('email').value;
        console.log(emailId);
    }

    return (
        <div className="single-event-page">
            <Image src={data.image} alt={data.title} height={500} width={1000} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <form onSubmit={onSubmit} className="email-registration">
                <label htmlFor="email">Get Registered for this event!</label>
                <input type="email" id="email" placeholder="Please insert your email here"/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default SingleEvent;