import {SectionContainer} from "../Comp/SectionContainer";
import {SectionHeader} from "../Comp/SectionHeader";
import classnames from "classnames";
import {ExperienceContent} from "../../assets/data/Content";

const headerClassNameFunc = () => classnames("font-semibold md:text-6xl xs:text-5xl text-4xl text-primary",);


export function Experience() {

    return (
        <SectionContainer >
            <div className={"relative"}>
                <h2 className={headerClassNameFunc()}>What I Do?</h2>
                <hr className={classnames("w-20 mt-3 text-primary bg-primary w-25 h-1")}/>
                <span className={"z-1 absolute text-9xl dark:text-typo-light-100 text-typo-light-100 opacity-10 top-0"}>WHAT</span>
            </div>
            <div className={"grid md:grid-cols-3 mt-40 gap-20"}>

                {
                    ExperienceContent.map((elem, key) => (
                        <div className={"dark:bg-theme-dark-100 bg-theme-light-50 p-6 relative rounded-xl"}>
                            <div className={classnames("absolute h-16 w-16 rounded-full grid place-items-center dark:bg-gray-800 bg-gray-300 -top-6 text-3xl", elem.color)}>
                                {elem.icon}
                            </div>
                            <h3 className={classnames("mt-8 text-xl font-medium", elem.color)}>{elem.name}</h3>
                            <hr className={classnames("w-20 mt-3", elem.color)}/>
                            <p className={"text-typo-light-300 dark:text-typo-dark-100 mt-8"}>{elem.text}</p>
                        </div>
                    ))
                }
            </div>
        </SectionContainer>
    )
}