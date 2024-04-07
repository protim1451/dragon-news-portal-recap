import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        async function fetchNewsData() {
            try {
                const response = await fetch('/news.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch news data');
                }
                const data = await response.json();
                const news = data.find(item => item._id === id);
                setNewsItem(news);
            } catch (error) {
                console.error(error);
            }
        }

        fetchNewsData();
    }, [id]);

    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    {newsItem && (
                        <>
                            <h3 className="font-semibold text-xl my-3">{newsItem.title}</h3>
                            <img src={newsItem.image_url} alt="" />
                            <p className="my-3">{newsItem.details}</p>
                            <hr />
                            <div className="my-3 flex gap-7">
                                <img width={50} height={50} src={newsItem.author.img} alt="" />
                                <p className="font-semibold">{newsItem.author.name}</p>
                                <p>{newsItem.author.published_date}</p>
                            </div>
                        </>
                    )}
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default News;
