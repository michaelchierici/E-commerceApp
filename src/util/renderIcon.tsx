import React from 'react';
import MewIcon from '../assets/mewIcon.svg';
import PikachuIcon from '../assets/pikachuIcon.svg';
import JigglypuffIcon from '../assets/jigglypuffIcon.svg';
import BulbasaurIcon from '../assets/bulbasaurIcon.svg';
import SquirtleIcon from '../assets/squirtleIcon.svg';

interface IconTypes {
  type: string;
}

export function RenderIcon({type}: IconTypes) {
  switch (type) {
    case 'Grass': {
      return <BulbasaurIcon width={55} height={55} />;
    }
    case 'Psychic': {
      return <MewIcon width={55} height={55} />;
    }

    case 'Water': {
      return <SquirtleIcon width={55} height={55} />;
    }

    case 'Eletric': {
      return <PikachuIcon width={55} height={55} />;
    }
    case 'Fairy': {
      return <JigglypuffIcon width={55} height={55} />;
    }
    default: {
      return <PikachuIcon width={55} height={55} />;
    }
  }
}
