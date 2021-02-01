import React from 'react'
import "./About.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__content-top">
            <p className="about-title">The 1 in question</p>
          </div>
          <div className="about__content-bottom">
            <p className="about-content">
              Junior Full Stack Developer, Fanshawe grad, and intern. Hailing from London, Ontario, Canada, Nelson is a graduate from Internet 
              Applications & Web Development at Fanshawe College.
              <br></br><br></br>
              Charismatic. Avid learner. Ready to go. Nelson has the knowledge to fit right into your team. Extensive hands-on experience from 
              an outstanding internship and traditional education from a well-respected I.T. institution,
              he has touched on all topics within full stack web development. 
              <br></br><br></br>
              Nelson meshes well into any team and environment. With excellent life qualities learnt from customer service jobs, involvement 
              in over a decade of sports teams, and giving back to the community, he is an unique and charming individual with unmatched 
              enthusiasm and energy. In addition to taking the initiative to learn new things on his own, he loves to learn from others 
              and gives 110% when tasked with assignments. Nelson strives to be a better version of himself every new day.
              <br></br><br></br>
              $GME to the moon 🚀💎🙌 
              <br></br><br></br>
              <LinkedInIcon className={"icon"} onClick={() => window.open('https://www.linkedin.com/in/nelsonkhiev/')}/><GitHubIcon className={"icon"} onClick={() => window.open('https://github.com/nelsonk97/nk97')}/>
              <br></br><br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
