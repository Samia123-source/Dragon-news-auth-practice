import Header from "../Shared/Header/Header"
import Leftsidenav from "../Shared/Leftsidenav/Leftsidenav"
import Navbar from "../Shared/Navbar/Navbar"
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav"
import BreakingNews from "./Breakingnews"



const Home = () => {
  return (
    <div>
        
        <Header></Header>
       <BreakingNews />
        <Navbar></Navbar>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="border">
                <Leftsidenav></Leftsidenav>
            </div>
            <div className="lg:col-span-2 border">
                <h2 className="text-4xl">News coming soon</h2>
            </div>
            <div className="border">
                <Rightsidenav></Rightsidenav>
            </div>
        </div>
    </div>
  )
}

export default Home