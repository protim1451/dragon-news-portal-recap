import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, image_url, details, rating, _id } = news;
    return (
        <div className="mx-3">
            <div className="card w-full bg-base-100 shadow-xl mb-3">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <img src={image_url} alt="" />
                    {
                        details.length > 200 ? <p>{details.slice(0,200)}
                        <Link to={`/news/${_id}`}
                         className="text-blue-600 font-bold">  Read More...</Link></p>:
                        <p>{details}</p>
                    }
                    <p>{rating.badge}</p>
                    <p>{rating.number}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;