



export const FirstApp = () => {
    return (
        <div className="header_section">
        
           <nav className="navbar navbar-dark bg-white">
           <div className="container ">
              <a className="logo" href="index.html"><img src="/images/logotipo.svg" className="App-logo" alt="logo" /></a>
              <a className="btncontact" href="#">CONTACTO</a>
              </div>
            
           </nav>
        
        
        <div className="banner_section layout_padding">
           <div id="my_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                 <div className="carousel-item active">
                    <div className="container">
                       <div className="row">
                          <div className="col-md-6">
                             <div className="taital_main">
                                <h4 className="banner_taital">Experience Unlimited <br />
Calling Possibilities </h4>
                                <p className="banner_text">Make and receive local calls in Mexico from the comfort of your US phone. Say goodbye to costly international rates and hello to unlimited connections</p>
                                <div className="read_bt"><a href="#"><span>BUY NOW</span> <br />
Just US3$/month</a></div>
                             </div>
                          </div>
                          <div className="col-md-6">
                          <img src="/images/bannerprin.png" className="App-logo" alt="logo" />
                          </div>
                       </div>
                    </div>
                 </div>
                 
                
              </div>
              
           </div>
        </div>
        
     </div>
    );
  }
  