import React from 'react'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
const Contact = () => {
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        <div className='flexColStart c-left'>
          <span className='orangeText'>Our Contacts</span>
          <span className='primaryText'>Easy to contact us</span>
          <span className='secondaryText'>We always read to help by believe a good place to live can make you better</span>
          <div className='flexColStart contactModes'>
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdCall size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>+919900887766</span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  Call now
                </div>
              </div>
            </div>
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdCall size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Email</span>
                    <span className='secondaryText'>info@realestate.com</span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  Email Now
                </div>
              </div>
            </div>
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdCall size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Video Call</span>
                    <span className='secondaryText'>+919900887766</span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  Video Call now
                </div>
              </div>
            </div>
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdCall size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Message</span>
                    <span className='secondaryText'>+919900887766</span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  Message now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='c-right'>
          <div className='image-container'>
            <img src='./contact.jpg' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
