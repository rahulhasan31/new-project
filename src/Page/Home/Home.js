import React from 'react';
import ExtraBanner from '../ExtraBanner';
import ExtraSection from '../ExtraSection';
import Banner from './Banner';
import PriceSection from './PriceSection';


const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <ExtraBanner></ExtraBanner>
             <ExtraSection></ExtraSection>
             <PriceSection></PriceSection>
        </div>
    );
};

export default Home;