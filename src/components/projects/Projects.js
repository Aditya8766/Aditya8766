import './projects.scss';
import app from '../../assets/app.png';
import docAnalyzer from '../../assets/docAnalyzer.png';
import coachingClass from '../../assets/coachingClass.png';
import chatRooms from '../../assets/chatRooms.png';
const Projects=()=>{
    return(
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
                <div className="project-cards">
                    <div className="cards">
                        <img src={coachingClass} alt='coaching-class-mgmt'/>
                        <h3>Coaching Class Management</h3>
                        <a href='https://github.com/Aditya8766/coachingManagement'>checkout</a>
                    </div>
                    <div className="cards">
                        <img src={docAnalyzer} alt='doc-analyzer-img'/>
                        <h3>Document Analyzer</h3>
                        <a href='https://github.com/Aditya8766/DocumentAnalyzer'>checkout</a>
                    </div>
                    <div className="cards">
                    <img src={chatRooms} alt='chat-rooms-img'/>
                        <h3>Chat Rooms</h3>
                        <a href='https://github.com/Aditya8766/ChatRooms'>checkout</a>
                    </div>
                    <div className="cards">
                    <img src={app} alt='app-img'/>
                        <h3>React Native Frontend</h3>
                        <a href='https://github.com/Aditya8766/ReactNativeCourceFromMetaAssisment'>checkout</a>
                    </div>
                </div>
                <div className="divider"></div>
        </div>
    );
}
export default Projects;