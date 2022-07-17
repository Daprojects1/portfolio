import Modal from "react-responsive-modal"
import styles from '../../styles/Home.module.css'
import { useState } from "react"
import PortfolioModal from "./PortfolioModal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import GithubIcon from "../Icons/Github"
import { faDisplay, faPlay } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"

const PortfolioCard = ({ title, imgSrc, description, technologies, githubLink, websiteLink }) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [isClicked, setClicked] = useState(false)
    const handleOpen = () => setIsOpen(true)
    

    const handleClose = () => {
        if (isClicked) return
        setIsOpen(false)
    }
    const handleReRoute = (url) => {
        setClicked(true)
        router.push(url)
    }
    const {portfolioCard, accessProject,githubIcon,genFont} = styles
    return (
        <>
           <div className={portfolioCard}>
                <h2>{ title}</h2>
                <img src={imgSrc} />
                <div className={accessProject}>
                    <GithubIcon width={30} height={30} className={githubIcon} onClick={()=>handleReRoute(githubLink)} />
                    <FontAwesomeIcon icon={faPlay} className={genFont} onClick={()=>handleReRoute(websiteLink)} />
                </div>
                {/* <p>Try it out !</p> */}
            </div>
            <PortfolioModal
                isOpen={isOpen}
                title={title}
                handleClose={handleClose}
                description={description}
                technologies={technologies}
            />
        </>
    )
}

export default PortfolioCard