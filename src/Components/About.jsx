import React from 'react'

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt='' />
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo vitae veritatis labore magnam dolorem voluptas assumenda numquam cupiditate. Eligendi ex, tempore corporis reprehenderit doloremque iusto repellat? Nobis recusandae sit, eligendi esse pariatur obcaecati in id.</p>
                <butto>{props.button}</butto>
            </div>
        </div>
    )
}

export default About
