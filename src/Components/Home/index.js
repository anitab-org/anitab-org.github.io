import React from 'react';
import GettingStarted from './GettingStarted';
import OurProjects from './OurProjects';
import OpenSourcePrograms from './OpenSourcePrograms';
import WaysToContribute from './WaysToContribute';
import { ParentContainer} from './styles';
import { getHome } from './../../content/home';

const home = getHome();
const {sections} = home;
function Home(){
    
    return(        
            <ParentContainer>
                <GettingStarted content={sections[0]}/>
                <WaysToContribute content={sections[1]}/>
                <OurProjects content={sections[2]}/>
                <OpenSourcePrograms content={sections[3]}/>
            </ParentContainer>
    );
}

export default Home;