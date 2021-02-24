import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles';
import SectionHeader from '../../SectionHeader';
import ContributionCard from './ContributionCard';


function ContributionSection() {
    const contributionCards = [
        {
            imageText: ["CODE"],
            imageFile: 'code.png',
            style: []
        },
        {
            imageText: ["DOCUMENTATION/","TRAINING"],
            imageFile: 'documentation_training.png',
            style: [[styles.cardMiddle]]
        },
        {
            imageText: ["DESIGN"],
            imageFile: 'design_community.png',
            style: [[styles.cardLast]]
        },
        {
            imageText: ["TESTING"],
            imageFile: 'testing.png',
            style: []
        },
        {
            imageText: ["OUTREACH/RESEARCH"],
            imageFile: 'research_outreach.png',
            style: [[styles.cardMiddle]]
        },
        {
            imageText: ["PROJECT MANAGEMENT"],
            imageFile: 'project_management.png',
            style: [[styles.cardLast]]
        },

    ]


    return (
        <View>
        <SectionHeader title= "INTERESTED IN CONTRIBUTING?" />
        <Text style={styles.description}>You can start contributing through one or more fields of your choice</Text>
        <View style={styles.container}>
        {contributionCards.map((contributionCard,index) => {
          return (<ContributionCard key={index} imageText={contributionCard.imageText} 
          imageFile={contributionCard.imageFile}
          style={contributionCard.style}/>)})
        }
        </View>
        </View>
        );
    }


    export default ContributionSection;
