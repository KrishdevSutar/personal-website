import data from "../../data/index.json";
import { Link } from 'react-router-dom'
//<Link to="https://www.google.com">Go to Google</Link>

export default function MyPortfolio() {
    return <section className="portfolio--section" id="MyPortfolio">
        <div className="portfolio--container-box">
            <div className="portfolio--container">
                <p className="sub--title">Recent Projects</p>
                <h2 className="section--heading">My Portfolio</h2>
            </div>
            <div>
                <Link to="https://github.com/KrishdevSutar"  className="portfolio--content">
                    <button className="btn btn-github">Visit my Github</button>
                </Link>
            </div>
        </div>
        <div className="portfolio--section--container">
            {data?.portfolio?.map((item, index)=> (
                <div key={index} className="portfolio--section--card">
                    <div className="portfolio--section--img">
                        <img src={item.src} alt="Placeholder"/>
                    </div>
                    <div className="portfolio--section--card--content">
                        <div>
                            <h3 className="portfolio--section--title">{item.title}</h3>
                            <p className="text-md">{item.description}</p>
                        </div>
                        <Link to={`/github.com/KrishdevSutar/${item.link}`}  className="portfolio--link">
                            <p className="text-sm portfolio--link">{item.link}</p>
                        </Link>
                    </div>
                </div>

            )
            )}
        </div>
    </section>;
}