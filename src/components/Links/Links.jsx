import React from 'react';

const Links = () => {
  return (
    <section className="bg-violet-700 p-8 shadow-md">
      <div className="container mx-auto text-center text-white font-spaceMono">
        <h2 className="text-3xl font-bold mb-6">Contact & Social Links</h2>
        <ul className="space-y-4">
          <li>
            <a href="mailto:info@bingus.com" className="hover:text-purple-400">
              Official Email: info@bingus.com
            </a>
          </li>
          <li className="mt-8 text-lg italic">
            "Investing in Bingus is like buying happiness – but with memes!"
          </li>
          <li>
            <a href="https://twitter.com/yourprofile" className="hover:text-purple-400">
              Twitter
            </a>
          </li>
          <li className="mt-8 text-lg italic">
            "Follow us on Twitter for the latest updates and cat memes!"
          </li>
          <li>
            <a href="https://facebook.com/yourprofile" className="hover:text-purple-400">
              Facebook
            </a>
          </li>
          <li className="mt-8 text-lg italic">
            "Join our Facebook community – we promise it's funnier than your aunt's posts."
          </li>
          <li>
            <a href="https://linkedin.com/in/yourprofile" className="hover:text-purple-400">
              LinkedIn
            </a>
          </li>
          <li className="mt-8 text-lg italic">
            "Connect with us on LinkedIn and pretend to be professional with Bingus."
          </li>
          <li>
            <a href="https://instagram.com/yourprofile" className="hover:text-purple-400">
              Instagram
            </a>
          </li>
          <li className="mt-8 text-lg italic">
            "Check out our Instagram for daily doses of Bingus and giggles."
          </li>
          <li>
            <a href="https://telegram.me/yourprofile" className="hover:text-purple-400">
              Telegram
            </a>
          </li>
          <li className="mt-8 text-lg italic">
            "Join our Telegram channel – because laughter is the best currency."
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Links;
