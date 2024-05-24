import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-violet-700 text-white py-6">
      <div className="container mx-auto text-center text-xs">
        <p>&copy; 2024 MemeCoin. All rights reserved.</p>
        <p className="mt-2">Token Contract Address: <span className="font-bold select-all ">0x1234567890abcdef1234567890abcdef12345678</span></p>
        <p className="mt-2">Contact: <a href="mailto:info@memecoin.com" className="underline">info@bingus.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
