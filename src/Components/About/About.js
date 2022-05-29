import React from "react";
import aboutImage from "../../Assets/about-image.png";
import Skills from "./Skills";

const About = () => {
    const skills = [
        { name: "Web Development", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "React JS", level: 90 },
        { name: "UX/UI Design", level: 65 },
    ];
    return (
        <section id="about" className="container">
            <div className="grid grid-cols-12 items-center py-28">
                <div className="col-span-6">
                    <img className="w-11/12" src={aboutImage} alt="" />
                </div>
                <div className="col-span-6">
                    <h4 className="text-lg text-theme-green font-bold mb-3">About Us</h4>
                    <h2 className="text-title-black text-4xl font-semibold mb-6">Why You Hire Me!</h2>
                    <p className="text-gray-700 mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quisquam nulla eaque rem nam veniam tenetur sunt vel totam harum blanditiis, porro voluptatibus doloribus aperiam obcaecati dolorum ab? Natus nobis mollitia
                        dicta. Nulla aspernatur consequatur rem fugit consectetur praesentium similique.
                    </p>
                    <div className="skills">
                        {skills.map((skill, index) => (
                            <Skills key={index} skill={skill}></Skills>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
