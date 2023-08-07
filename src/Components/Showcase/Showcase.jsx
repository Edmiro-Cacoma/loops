import interative from "../../Assets/images/desktop/image-interactive.jpg";
import interativeMobile from "../../Assets/images/desktop/image-interactive.jpg";

const Showcase = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-start mt-10 md:mb-16 mb-8 ">
      <div>
        <img
          src={interative}
          alt=""
          className="hidden md:block max-w-full h-auto relative -z-1 left-32"
        />
        <img
          src={interativeMobile}
          alt=""
          className="md:hidden max-w-full h-auto p-4"
        />
      </div>
      <div className="relative md:top-36 flex flex-col items-center justify-center bg-white w-96 md:w-[32rem] md:h-[18rem] p-2 ">
        <h2 className="font-alata md:ml-4 text-center text-dark text-4xl md:text-5xl uppercase">
          The leader in interactive VR
        </h2>
        <p className=" font-alata text-center md:ml-4 font-[400] text-dark-gray text-lg mt-5">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};
export default Showcase;
