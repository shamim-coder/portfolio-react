import React from "react";

const Skills = ({ skill }) => {
    return (
        <div className="progress">
            <p className="flex justify-between my-3">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className={`bg-theme h-2.5 rounded-full w-[${skill.level}%]`}></div>
            </div>
        </div>
    );
};

export default Skills;
