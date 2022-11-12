import React from 'react';

const Site = (props) => {
    return (
        <section id={'site' + props.shortTItle}>
            <div className='container'>
                <div className='specs'>
                    <h1>{props.title}</h1>
                    {props.children}
                </div>
                <div className='description'>
                    <h2>Challenges to Overcome:</h2>
                    {props.description}
                </div>
                <picture className='mac-picture'>
                    <source type="image/avif" srcSet={'./images/' + props.mac + '@2x.avif 2x, ./images/' + props.mac + '.avif 1x'} />
                    <source type="image/png" srcSet={'./images/' + props.mac + '@2x.png 2x, ./images/' + props.mac + '.png 1x'} />
                    <img src={'./images/' + props.mac + '@2x.png'} alt={'preview of ' + props.title + ' on a mac'} />
                </picture>
                <picture className='iphone-picture'>
                    <source type="image/avif" srcSet={'./images/' + props.phone + '@2x.avif 2x, ./images/' + props.phone + '.avif 1x'} />
                    <source type="image/png" srcSet={'./images/' + props.phone + '@2x.png 2x, ./images/' + props.phone + '.png 1x'} />
                    <img src={'./images/' + props.phone + '@2x.png'} alt={'preview of ' + props.title + ' on a phone'} />
                </picture>
            </div>
        </section>

    )
}

export default Site;