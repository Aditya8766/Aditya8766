import './footer.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer=()=>{
    return(
        <div className='footer'>
            <div className='left-section'>
                <span>Contact</span>
                <span>8766971902</span>
            </div>
            <div className='middle-section'>
                ©️ 2023 Aditya Bhosale | Made In India With ❤️ 
                <div className='icons'>
                    <span><a href="https://github.com/Aditya8766"><GitHubIcon /></a></span>
                    <span><a href="https://www.linkedin.com/in/aditya-bhosale-107682249/"><LinkedInIcon /></a></span>
                    <span><a href="https://www.instagram.com/ad_itya6370/"><InstagramIcon/></a></span>
                </div>
            </div>
            <div className='right-section'>
                <span>Email</span>
                <span>aditya.bhosale7517@gmail.com</span>
            </div>
        </div>
    );
}
export default Footer;