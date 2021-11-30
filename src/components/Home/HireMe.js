import {SectionContainer} from "../Comp/SectionContainer";
import {SectionHeader} from "../Comp/SectionHeader";
import {SectionRow} from "../Comp/SectionRow";
import AllImage from "../../assets/images/all.png";
import Image from "next/image";
import {SiFiverr, SiUpwork} from "react-icons/si";
import {FIVERR_PROFILE, UPWORK_PROFILE} from "../../assets/data/SocialLinks";
export const HireMe = () => {
  return(
      <SectionContainer className={"max-w-full dark:bg-theme-dark-100 bg-theme-light-100"}>
          <div className="container mx-auto mt-10 py-10">
              <SectionHeader header={"Hire Me"} text={"Hire me for your desired project"}/>
              <SectionRow className={"mt-16"}>
                <div className={"md:flex grid place-items-center"}>
                   <div className={"w-11/12"}>
                       <Image src={AllImage}  alt="Service Image"/>
                   </div>
                </div>
                <div className={"grid place-items-center"}>
                    <div className={"flex flex-col justify-between py-10 h-full"}>
                        <div className={"flex flex-row items-center"}>
                            <hr className={"w-28 bg-primaryLight border-primaryLight mr-4"}/>
                            <h4 className={"font-semibold text-sm text-primaryLight"}>My Services</h4>
                        </div>

                        <h2 className={"text-3xl md:mt-2 mt-6 dark:text-typo-dark-400 text-typo-light-400 font-medium"}>Hire me for your projects</h2>
                        <p className={"md:mt-2 mt-6 text-typo-light-200 dark:text-typo-dark-200"}>
                            I can ensure my expertise in software and web development field currently trying to move into mobile app development,
                            As I have several years of experience, I can make your desirable application with tons of features <br/>
                            Your App will be scalable, robust, as well as easy to upgrade and modular. I ensure the code quality and also security.
                            I hope I will be able to deliver you a great product that your business requires.
                        </p>
                        <div className={"md:mt-2 mt-6 flex flex-row"}>
                            <a target={"_blank"} href={UPWORK_PROFILE} className={"px-4 py-2 mr-8 rounded-full bg-green-600 text-white flex items-center hover:bg-green-700 transition-all"}>
                                <span className={"mr-2"}>Upwork</span> <SiUpwork/>
                            </a>
                            <a target={"_blank"} href={FIVERR_PROFILE} className={"px-4 py-2 rounded-full bg-green-500 text-white flex items-center text-xl hover:bg-green-700 transition-all"}>
                                <span className={"mr-2"}>Fiverr</span> <SiFiverr />
                            </a>
                        </div>
                    </div>
                </div>
              </SectionRow>
          </div>
      </SectionContainer>
  )
}