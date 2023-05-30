import React from 'react';
// import '../styles/style.css';
import { Container } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact">
       <div className="contactbackground">
        <Container>
          <h2 className="contacthead">Let's Build Together</h2>
          <p className="contactpara">
          Open to collaborating on innovative projects.
          Feel free to reach out to me on LinkedIn
          </p>
          <button
            className="contactbtn"
            onClick={() => {
              window.open("https://www.linkedin.com/in/lapuzshawn");
            }}
          >
            Say Hello
          </button>
          <span></span>
          <p className="copyright">
            <hr />


          </p>
         </Container>
    </div>
    
    </section>
    
  );
}

export default Contact;