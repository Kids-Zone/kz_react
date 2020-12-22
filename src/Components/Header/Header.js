import './Header.css';

function Header(props) {
 return (
    <header className="header">
     <nav class="navbar navbar-dark fixed-top bg-primary navbar-expand-md">       
        <h1 className="logo">Kids Zone</h1>
        <ul className="desktop-list ">
         <li><a href="#" >Home</a></li>
         <li><a href="#" >Activities</a></li>
         <li><a href="#" >Mentoring</a></li>
         <li><a href="#" >About</a></li>
         <li><a href="#" >Login/Register</a></li>
        </ul>
        <ul className="mobile-list ">
         <i class="fa fa-home"></i>
         <i class="fa fa-cogs"></i>
         <i class="fas fa-chalkboard-teacher"></i>
         <i class="fa fa-info"></i>
         <i class="fa fa-users"></i>
     </ul>
    </nav> 
 </header> 
  );
}

export default Header;