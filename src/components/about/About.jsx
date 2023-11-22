import React from "react";
import "./about.css";


function About() {
    return (
        <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            It is a long established fact that a reader will be distracted by the
            readable content.
          </p>
          <p className="a-desc">
          Meet Big Ferd, a seasoned full-stack web developer with an impressive track record spanning over two years. His diverse skill set encompasses HTML, CSS, JavaScript, ReactJS, Node.js, and Next.js. Deep Knowledge of Git, Big Ferd's hands-on experience in the field is a testament to his commitment to excellence.

With a touch of Big Ferd's expertise, your projects are destined for greatness. Imagine your ideas transforming into captivating digital realities through skillful code. Don't hesitate—take the first step toward turning your vision into a stunning online presence. Connect with us today and let's embark on this coding journey together 
          </p>
         
        </div>
      </div>
    )
}


export default About;