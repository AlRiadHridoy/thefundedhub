import MotionX from "../ui/MotionX";
import { discord, mobile, circle } from "../ui/images";

export default function Discord() {
  return (
    <section className="discord pt-24 relative">
      <div className="container relative z-10">
        {/* Desktop version */}
        <div className="wrapper relative hidden sm:grid sm:grid-cols-2 gap-8 justify-center items-center md:px-6">
          <div className="left grid sm:flex flex-col justify-center items-center sm:items-start gap-6">
            <div className="img flex justify-center items-center">
              <MotionX delay={0.1}>
                <img
                  className="sm:w-[20rem] md:w-[25rem] w-full"
                  src={discord}
                  alt="discord"
                />
              </MotionX>
            </div>

            <div className="w-full grid justify-center sm:justify-start gap-3">
              <MotionX delay={0.2}>
                <p className="max-w-[30rem] text-center sm:text-start">
                  Where veteran and rookie traders all come together to talk
                  about the markets and keep up to date with all annoucements.
                </p>
              </MotionX>
              <MotionX delay={0.3}>
                <div className="mt-2 btn uppercase flex justify-center sm:justify-start">
                  <a
                    target="__blank"
                    href="https://discord.gg/GVXNaVTr"
                    className="uppercase font-Montserrat text-xs font-bold  px-12 md:px-7 bg-primary/20 sm:hover:bg-primary sm:bg-primary/80 transition-all duration-200 sm:bg-primary rounded-xl text-wht sm:text-dark h-[2.5rem] text-center flex justify-center items-center"
                  >
                    Join our Discord
                  </a>
                </div>
              </MotionX>
            </div>
          </div>

          {/* right */}
          <div className="right hidden w-full sm:flex justify-start relative z-10">
            <MotionX delay={0.3}>
              <img className="max-w-[28rem] w-full" src={mobile} alt="" />
            </MotionX>
          </div>
        </div>

        {/* Mobile version */}
        <div className="left relative grid sm:hidden flex-col justify-center items-center sm:items-start gap-3">
          <div className="img flex justify-center items-center relative z-10">
            <MotionX delay={0.1}>
              <img
                className="max-w-[22rem] md:w-[25rem] w-full -ml-6"
                src={mobile}
                alt="discord"
              />
            </MotionX>
          </div>

          <div className="w-full grid justify-center sm:justify-start gap-3 relative z-10">
            <MotionX delay={0.2}>
              <p className="max-w-[30rem] text-center sm:text-start font-codePro">
                Where veteran and rookie traders all come together to talk about
                the markets and keep up to date with all annoucements.
              </p>
            </MotionX>
            <MotionX delay={0.3}>
              <div className="mt-2 btn uppercase flex justify-center items-center ">
                <a
                  target="__blank"
                  href="https://discord.gg/GVXNaVTr"
                  className="uppercase max-w-[12rem] font-Montserrat text-center text-xs font-bold py-3 bg-white/70 hover:bg-white transition-all duration-200 rounded-3xl text-dark w-full"
                >
                  Join our Discord
                </a>
              </div>
            </MotionX>
          </div>

          {/* cirlce */}
          <img
            className="cirlce absolute -top-[70%] -left-[70%] !max-w-[100rem]  w-[100rem] rotate-[55deg] opacity-[0.05] sm:opacity-[0.1]"
            src={circle}
            alt=""
          />
        </div>
      </div>
      {/* cirlce */}
      <img
        className="cirlce absolute hidden sm:block -bottom-[25rem] -right-[6%] !max-w-[100rem]  w-[100rem] rotate-[80deg] opacity-[0.05]"
        src={circle}
        alt=""
      />
      {/* cirlce */}
      <img
        className="cirlce absolute -top-[30%] -left-[6%] !max-w-[100rem]  w-[100rem] rotate-[55deg] opacity-[0.06]"
        src={circle}
        alt=""
      />
      {/* cirlce */}
      <img
        className="cirlce absolute -top-[30%] -right-[20%] !max-w-[100rem] w-[80rem] rotate-[40deg] opacity-[0.08]"
        src={circle}
        alt=""
      />
    </section>
  );
}
