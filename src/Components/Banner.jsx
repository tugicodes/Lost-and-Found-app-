import banner from '../assets/bannerImage.webp'
export default function Banner (){
    return (
        <div className="banner">
            <img src={banner} alt="example banner image" className="bannerImage"/>
            <div className="bannerText">
                <h1> Welcome to the Lost and Found App</h1>
                <p> Did you lose something? Search for it here</p>
            </div>
        </div>
    );
}