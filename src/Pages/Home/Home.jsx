import { useLoaderData } from "react-router-dom"
import Header from "../Shared/Header/Header"
import Leftsidenav from "../Shared/Leftsidenav/Leftsidenav"
import Navbar from "../Shared/Navbar/Navbar"
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav"
import BreakingNews from "./Breakingnews"
import NewsCard from "./NewsCard"



const Home = () => {
    const news = useLoaderData();
    // console.log(news)
    
  return (
    <div>
        
        <Header></Header>
       <BreakingNews />
        <Navbar></Navbar>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div>
                <Leftsidenav></Leftsidenav>
            </div>
            {/* news container */}
            <div className="md:col-span-2">
                {
                    news.map(aNews => <NewsCard
                         key={aNews._id} news={aNews}>

                         </NewsCard>)
                }
            </div>
            <div>
                <Rightsidenav></Rightsidenav>
            </div>
        </div>
    </div>
  )
}

export default Home