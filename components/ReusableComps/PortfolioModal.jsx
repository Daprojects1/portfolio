import Modal from "react-responsive-modal";
import styles from '../../styles/Home.module.css'


const PortfolioModal = ({ isOpen, title,handleClose, description,technologies=[] }) => {
    const { projectsModal, modalBody, technologiesBody } = styles
    return (
        <Modal
        open={isOpen}
        center
        classNames={{
          modal: projectsModal
        }}
        onClose={handleClose}
      >
        <div className={modalBody}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={technologiesBody}>
                    {/* <h3>Here is a list of the technologies used:</h3> */}
                    <ul>
                        {technologies?.map((tech, indx) => (
                            <li key={indx}>{tech}</li>
                        ))}
                    </ul>
                </div>
        </div>
      </Modal>
    )
}

export default PortfolioModal