import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import './Value.css';
import data from '../../utils/accordion'
import {MdOutlineArrowDropDown} from 'react-icons/md'
const Value = () => {
  return (
    <section>
        <div className='paddings innerWidth flexCenter v-container'>
            <div className='flexCenter v-left'>
                <div className='image-container'>
                    <img src='./value.png' alt='Value Image' />
                </div>
            </div>
            <div className='flexColStart v-right'>
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value we give to you</span>
                <span className='secondaryText'>We always ready to help you by providing the best services for you.
                    <br/>
                    We believe a good place to live can make your life better. 
                </span>
                <Accordion className='accordion'
                allowMultipleExpanded={false} preExpanded={[0]}>
                    {
                        data.map((item,i)=>{
                            // const [classname,setClassname] = useState("");
                            return (
                                
                            <AccordionItem className={`accordion-item`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordion-button'>
                                        {/* <AccordionItemState>
                                            {({expanded})=>
                                            expanded?setClassname("expanded"):
                                            setClassname("collapsed")
                                            }
                                        </AccordionItemState> */}
                                        <div className='flexCenter icon'>{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className='flexCenter icon'>
                                            <MdOutlineArrowDropDown size={20}></MdOutlineArrowDropDown>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
      
    </section>
  )
}

export default Value
