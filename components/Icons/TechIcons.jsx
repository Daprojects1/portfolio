import styles from '../../styles/Home.module.css'
import RenderIf from '../ReusableComps/RenderIf'
import { FaReact,FaSass, FaCss3,FaHtml5, FaJs} from 'react-icons/fa'

const TechIcons = ({ iconType }) => {
    const {genFont} = styles
    return (
        <div className='TechIcon'>
            {iconType === 'React' && <FaReact className={genFont} />}
            {iconType === 'Sass' && <FaSass className={genFont} />}
            {iconType === 'Css3' && <FaCss3 className={genFont} />}
            {iconType === 'Html5' && <FaHtml5 className={genFont} />}
            {iconType === 'Javascript' && <FaJs className={genFont} />}
            <div className='iconType'>{ iconType}</div>
    </div>
    )
}

export default TechIcons