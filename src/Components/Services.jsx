import CardView from "./Cards";
import retrieve from '../assets/retrieve.png';
import report from '../assets/report.png';
import support from '../assets/community.png';

export default function Services (){
    return (
        <section className="services">
            <h2>Our Services</h2> 

            <div className="servicesCards">

                <CardView 
                image={retrieve}
                title="Retrieve Items"
                subtitle="Find lost items in our system"
                description="We help you locate and retrieve your lost items efficiently."
                />

                <CardView
                image={report}
                title="Report Lost Items"
                subtitle="Report items you've lost"
                description="Help us keep track of lost items by reporting them to our system."
                />

                <CardView
                image={support}
                title="Community Support"
                subtitle="Connect with others"
                description="Join our community to share information and support each other in finding lost items."
                />

            </div>
        
        </section>

    );
}