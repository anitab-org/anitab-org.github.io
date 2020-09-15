import React from 'react';
import { MainContainer } from './styles';
import ImageTextSection from '../ImageTextSection';

function GettingStarted({content}){
    return(
        <MainContainer>
            <ImageTextSection
                title = {content.title}
                imageSide = {'right'}
                image = {content.image.source}
                content = {content.content}
                imageHeight = {208}
            />
        </MainContainer>
    );
}

export default GettingStarted;