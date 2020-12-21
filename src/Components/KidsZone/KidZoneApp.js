import './KidZoneApp.css'
import '../SessionOverview/SessionOverview.css'
import SessionOverview from '../SessionOverview/SessionOverview.js'
import Header from '../Header/Header.js'


const KidZoneApp = props => <div>
    <Header></Header>
    <main role="main">
       <SessionOverview></SessionOverview>
    </main>
</div>


export default KidZoneApp