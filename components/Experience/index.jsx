import styles from '../../styles/Home.module.css'
import TechIcons from '../Icons/TechIcons'

const ExperiencePage = () => {
    const { experiencePage, relevantExperience, skills, genFont, skillsBody } = styles
    const skillsTech = ['React', 'Sass', 'Css3','Html5','Javascript']
    return (
        <div className={experiencePage}>
            <h2>Relevant Experience</h2>
            <div className={relevantExperience}>
                <p><strong>Junior developer at Outfts</strong> from January 2022 - July 2022</p>
                <ul>
                    <li>Developing user interfaces in Next Js.</li>
                    <li>API consumpution - Graph Ql API.</li>
                    <li>Implementing CRUD webpages.</li>
                    <li>Consulting with lead developers on code efficiency.</li>
                    <li>Intergration of new code with existing codebase.</li>
                </ul>
                <div className={skills}>
                    <h2>Skills</h2>
                    <div className={skillsBody}>
                        {skillsTech.map((tech, indx) => (
                            <TechIcons key={indx} iconType={tech}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePage