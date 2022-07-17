import PortfolioCard from "../ReusableComps/PortfolioCard"
import styles from '../../styles/Home.module.css'


const descriptions = {
    searchEngine: {
        title: 'Search Engine',
        src:'/searchEngine.jpg',
        text: `A simple text engine where, including images and news section !`,
        tech: ['Next Js', 'Css', 'Rest Api'],
        githubLink: 'https://github.com/Daprojects1/search-engine',
        websiteLink:'https://bestsearch.netlify.app/'
    },
    Battleship: {
        title: 'Battleship',
        src:'/battleship.jpg',
        text: `Have a go in this must play battleship game, where you will go against the computer to sink each others ships!`,
        tech: ['Javascript', 'Css', 'Html'],
        githubLink: 'https://github.com/Daprojects1/BattleShip-2',
        websiteLink:'https://daprojects1.github.io/BattleShip-2/'
    },
    snake: {
        title: 'Snake',
        src:'/snake.jpg',
        text: `A rendition of the popular oldschool snake game!`,
        tech: ['Html','Css','Javascript'],
        githubLink: 'https://github.com/Daprojects1/search-engine',
        websiteLink:'https://daprojects1.github.io/Snake/'
    }
}

const PortfolioPage = () => {
    const {portfolioBody} = styles
    return (
        <div className={portfolioBody}>
            {Object.values(descriptions).map((des,indx) => (
                <PortfolioCard
                    key={indx}
                    title={des.title}
                    imgSrc={des.src}
                    description={des.text}
                    technologies={des.tech}
                    githubLink={des.githubLink}
                    websiteLink={des.websiteLink}
                />
            ))}
        </div>
    )
}

export default PortfolioPage