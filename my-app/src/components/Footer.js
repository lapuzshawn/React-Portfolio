import React from 'react';
import '../styles/style.css';
import { Container } from 'react-bootstrap';
function Footer() {
  return (
    <footer bg="none">
      <div class="footer">
      <p align="center">
        <h5 align="center">Made with ❤️ by Shawn <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/24524555/238178097-766d336d-b87d-44ba-807c-c51de2bc6b4d.gif" width="28px" alt="👋"></img></h5>
          <a href="https://www.linkedin.com/in/lapuzshawn">
              <img src="https://img.shields.io/badge/LinkedIn-blue?style=flat-square&logo=linkedin" alt="LinkedIn"></img>
          </a>
          <a href="https://www.kaggle.com/">
              <img src="https://img.shields.io/badge/Kaggle-blue?style=flat-square&logo=kaggle" alt="Kaggle"></img>
          </a>
          <a href="https://leetcode.com/">
              <img src="https://img.shields.io/badge/LeetCode-blue?style=flat-square&logo=LeetCode" alt="LeetCode"></img>
          </a>
      </p>
      </div>
    </footer>
  );
}

export default Footer;
