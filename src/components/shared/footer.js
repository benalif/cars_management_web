import React from "react";
import "assets/css/footer.css";

export const Footer = () => {
  return (
    <footer id="footer" class="footer">
      <div class="container">
        <div class="copyright">
          Company Name &copy; {new Date().getFullYear()}. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
