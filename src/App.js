import './App.css';
export default function App() {
return (
    <div className="App">
     <Snippets/>
    </div>
  );
}
function Snippets(){
  return(
 <section className="priceCard">
   {/* card 1 */}
    <div className="cards">
      <h4 className="firstLine">FREE</h4>
       <h1>$0<span className="priceText">/month</span></h1>
      <hr></hr>
   <ul> 
      <li><span><i className="fa fa-check"></i></span>Single User</li> 
       <li><span><i className="fa fa-check"></i></span>5GB Storage</li>
        <li><span><i className="fa fa-check"></i></span>Unlimited Public Projects</li>
         <li><span><i className="fa fa-check"></i></span>Community Access</li>
         <li className="lighterText"><span><i className="fa fa-times"></i></span>Unlimited Private Projects</li>
        <li><span><i className="fa fa-times"></i></span>Dedicated Phone Support</li>
       <li><span><i className="fa fa-times"></i></span>Free Subdomain</li>
      <li><span><i className="fa fa-times"></i></span>Monthly Status Reports</li>
   </ul>
   <div className="d-grid gap-2">
    <button className="btn btn-primary" type="button">BUTTON</button>
  </div>
</div>
{/* card 2 */}
    <div className="cards">
      <h4 className="firstLine">PLUS</h4>
      <h1>$9<span className="priceText">/month</span></h1>
    <hr></hr>
   <ul>
      <li><span><i className="fa fa-check"></i></span><b>5 Users</b></li>
       <li><span><i className="fa fa-check"></i></span>50GB Storage</li>
        <li><span><i className="fa fa-check"></i></span>Unlimited Public Projects</li>
        <li><span><i className="fa fa-check"></i></span>Community Access</li>
        <li><span><i className="fa fa-check"></i></span>Unlimited Private Projects</li>
       <li><span><i className="fa fa-check"></i></span>Dedicated Phone Support</li>
      <li><span><i className="fa fa-check"></i></span>Free Subdomain</li>
     <li className="lighterText"><span><i className="fa fa-times"></i></span>Monthly Status Reports</li>
   </ul>
   <div className="d-grid gap-2">
    <button className="btn btn-primary" type="button">BUTTON</button>
  </div>
</div>
{/* card 3*/}
    <div className="cards">
     <h4 className="firstLine">PRO</h4>
      <h1>$49<span className="priceText">/month</span></h1>
     <hr></hr>
   <ul>
      <li><span><i className="fa fa-check"></i></span><b>Unlimited Users</b></li>
       <li><span><i className="fa fa-check"></i></span>150GB Storage</li>
        <li><span><i className="fa fa-check"></i></span>Unlimited Public Projects</li>
         <li><span><i className="fa fa-check"></i></span>Community Access</li>
         <li><span><i className="fa fa-check"></i></span>Unlimited Private Projects</li>
       <li><span><i className="fa fa-check"></i></span>Dedicated Phone Support</li>
      <li><span><i className="fa fa-check"></i></span><b>Unlimited </b>Free Subdomain</li>
     <li><span><i className="fa fa-check"></i></span>Monthly Status Reports</li>
   </ul>
   <div className="d-grid gap-2">
     <button className="btn btn-primary" type="button">BUTTON</button>
   </div>
 </div> 
</section>
  );
}
