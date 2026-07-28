import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";



const BreakingNews = () => {
  return (
    <div>
        <button className="btn btn-secondary">Breaking News</button>

    <Marquee pauseOnHover={true} speed={300}>
      <Link>dfadfaf adfasdfadf</Link>
    </Marquee>
    </div>
  )
}

export default BreakingNews;