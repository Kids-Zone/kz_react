
import './MainSection.css';
import ActivitySection from '../ActivitySection/ActivitySection'

function MainSection(props) {
  return (
    <div className="main_section"> 
    <ActivitySection category="online" type={props.type}/>
    <ActivitySection category="premise" type={props.type}/>
    </div>
        
  );
}

export default MainSection;
