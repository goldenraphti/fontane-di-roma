import React from 'react';
import { Link } from 'gatsby';

const IntroNavCard = (props) => {

    const navigationArr = [{ link: '/mapPage', text: 'Travel by Map' }, { link: '/photosGridPage', text: 'Travel by Photo' }, { link: '/storiesGridPage', text: 'Travel by Stories' }];

    return (
        <li
            style={{
                '--grid-col':props.gridColumn,
                '--height-intro-card': props.heightIntroCard,
            }}
            className='central-card flex bg-white p-2 lg:px-8 flex-col justify-between items-stretch'>
            <div className='mb-6'>
                <h1 className='mb-2 text-2xl lg:text-4xl text-center'>Fontane di Roma</h1>
                <p>Explore Roma through photography cartography and short stories.
        Sit down, relax, and travel. Live the twelve stories, twelve destinies, twelves photography. Taking place in real spots of Roma.</p>
            </div>
            <div className='w-full flex justify-center'>
                <nav className={`max-w-lg w-full flex justify-between mb-4 gap-4 ${props.cardsPerRow === 3 ? 'flex-wrap' : ''}`}>
                    {navigationArr.map(link =>
                        <Link
                            key={link.link}
                            to={link.link}
                            className={`btn text-black rounded py-2 px-4 lg:py-3 lg:px-6 hover:border-pink-500 hover:shadow-sm ${props.cardsPerRow === 3 ? 'w-full' : ''}`}>{link.text}</Link>
                    )}
                </nav>
            </div>
        </li>
    )
}

export default IntroNavCard;
