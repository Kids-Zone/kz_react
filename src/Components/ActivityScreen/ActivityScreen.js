import './ActivityScreen.css'
import '../SessionOverview/SessionOverview.css'
import SessionOverview from '../SessionOverview/SessionOverview.js'
import SessionOverviewDrum from '../SessionOverview/SessionOverviewDrum.js'
import SessionOverviewDance from '../SessionOverview/SessionOverviewDance.js'

const ActivityScreen = props => <div>
 
    <main role="main">
       <SessionOverviewDance></SessionOverviewDance>
    </main>
</div>


export default ActivityScreen