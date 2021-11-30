import {ContentImage, ObjectImage, ObjectNextImage} from "../Comp/Image";
import HomeImage from "../../assets/images/KhanAsfiReza.png"
import {HOC} from "../Comp/Hoc";
import {FaMouse} from "react-icons/fa";
import {SocialLinksJSXList} from "../../assets/data/SocialLinks";
import classNames from "classnames";
import {HomePageIntroName, HomePageIntroText, HomePageIntroTitle, HomePageObjects} from "../../assets/data/Content";

export default function ContentTop() {

    const h1ClassName = classNames(
        "text-typo-light-400 dark:text-typo-dark-400 font-bold 2xl:text-8xl md:text-7xl mob-xl:text-6xl text-5xl"
    )
    const h3ClassName = classNames(
        "mt-5 text-typo-light-400 dark:text-typo-dark-400 font-bold 2xl:mt-7 2xl:text-5xl md:text-4xl text-3xl"
    )

    const pClassName = classNames(
        "mt-5 2xl:mt-7  text-typo-light-100 dark:text-typo-dark-100"
    )

    return(
        <main className={"dark:bg-theme-dark-100 bg-theme-light-100"}>
            <main className={"relative grid lg:grid-cols-3 grid-cols-1 container m-auto lg:py-28 py-12 auto-cols-min h-full"}>
                {
                    HomePageObjects.map((each, key) => (<HOC key={key}>{each.element}</HOC>))

                }
                <div className={"mt-3 xL:ml-auto lg:order-2 order-1 lg:w-full w-10/12 m-auto auto-rows-min auto-cols-min"}>
                    <ContentImage src={HomeImage} divClassName={"relative"}>
                        <ObjectImage src={"/images/Bubble.png"} className={"z-50 absolute md:h-12 md:w-12 h-11 w-11 md:-top-2 md:left-2 -top-2 animate-float"}/>
                        <ObjectImage src={"/images/Bubble.png"} className={"z-50 absolute md:h-11 md:w-11 h-10 w-10 md:top-2 left-1/4 top-2 animate-float animation-delay-4"}/>
                    </ContentImage>

                </div>
                <div className={"lg:col-span-2 lg:order-1 order-2"}>
                    <div className={"grid justify-center grid-cols-1"}>
                        <div className={"grid md:grid-cols-12 grid-cols-1 auto-rows-min"}>
                            <div aria-label={"social links"} className={"order-2 md:order-1 flex md:flex-col flex-row justify-between auto-cols-min md:px-0 px-4 md:mt-0 mt-4 "}>
                                {
                                    SocialLinksJSXList.map(({name, className, icon, link}, key) => (
                                        <a  key={key}
                                            aria-label={`${name} link`}
                                            referrerPolicy={"strict-origin"}
                                            href={link}
                                            className={`text-xl md:mt-2 mr-3 ${className}`}
                                            target={"_blank"}

                                        >
                                            {icon}
                                        </a>
                                    ))
                                }
                            </div>

                            <div className={"order-1 md:order-2 col-span-11 md:mt-0 mt-4 md:text-left text-center"}>
                                <h2 className={h1ClassName}>Hi I'm <br/></h2>
                                <h1 className={`${h1ClassName} 2xl:mt-7 mt-5`}>{HomePageIntroName}</h1>
                                <h3 className={h3ClassName}>{HomePageIntroTitle}</h3>
                                <p className={pClassName}>
                                    {HomePageIntroText()}
                                </p>
                            </div>
                        </div>
                        <div className={"grid grid-cols-12 mt-16"}>
                            <div className={"grid md:col-start-2 col-span-12 md:place-items-start place-items-center"}>
                                <button className={"bg-primary text-white rounded-3xl px-4 py-2 w-44 flex flex-row items-center justify-center"}>Scroll Down<FaMouse/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </main>

    )
}