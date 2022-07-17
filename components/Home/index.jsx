import styles from "../../styles/Home.module.css"

const HomePage = () => {
    const { 
        introCard,
        home,
        secondPara,
        introP,
        hi,
        introBtn,
        introParagraphs
      } = styles
    return (
        <div className={home}>
            <div className={introCard}>
              <div className={introParagraphs}>
              <div className={introP}>
                <p >Hey there,</p>
                <p>my name is <span className={hi}><strong>David.</strong></span></p>
              </div>
              <p className={secondPara}>I am a front-end developer with experience in working with Javascript and Next Js.</p>
              </div>
          <div className={introBtn}>
            <a href="/portfolio-cv2.pdf" download>
              <button>See my CV</button>
            </a>
              </div>
        </div>
        </div>
    )
}

export default HomePage