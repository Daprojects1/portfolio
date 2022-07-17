import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faCoffee, faContactBook, faFaceSmileBeam, faFaceSurprise, faHome, faPerson } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import RenderIf from '../components/ReusableComps/RenderIf'
import HomePage from '../components/Home'
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import PortfolioPage from '../components/Portfolio'
import ExperiencePage from '../components/Experience'
import ContactPage from '../components/Contact'
import Head from 'next/head'

export default function Home() {
  const { container,
    mainNav,
    pageBody,
    mainUl,
    portfolioCard,
    portfolioBody,
    projectsModal,
    modalBody,
    genFont,
    navFonts,
    borderWhite
  } = styles
  const [currentPage, setCurrentPage] = useState('Home')
const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  const pages = [
    {
      page: 'Home',
      font:faHome
    },
    {
      page: 'Projects',
      font:faFile
    },
    {
      page: 'Experience',
      font:faBrain
    },
    {
      page: 'About',
      font:faFaceSmileBeam
    }
  ]

  return (
    <div className={container}>
      <Head>
        <link rel='shortcut icon' href='codeSlash.svg'/>
      </Head>
      <nav className={mainNav}>
        <ul className={mainUl}>
          {pages.map((page, indx) => (
            <li className={`${currentPage === page.page && borderWhite}`}
              key={indx}
              onClick={() => handlePageChange(page.page)}
              // style={{ border: currentPage === page.page ? '1px solid white' : '' }}
              
            >{page.page}<FontAwesomeIcon icon={page.font} className={navFonts} /></li>
          ))}
        </ul>
      </nav>
      <div className={pageBody}>
        <RenderIf isTrue={currentPage === 'Home'}>
          <HomePage/>
        </RenderIf>
        <RenderIf isTrue={currentPage === 'Projects'}>
          <PortfolioPage/>
        </RenderIf>
        <RenderIf isTrue={currentPage === 'Experience'}>
          <ExperiencePage/>
        </RenderIf>
        <RenderIf isTrue={currentPage === 'About'}>
          <ContactPage/>
        </RenderIf>
      </div>
    </div>
  )
}
