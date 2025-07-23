import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import "../styles/Home.css";

function Home() {
    
    return (
        <div className="home">
            <LeftPanel></LeftPanel>
            <RightPanel></RightPanel>
        </div>
    )
}

export default Home;