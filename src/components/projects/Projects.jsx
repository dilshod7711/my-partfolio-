import { SiVercel } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import React from 'react'
import ebay from "../../assets/ebay.png"
import ConnectedDots from "../header/ConnectedDots.jsx";
import weather from "../../assets/weather.png"
import fabrx from "../../assets/fabrx.png" 
import medium from "../../assets/medium.png"
import cargo from "../../assets/cargo.png"
import me from "../../assets/me.png"
import morent from "../../assets/morent.png"
import wishlist from "../../assets/wishlest.png"
import plateform from "../../assets/plateform.png"
import medikel from "../../assets/medikel.png"
import shop from "../../assets/shop.png"
import watch from "../../assets/watch.png"
import studio from "../../assets/studio.png"
import warplay from "../../assets/warplay.png"
import beautybay from "../../assets/beautybay.png"
const Projects = () => {
  return (
    <>
      <ConnectedDots />
      <div className="mt-[100px] max-w-[1400px] mx-auto p-[50px]">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">My projects </h1>
          <br />
          <p className=" text-2xl text-[#cd5ff8] ">Here are a few projects I've worked on recently.</p>
        </div>
        <br /><br />
        <div className="grid grid-cols-3 gap-[50px]">
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={ebay} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Ebay</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/exam-ebay.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://exam-ebay-plum.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={weather} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Weather App </h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/Weather-App.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://weather-app-phi-liard-23.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={fabrx} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Fabrx</h1>

            <div className="flex justify-center  mt-8">
              <a href="#" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={medium} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Medium</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/main--medium.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://main-medium.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={cargo} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Cargo</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/pags.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://pags.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={me} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Hire me </h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/10-day-translate-page.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://10-day-translate-page.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={morent} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Morent</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/day-8.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://day-8-liard.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={wishlist} alt="Ebay Project" className="w-[400px] object-cover h-[200px]  " />

            <h1 className="text-xl font-semibold mt-4 text-center">Wishlist</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/TypeScript-Wishlist.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://type-script-wishlist.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={plateform} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">PLATEFORM</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/PLATEFORM.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://plateform-kappa.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={medikel} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Medikel</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/Medikel.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://medikel.vercel.app" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={shop} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Shop</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/Shop.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://shop-rho-vert.vercel.app" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={watch} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Watch Shop</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/Watch-Shop.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://watch-shop-two.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={studio} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">STUDIO</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/STUDIO.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://studio-weld-theta.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={warplay} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">warplay</h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod2007/warplay.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://warplay.vercel.app" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>
          <div className="max-w-[400px] bg-[ #3e05528d] text-white rounded-lg shadow-md p-4  shadow-[#cd5ff8] hover:shadow-[#cd5ff8] transform transition-transform duration-500 hover:scale-105">
            <img src={beautybay} alt="Ebay Project" className="w-[400px] object-cover h-[200px] " />

            <h1 className="text-xl font-semibold mt-4 text-center">Beauty Bay </h1>

            <div className="flex justify-center  mt-8">
              <a href="https://github.com/dilshod7711/Beauty-Bay.git" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <AiOutlineGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a href="https://beauty-bay-iota.vercel.app/" className="flex items-center gap-2 p-2 bg-purple-700 rounded-lg hover:bg-purple-900 transition">
                <SiVercel className="text-xl" />
                <span>vercel</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects