import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-4 text-base-content mt-20 mb-5">
      <div>
        <p>&copy; {currentYear} E-Learning SMK Negeri 3 Malang</p>
        <p>
          Design with ❤️ by.{' '}
          <a
            href="http://qiffyamuhammad.my.id"
            rel="noopener noreferrer"
            target="_blank"
            className="text-teal-600">
            Qiff Ya Muhammad
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
