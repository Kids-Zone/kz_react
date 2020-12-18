import './SessionOverview.css'

const SessionOverview = props => <div>
 <div class="jumbotron jumbotron-detail-apple-pie container-fluid">
            <div class="container">
                <h1 class="display-3 text-white">Apple pie</h1>
            </div>
        </div>

        <div class="container">

            <h2>Cooking lesson this week is <small>A Christmas favourite, Apple pie.</small>
            </h2>

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

            <div class="row">
                <div class="col-md-4">
                    <div class="btn-toolbar">
                        <button class="btn btn-primary">Book now</button>  
                        <button class="btn btn-info">More Activities</button>
                    </div>
                </div>
            </div>
            <div class="p-4 mb-3 mt-2 bg-light rounded border border-primary">
                <h4>A quote from Martin - aged 11</h4>
                <p class="mb-0 font-italic">I made this for my family and they all loved it. It's so easy to follow the instructions.
                </p>
            </div>

            <h4 class="my-4">You might be interested in next week's cooking class, it's cheesecake!</h4>

            <div class="row">
                <div class="col-md-3 col-sm-6 mb-3">
                    <a href="cooking.html">
                        <img class="rounded-circle" height="100" width="100" src="../../images/cheesecakesmall.jpg" alt="cheesecake" />
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="btn-toolbar">
                        <button class="btn btn-primary">Book next week</button>  
                        <button class="btn btn-info">More Cooking</button>
                    </div>
                </div>
            </div>
        </div>

</div>


export default SessionOverview