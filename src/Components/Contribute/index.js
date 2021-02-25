import React from 'react';
import SectionHeader from '../SectionHeader';
import content from '../../content/contributeIntro.json';
import ImageContent from './../ImageContent';
import { MainContainer, Box, Content, Description } from './style';
import { Text, StyleSheet } from "react-native";
import FirstTimeIssues from '../FirstTimeIssues'


function Contribute() {
    const renderContent = () => {
        return (
            <Box>
                {content.sections.map((section, index) => {
                    return (
                        <Content key={index}>
                            <SectionHeader title={section.title} />
                            {section.content.map((content,index) => {
                                return <Description key={index}>{content.par}</Description>;
                            })}
                        </Content>
                    );
                })}
            </Box>
        );
    };

    return (
        <>
            <MainContainer>
                <ImageContent
                    image={require('../../assets/Frame 1.png')}
                    imageSide="right"
                    Children={renderContent}
                />
            </MainContainer>
            <FirstTimeIssues/>
        </>
    );
}

export default Contribute;
