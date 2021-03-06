import bg from "../../pictures/bg.jpg";
import moon from "../../pictures/moon.png";
import mountain from "../../pictures/mountain.png";
import road from "../../pictures/road.png";
import './HeaderMobile.css'
import React, {useState, useEffect} from "react";


const HeaderMobile = () =>{

    let bg1 = document.getElementById("bg");
    let moon1 = document.getElementById("moon");
    let mountain1 = document.getElementById("mountain");
    let road1 = document.getElementById("road");


    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (

        <section className="Parallax">

            <div className="HeaderM"  style={{ transform: `translateY(-${offsetY * 0.8}px)` }}>
                <img src={bg} id="bg" style={{ transform: `translateY(${offsetY * 0.8}px)` }}/>
                <img src={moon} id="moonM"style={{ transform: `translateY(${offsetY * 1.2}px)` }}/>
                <img src={mountain} id="mountain" style={{ transform: `translateY(${offsetY * 0.5}px)` }}/>
                <img src={road} id="road"style={{ transform: `translateY(${offsetY * 0.5}px)` }} />
                <h2 id="textM" className="gradient-text">Dynamic Network Token.</h2>
                <h4 id="text1M" className="gradient-text"> Reducing Volatility</h4>
                <h4 id="text2M" className="gradient-text"> While Providing a Linear and Stable Growth.</h4>

            </div>

        </section>
    )


}
export default HeaderMobile;