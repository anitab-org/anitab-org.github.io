import React from 'react';
import { MainContainer } from './styles';
import ImageTextSection from '../ImageTextSection';

function GettingStarted({content}){
    return(
        <MainContainer>
            <ImageTextSection
                title = {content.title}
                image = {content.image.source}
                content = {content.content}
                imageHeight = {273}
            />
        </MainContainer>
    );
}

export default GettingStarted;