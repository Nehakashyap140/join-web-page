import React from 'react';
import './Joinbody.css';

export default function Joinbody()
{
    return(
             <>
             <div className="container">
                <div className ="supply">
                    <h1>Join As A</h1>
                    <h1>Supply</h1>
                    <h1>Partner</h1>
                    <h1>(reBLISS Sathi / reBLISS Partner)</h1>

                    <p>reBLISS Supply partner </p>
                    <p>is somebody who wants </p>
                    <p>to work with reBLISS as </p>
                    <p>per choice of time, work</p> 
                    <p>& place.</p>
                    <button>Read more</button>
                </div>
                <div className ="sathi">
                    <h1>Join As A</h1>
                    <h1>reBLISS</h1>
                    <h1>Merchant</h1>
                    <h1>Sathi</h1>
                    <p>If you are having a</p>
                    <p>store(Download the</p>
                    <p>reBLISS app , complete</p>
                    <p>sign-up as a reBLISS</p>
                    <p>Sathi & Click on the</p>
                    <p>option "Do you have a</p>
                    <p>store" as "yes")</p>
                </div>
                <div className ="demand">
                    <h1>Join As A</h1>
                    <h1>Demand Partner</h1>
                    <p>reBLISS Demand Partner is a</p>
                    <p>company/organization that</p>
                    <p>want to scale up their</p>
                    <p>operations on variable model</p>
                    <p>through a team of reBLISS</p>
                    <p>Sathis spread occurs the</p>
                    <p>country. Benefits of becoming</p>
                    <p>a reBLISS Demand Partner :-</p>
                    <button>Read more</button>
                 <div classname = "form">
                    < input placeholder ="Organization/Company"/>
                    <br/>
                    <input placeholder = "Official Mail ID"></input>
                     <br/>
                    <input placeholder =  "Mobile NO"/>
                    <br/>
                    <input placeholder="Tell US Your Requirenment in Brief"/>
                    <br/>
                    <button>Submit</button>
                 </div>
                </div>
                </div>
             </>
    )
}