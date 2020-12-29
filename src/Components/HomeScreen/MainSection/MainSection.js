
import './MainSection.css';
import Offering from '../Offering/Offering'

function MainSection(props) {
  return (
    <div className="main_section"> 
    <Offering category="online" type={props.type}/>
    <Offering category="premise" type={props.type}/>
    </div>
        
  );
}

export default MainSection;
