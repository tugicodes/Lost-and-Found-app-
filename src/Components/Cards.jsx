import image from '../assets/logo1.png';

export default function CardView({image, title, subtitle,description}){
    return (
        <div className = "cardView">
            <img src={image} alt={title} className="cardLogo"/>
            <div className = "card_header">
                <h3 className="card_title">{title}</h3>
                <p className="card_subtitle">{subtitle}</p>
            </div>
            <div className="card_body">
                <p className="card_description">{description}</p>
            </div>

        </div>

    );
}