import React from "react";
import "../index.scss";

const SocialLink = () => {
  return (
    <div>
      <div class="social-links">
        <a
          href="https://www.facebook.com"
          target="_blank"
          aria-label="Visit our Facebook page"
          rel="noopener noreferrer"
        >
          <i class="fab fa-facebook" aria-hidden="true"></i>
          <span class="sr-only">Facebook</span>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          aria-label="Visit our Instagram profile"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram" aria-hidden="true"></i>
          <span class="sr-only">Instagram</span>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          aria-label="Visit our YouTube channel"
          rel="noopener noreferrer"
        >
          <i class="fab fa-youtube" aria-hidden="true"></i>
          <span class="sr-only">YouTube</span>
        </a>

        <a
          href="https://www.tiktok.com"
          target="_blank"
          aria-label="Visit our TikTok profile"
          rel="noopener noreferrer"
        >
          <i class="fab fa-tiktok" aria-hidden="true"></i>
          <span class="sr-only">TikTok</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
