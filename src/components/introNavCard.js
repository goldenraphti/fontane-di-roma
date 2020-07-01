import React from 'react';
import { Link } from 'gatsby';

const IntroNavCard = (props) => {

    const navigationArr = [{ link: '/mapPage', text: 'Travel by Map' }, { link: '/photosGridPage', text: 'Travel by Photo' }, { link: '/storiesGridPage', text: 'Travel by Stories' }];

    return (
        <li
            style={{
                width: `calc( (30vh / 1.497)  * 3)`,
                height: '100%'
            }}
            className='central-card flex justify-center bg-white p-4 flex flex-col justify-between '>
            <div>
                <h1 className='mb-2 text-3xl text-center'>Fontane di Roma</h1>
                <p>Explore Roma through photography cartography and short stories.
        Sit down, relax, and travel. Live the twelve stories, twelve destinies, twelves photography. Taking place in real spots of Roma.</p>
            </div>
            <nav className='flex justify-between mb-4'>
                {navigationArr.map(link =>
                    <Link
                        key={link.link}
                        to={link.link}
                        className='text-black border rounded border-pink-300 py-3 px-6 hover:shadow-sm hover:border-gray-700'>{link.text}</Link>
                )}
            </nav>
        </li>
    )
}

export default IntroNavCard;
