import React from 'react';
import { css } from '@emotion/react';
import { SyncLoader } from 'react-spinners';
import './loader.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const LoadingPage = () => {
  const loadingMessages = [
    "Loading... and did you know that a group of flamingos is called a 'flamboyance'? We're just a 'loading page,' but we like the sound of that!",
    "While you wait, here's a fun fact: The longest recorded flight of a chicken is 13 seconds. Your content is aiming for a much longer stay!",
    "Loading... and considering that honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old. Your content will be here much sooner than that!",
    "Did you know that the world's largest desert is not the Sahara but Antarctica? It's a frozen desert! Your content is on its way, and it's not frozen.",
    "Loading... and just thinking about how amazing it is that the internet is powered by thousands of undersea cables spanning the globe. Your data is traveling the world to reach you!",
    "While you wait, here's a fun fact: The Eiffel Tower can be 15 cm taller during the summer due to the expansion of iron in the heat. We promise your content won't grow that much!",
    "Loading... and remembering that the shortest war in history was between Britain and Zanzibar in 1896. It lasted only 38 minutes! We promise your wait won't be that short.",
    "Did you know that the world's fastest supercomputer can perform more than 442 quadrillion operations per second? We're not quite there yet, but we're working on it!",
    "Loading... and taking a moment to appreciate the complexity of the universe. Did you know there are more stars in the observable universe than grains of sand on all the beaches on Earth?",
    "While you wait, here's a fun fact: The human brain can process information as fast as 120 meters per second. We're working hard to catch up!",
    "Loading... and considering that a single cloud can weigh more than a million pounds. Imagine waiting for that to pass! Your content is much lighter.",
    "While you wait, here's a fun fact: A 'jiffy' is an actual unit of time, equivalent to the time it takes for light to travel one centimeter in a vacuum. Your content will be here in a few 'jiffies'!",
    "Loading... and pondering the fact that honeybees can recognize human faces. Your content recognizes you're waiting and will be here soon!",
    "Did you know that the first computer programmer was Ada Lovelace in the 1800s? We've come a long way since then, but your content is almost ready!",
    "Loading... and thinking about the fact that a group of owls is called a parliament. We're just missing the wise part. Your content, however, is wise and on its way!",
    "While you wait, here's a fun fact: Cows have best friends and can become stressed when they are separated. Your content is happily staying together and loading!",
    "Loading... and marveling at the fact that there are more possible iterations of a game of chess than there are atoms in the observable universe. Your content is a unique move in this vast space!",
    "Did you know that the Great Wall of China is not visible from the moon with the naked eye? Your content might not be visible from space, but it's coming!",
    "Loading... and contemplating the fact that a group of penguins is called a 'colony,' and they propose to their mates with pebbles. Your content is proposing to your attention shortly!",
 
    "Loading... and considering that a day on Venus is longer than a year on Venus. Your wait is definitely shorter than a Venusian day!",
    "While you wait, here's a fun fact: A 'jiffy' is an actual unit of time, equivalent to the time it takes for light to travel one centimeter in a vacuum. Your content will be here in a few 'jiffies'!",
    "Loading... and pondering the fact that honeybees can recognize human faces. Your content recognizes you're waiting and will be here soon!",
    "Did you know that the first computer programmer was Ada Lovelace in the 1800s? We've come a long way since then, but your content is almost ready!",
    "Loading... and thinking about the fact that a group of owls is called a parliament. We're just missing the wise part. Your content, however, is wise and on its way!",
    "While you wait, here's a fun fact: Cows have best friends and can become stressed when they are separated. Your content is happily staying together and loading!",
    "Loading... and marveling at the fact that there are more possible iterations of a game of chess than there are atoms in the observable universe. Your content is a unique move in this vast space!",
    "Did you know that the Great Wall of China is not visible from the moon with the naked eye? Your content might not be visible from space, but it's coming!",
    "Loading... and contemplating the fact that a group of penguins is called a 'colony,' and they propose to their mates with pebbles. Your content is proposing to your attention shortly!",
    
];

  const [visibletext, setVisibletext] = React.useState(loadingMessages[0]);
 
  React. useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <loadingMessages.length) {
        setVisibletext(loadingMessages[index]);
        index++;
      } else {
        
        setVisibletext("Taking longer than expected... Please check your internet connection and try again.");
      }
    }, 10000); // Adjust the interval to control the typing speed
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="loading-page">
      <div className="loading-animation">
        <SyncLoader css={override} size={10} color={'#36D7B7'} loading={true} />
        <div className='font-bold  text-center'>{visibletext}</div>
      </div>
    </div>
  );
};

export default LoadingPage;
