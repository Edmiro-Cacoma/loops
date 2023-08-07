import curiosity from "../../Assets/images/desktop/image-curiosity.jpg";
import deepEarth from "../../Assets/images/desktop/image-deep-earth.jpg";
import fisheye from "../../Assets/images/desktop/image-fisheye.jpg";
import fromAbove from "../../Assets/images/desktop/image-from-above.jpg";
import grid from "../../Assets/images/desktop/image-grid.jpg";
import nightArcade from "../../Assets/images/desktop/image-night-arcade.jpg";
import pocketBorealis from "../../Assets/images/desktop/image-pocket-borealis.jpg";
import soccerTeam from "../../Assets/images/desktop/image-soccer-team.jpg";

import curiosityMobile from "../../Assets/images/mobile/image-curiosity.jpg";
import deepEarthMobile from "../../Assets/images/mobile/image-deep-earth.jpg";
import fisheyeMobile from "../../Assets/images/mobile/image-fisheye.jpg";
import fromAboveMobile from "../../Assets/images/mobile/image-from-above.jpg";
import gridMobile from "../../Assets/images/mobile/image-grid.jpg";
import nightArcadeMobile from "../../Assets/images/mobile/image-night-arcade.jpg";
import pocketBorealisMobile from "../../Assets/images/mobile/image-pocket-borealis.jpg";
import soccerTeamMobile from "../../Assets/images/mobile/image-soccer-team.jpg";

const Gallery = () => {
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="hidden md:flex md:w-[68rem] md:flex-row md:justify-between md:items-center ">
          <div>
            <h1 className="font-josefin text-black text-5xl"> Our creations</h1>
          </div>

          <div className="">
            <a
              href="/"
              className="hover:bg-black hover:text-white transition-colors duration-300  border text-lg text-very-dark-gray font-[300] font-alata uppercase tracking-widest border-dark-gray px-8 py-2"
            >
              See all
            </a>
          </div>
        </div>

        <div className="md:hidden">
          <h1 className="font-josefin text-black text-5xl"> Our creations</h1>
        </div>
        <div className="hidden md:grid md:grid-cols-4 md:gap-6 md:mt-12">
          <div>
            <img src={deepEarth} alt="" />

            <div className="hvr-grow relative md:w-40 z-10 md:-top-28 md:left-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                Deep earth
              </span>
            </div>
          </div>
          <div>
            <img src={nightArcade} alt="" />
            <div className="relative md:w-40 z-10 md:-top-28 md:left-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                Night arcade
              </span>
            </div>
          </div>

          <div>
            <img src={soccerTeam} alt="" />
            <div className="relative md:w-40 z-10 md:-top-28 md:left-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                Soccer team VR
              </span>
            </div>
          </div>
          <div>
            <img src={grid} alt="" />
            <div className="relative md:w-32 z-10 md:-top-28 md:left-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                The grid
              </span>
            </div>
          </div>
          <div>
            <img src={fromAbove} alt="" />
            <div className="relative md:w-48 z-10 md:-top-28 md:left-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                From up above VR
              </span>
            </div>
          </div>
          <div>
            <img src={pocketBorealis} alt="" />
            <div className="relative md:w-40 z-10 md:-top-28 md:left-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                Pocket borealis
              </span>
            </div>
          </div>

          <div>
            <img src={curiosity} alt="" />
            <div className="relative md:w-40 z-10 md:-top-28 md:left-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                The curiosity
              </span>
            </div>
          </div>
          <div>
            <img src={fisheye} alt="" />
            <div className="relative md:w-40 z-10 md:-top-28 md:left-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                Make it fisheye
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 p-5 md:hidden">
          <div>
            <img src={deepEarthMobile} alt="" className=" " />
            <div className="relative -top-24 w-20 left-5 z-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                Deep earth
              </span>
            </div>
          </div>
          <div>
            <img src={nightArcadeMobile} alt="" className="" />
            <div className="relative -top-24 w-20 left-5 z-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                Night arcade
              </span>
            </div>
          </div>
          <div>
            <img src={soccerTeamMobile} alt="" className="w-full " />
            <div className="relative -top-24 w-40 left-5 z-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                Soccer team VR
              </span>
            </div>
          </div>
          <div>
            <img src={gridMobile} alt="" className="w-full " />
            <div className="relative -top-24 w-20 left-5 z-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                The grid
              </span>
            </div>
          </div>

          <div>
            <img src={fromAboveMobile} alt="" className="w-full " />
            <div className="relative -top-24 w-44 left-5 z-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                From up above VR
              </span>
            </div>
          </div>
          <div>
            <img src={pocketBorealisMobile} alt="" className="w-full " />
            <div className="relative -top-24 w-20 left-5 z-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                Pocket borealis
              </span>
            </div>
          </div>
          <div>
            <img src={curiosityMobile} alt="" className="w-full " />
            <div className="relative -top-24 w-20 left-5 z-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                The curiosity
              </span>
            </div>
          </div>
          <div>
            <img src={fisheyeMobile} alt="" className="w-full " />
            <div className="relative -top-24 w-44 left-5 z-10">
              <span className="hvr-pulse text-white uppercase text-4xl">
                Make it fisheye
              </span>
            </div>
          </div>
        </div>
        <div className="md:hidden ">
          <a
            href="/"
            className="hover:bg-black hover:text-white transition-colors duration-300 border text-lg text-very-dark-gray  font-[300]font-alata uppercase tracking-widest border-dark-gray px-8 py-2"
          >
            See all
          </a>
        </div>
      </section>
    </>
  );
};
export default Gallery;
