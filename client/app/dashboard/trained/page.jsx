import Head from "../components/Head";
import Sidebar from "../components/Sidebar";
import Trained from "../components/trained";


const Home = () => {
    return ( 
        <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-grow">
          {/* Head component */}
          <Head />
        <Trained/>
        </div>
      </div>
     );
}
 
export default Home;
