import * as MarqueeModule from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marquee = MarqueeModule.default?.default ?? MarqueeModule.default;



const BreakingNews = () => {
  return (
    <div>
        <button className="btn btn-secondary">Breaking News</button>

    <Marquee pauseOnHover={true} speed={300}>
      <Link className="mr-12" to='/'>dfadfaf adfasdfadf</Link>
      <Link className="mr-12" to='/'>dfadfaf adfasdfadf</Link>
      <Link className="mr-12" to='/'>dfadfaf adfasdfadf</Link>
    </Marquee>
    </div>
  )
}

export default BreakingNews;