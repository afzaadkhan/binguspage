import React from 'react';

const Hero = () => {
  return (
    <div className=''>
      {/* Section 1 */}
      <section className="bg-violet-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-spaceMono">Welcome to Bingus</h2>
          <p className="mb-8 font-redditMono">
            Bingus - the cryptocurrency that doesn't take itself too seriously. Join the revolution of memes and laughter in the crypto space!
          </p>
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZ0OHZ4azdsZXlqaXhlbTN0YXVxa3lzeXMxNGZkdHhsemRreGNsMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Gd2rNu6879bd6/giphy.gif"
            alt="Bingus Logo"
            className="mx-auto mb-8 animate__animated animate__fadeInUp animate__delay-1s "
            style={{ maxWidth: '300px' }}
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-violet-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-spaceMono">Bingus Everywhere :)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjRjemczb3dqcmdoOTFmaDByYmprc2cydjVtMGFxcHBiMTRlaDZkZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WD590nJdXGQ15yzdyP/giphy.gif" alt="Meme 1" className="mx-auto mb-4 h-[230px]" />
              <p className="mb-4 font-redditMono">"When the market crashes but you're still holding Bingus."</p>
            </div>
            <div>
              <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGlta3F2Mm9tY3p1cG9tcDBqeDR4a3phOWtvbGJkbnkxamxjazkzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tg7asKLRO21icuI9J7/giphy.gif" alt="Meme 2" className="mx-auto mb-4 h-[230px]" />
              <p className="mb-4 font-redditMono">"The face you make when someone says they don't own Bingus."</p>
            </div>
            <div>
              <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGxoZ3ZlOGx4Y3hlNzkwcGswanNwYnA2aWhyeW5wMzhyZmtkaXZxdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GCDd0ieALivNHSXNwf/giphy.gif" alt="Meme 3" className="mx-auto mb-4 h-[230px] w-[230px]" />
              <p className="mb-4 font-redditMono">"Me checking my Bingus balance every hour."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-violet-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 font-spaceMono">Get Your Bingus Tokens Now!</h2>
          <a
            href="https://app.uniswap.org/#/swap?outputCurrency=YOUR_TOKEN_ADDRESS"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 transition-colors duration-200 hover:bg-yellow-600 text-white px-12 py-4 rounded-full font-bold inline-block font-spaceMono"
          >
            Buy Bingus on Uniswap
          </a>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-violet-500 text-white py-20">
        <div className="container mx-auto text-center">
          <img
            src="/src/images/binguslogo.png"
            alt="Bingus Image"
            className="mx-auto mb-8 rounded-lg"
            style={{ maxWidth: '500px' }}
          />
          <p className="text-lg font-redditMono">
            "Investing in Bingus - because laughing all the way to the bank is the best kind of investment strategy."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;