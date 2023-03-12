import React from 'react';
import './features.style.scss';
import Feature from '../../layouts/feature/Feature';

import featureDish1 from "../../../assets/images/feature_dish1@2x.png";
import featureDish2 from "../../../assets/images/feature_dish2@2x.png";

function Features() {
  return (
    <section className='features'>
      <Feature
        header="about us"
        text="“Viridis et Fortis” means green and strong.
      The point of this extraordinary establishment
      is to open th eyes of people (both vegan and
      non-vegan) and to also introduce their taste
      buds to a plethora of intricate flavours and
      nutritional benefits of the vegan food"
        img={featureDish1}
        id="about"
      />
      <Feature
        header="why us"
        text="“Viridis et Fortis” is dedicated to saving the planet by suggesting you go green, and the way we’re going right now, we think we are achieving that one convincing plate at a time. What we are doing is helping them realize that vegetables equally have the qualities meat have. We give you a plate and you choose for yourself."
        img={featureDish2}
        className="left-align"
        id="why"
      />
    </section>
  );
}

export default Features;