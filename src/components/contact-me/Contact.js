import './contact.scss';
import email from '../../assets/email.gif';
import contact from '../../assets/contact.gif';
const Contact=()=>{
    return(
            <><h1>
            Contact me
        </h1><div className="contact-me">
                <div className='contact-me-gif'>
                    <img src={email} alt='contactMeGif' />
                </div>
                <div className='contact-form'>
                    <input placeholder='First Name' />
                    <input placeholder='Last Name' />
                    <input placeholder='Email' />
                    <input placeholder='Subject of Message' />
                    <button>Send Message</button>
                </div>
                <div className='contact-me-gif'>
                    <img src={contact} alt='contactMeGif' />
                </div>
            </div></>
    );
}
export default Contact;