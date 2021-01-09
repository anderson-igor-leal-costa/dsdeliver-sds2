import './styles.css'; 
import {ReactComponent as YoutubeIcon} from "./youtube.svg";
import {ReactComponent as LinkedinIcon} from "./linkedin.svg"
import {ReactComponent as InstagramIcon} from "./instagram.svg"

function Footer(){
    return(

            <footer className="main-footer">
                    App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            
                <div className="footer-icons">
                <a href="https://www.youtube.com/watch?v=OpWfkIhcBoY&feature=emb_title" target="_new">

                    <YoutubeIcon />

                </a>

                <a href="https://www.figma.com/file/sagWrEqbSarTcpE6Sybgtk/DSDeliver02?node-id=1%3A2" target="_new">
                <LinkedinIcon />

                </a>

                <a href="https://github.com/devsuperior/sds2/blob/master/aula2/home/styles.css" target="_new">
                <InstagramIcon />

                </a>


                </div>
            
            </footer>

            

    )
}

export default Footer;