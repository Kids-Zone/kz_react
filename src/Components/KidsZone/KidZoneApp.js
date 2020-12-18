import './KidZoneApp.css'

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

const SessionOverview = props => <div>
 <div class="jumbotron jumbotron-detail-apple-pie container-fluid">
            <div class="container">
                <h1 class="display-3 text-white">Apple pie</h1>
            </div>
        </div>

        <div class="container">

            <h1>Cooking lesson this week is <small>A Christmas favourite, Apple pie.</small>
            </h1>

            <div class="row">
                <div class="col-md-4">
                    <h3 class="my-3">About this pie</h3>
                    <p>Perfect for Christmas day or as a gift.</p>
                    <h3 class="my-3">Ingredients</h3>
                    <ul>
                        <li>Apple</li>
                        <li>Sugar</li>
                        <li>Eggs</li>
                        <li>Milk</li>
                        <li>Butter</li>
                    </ul>
                    <div class="row">

                        <div class="col-md-4">
                            <strong>£3.00</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 mb-3 mt-2 bg-light rounded border border-primary">
                <h4>A quote from Martin - aged 11</h4>
                <p class="mb-0 font-italic">I made this for my family and they all loved it. It's so easy to follow the instructions.
     </p>
            </div>

            <h3 class="my-4">You might be interested in next week's cooking class, it's cheesecake!</h3>

            <div class="row">
                <div class="col-md-3 col-sm-6 mb-3">
                    <a href="cooking.html">
                        <img class="img-fluid" src="images/activities/cheesecakesmall.jpg" alt="cheesecake" />
                    </a>
                </div>
            </div>
        </div>

</div>

const KidZoneApp = props => <div>
    <Header></Header>
    <main role="main">
       <SessionOverview></SessionOverview>
    </main>
</div>


export const KidZoneComponent = props => <div>And I'm a component called {props.name}</div>

export default KidZoneApp