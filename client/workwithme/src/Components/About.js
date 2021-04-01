import React from "react";
//import the images with a potato word first then call file path and filename from 
//the folder "AboutCardImgs" inside "Components" 
import FemaleRountTable from '../Components/AboutCardImgs/christina-wocintechchat-com-0hGVZGBnW7U-unsplash.jpg'
import PairCoding from '../Components/AboutCardImgs/surface-Ze1s1X_DTXc-unsplash.jpg'
import TeamBuilding from  '../Components/AboutCardImgs/christina-wocintechchat-com-YCrgxs3e9lY-unsplash.jpg'



function About() {



    return (

        <div className="text-container">
            {/* <div></div> */}
            <div className="about-header-container">
                 <h1 className="about-header"> <br></br>What is Work With Me?</h1>
            </div>
            <div className="about-span">
                <span>Work With Me came to life as a result from the pandemic.</span>
                <span> Many jobs are becoming remote and so many people are just working at home, alone.</span>
                <span> What if you could join other remote workers in their working bubble? </span> 
                <span> Or simply create your own bubble?</span>
                <div>
                <img className="card1" src={TeamBuilding} alt="Card image cap" />
        </div>
        </div>

            {/* This was added for the image cards inside the text container, there are 3 sections*/}
            {/* <div className="about-image-cards">
                <div className="about-card1"> 
                    <div className="card" style={{width: "50%"}}>
                        <img className="card-img-top" src={FemaleRountTable} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className="about-card2"> 
                    <div className="card" style={{width: "50%"}}>
                        <img className="card-img-top" src={PairCoding} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className="about-card3"> 
                    <div className="card" style={{width: "50%"}}>
                        <img className="card-img-top" src={TeamBuilding} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>

        

    )

}

export default About;

{/*  */}