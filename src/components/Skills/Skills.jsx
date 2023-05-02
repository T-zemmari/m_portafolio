import React, { useEffect } from 'react';
import { skillsImages } from './Images-skills';
import Aos from 'aos';
import './Skills.css';


const Skills = () => {


    useEffect(() => {

        Aos.init({ duration: 1500 })
    }, [])

    return (
<>
        <div className="skils-container" id='skills' >

            <div className="vista-skills" data-aos='fade-left'>

                {skillsImages.map((image, id) =>
                    <div className='iconos-style' key={id}>
                        <img className='iconos-style' src={image.img} alt={image.alt} />
                    </div>)}

            </div>
        </div>
        </>
    )
}

export default Skills
