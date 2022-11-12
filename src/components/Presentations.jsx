import React from 'react';
import Presentation from './Presentation';

const Presentations = (props) => {
    return (
        <section id='presentations'>
            <div className='container'>
                <h1>Presentations</h1>
                <div className='presentation-list'>
                    <Presentation presentation={'Fail Even Faster: Utilizing Personas & Paper Prototypes'} organization={'Nebraska.Code()'} year={'2022'}>
                    After presenting "Fail Faster" I thought it would be neat to do a deeper dive into personas and paper prototyping thoroughly. I tought the students some general guidelines and examples and then we broke into groups and crafted our own paper prototypes based on provided personas.
                        <br /><br />
                        <a href='https://docs.google.com/presentation/d/16-QMazWnXYCl0Ksv_Tw-uYSgkbMX8dY4/edit?usp=sharing&ouid=111885317479460705505&rtpof=true&sd=true' target="_blank" rel="noreferrer">Click here</a> to view slide deck
                    </Presentation>
                    <Presentation presentation={'Animation on the web'} organization={'Nebraska.Code()'} year={'2021'}>
                        I went over how to animate elements through CSS, Greensock (GSAP), Lottie (with Adobe After Effects), and Adobe Animate. I explained how CSS Animation works and gave some general guidelines on saving resources when animating.
                        <br /><br />
                        <a href='https://github.com/shellwe/animation-presentation' target="_blank" rel="noreferrer">Click here</a> to view the Github Repository
                    </Presentation>
                    <Presentation presentation={'Getting Started With Headless WordPress'} organization={'Nebraska.Code()'} year={'2019'}>
                        For the first time Wordpress natively supported a headless system freeing the user to use whatever frontend framework they wanted with REST. I also went over headless Drupal as well.
                        <br /><br />
                        <a href='https://docs.google.com/presentation/d/16-QMazWnXYCl0Ksv_Tw-uYSgkbMX8dY4/edit?usp=sharing&ouid=111885317479460705505&rtpof=true&sd=true' target="_blank" rel="noreferrer">Click here</a> to view slide deck
                    </Presentation>
                    <Presentation presentation={'Headless Drupal'} organization={'UNL Developers Forum'} year={'2019'}>
                    With the University of Nebraska–Lincoln using Drupal I thought that this would be a good topic to go over. The concepts were similar to the Headless WordPress presentation but I focused on Drupal and the options that are available. After the presentation I answered questions from the fellow UNL staff members on the benefits of headless Drupal.
                        <br /><br />
                        <a href='https://docs.google.com/presentation/d/16-QMazWnXYCl0Ksv_Tw-uYSgkbMX8dY4/edit?usp=sharing&ouid=111885317479460705505&rtpof=true&sd=true' target="_blank" rel="noreferrer">Click here</a> to view slide deck
                    </Presentation>
                    <Presentation presentation={'Getting Good with Grid'} organization={'Nebraska.Code()'} year={'2018'}>
                        I gave this presentation as CSS Grid was just starting to get popular. I went over the basic concepts of Grid and showed the audience various instances where Grid could achieve something better than Flexbox or other CSS layout styles can and helped people wrap their mind around 2 directional layouts.
                    </Presentation>
                    <Presentation presentation={'Fail Faster: Utilizing UX To Save You Headaches Later'} organization={'Nebraska.Code()'} year={'2017'}>
                        In this session I discused the importance of failing faster in the planning stages. I went over User Centered Design. Some topics I discussed were mock ups, personas, analysis, user testing, prototypes and several other UX techniques.
                        <br /><br />
                        <a href='https://docs.google.com/presentation/d/15xjDENYkCShZiHgnb9COpmmsfmfS6pTo/edit?usp=sharing&ouid=111885317479460705505&rtpof=true&sd=true' target="_blank" rel="noreferrer">Click here</a> to view slide deck
                    </Presentation>
                </div>
            </div>
        </section>
    )
}

export default Presentations;