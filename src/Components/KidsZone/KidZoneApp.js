import './KidZoneApp.css'
import '../SessionOverview/SessionOverview.css'
import SessionOverview from '../SessionOverview/SessionOverview.js'

const Header = props => <header class="">
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="images/bee.jpg" width="30" height="30" class="d-inline-block align-top" alt=""/>
                        Kids Zone Cooking Club</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="nav navbar-nav mr-auto">
                        <li class="nav-item ">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="allactivities.html">Activities</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="cooking.html">Cooking</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</header>


const KidZoneApp = props => <div>
    <Header></Header>
    <main role="main">
       <SessionOverview></SessionOverview>
    </main>
</div>


export default KidZoneApp