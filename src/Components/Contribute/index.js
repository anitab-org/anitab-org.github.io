import React from 'react';
import SectionHeader from '../SectionHeader';
import content from '../../content/contributeIntro.json';
import ImageContent from './../ImageContent';
import { MainContainer, Box, Content, Description } from './style';

function Contribute() {
    const renderContent = () => {
        return (
            <Box>
                {content.sections.map((section, index) => {
                    return (
                        <Content>
                            <SectionHeader title={section.title} />
                            {section.content.map((content) => {
                                return <Description>{content.par}</Description>;
                            })}
                        </Content>
                    );
                })}
            </Box>
        );
    };

    return (
        <MainContainer>
            <ImageContent
                image={require('../../assets/Frame 1.png')}
                imageSide="right"
                Children={renderContent}
            />
        </MainContainer>
    );
}

export default Contribute;
