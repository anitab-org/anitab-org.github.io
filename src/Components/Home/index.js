import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

function Home() {
    return (
        <View style={styles.home}>
        <Text style={styles.heading}>INTERESTED IN COMPUTING</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</Text>
        <View style={styles.container}>
        <View style={styles.card}>
        <Image
        source= {require('./../../assets/contribution/code.png')}
        style={styles.contributionImage}
        resizeMode="contain"
        />
        <Text style={styles.imageText}>CODE</Text>
        </View>
        
        <View style={[styles.card, styles.cardMiddle]}>
        <Image
        source= {require('./../../assets/contribution/documentation_training.png')}
        style={styles.contributionImage}
        resizeMode="contain"
        />
        <Text style={styles.imageText}>DOCUMENTATION/</Text>
        <Text style={styles.imageText}>TRAINING</Text>
        </View>
        
        
        <View style={[styles.card, styles.cardLast]}>
        <Image
        source= {require('./../../assets/contribution/design_community.png')}
        style={styles.contributionImage}
        resizeMode="contain"
        />
        <Text style={styles.imageText}>DESIGN</Text>
        </View>
        
        <View style={styles.card}>
        <Image
        source= {require('./../../assets/contribution/testing.png')}
        style={styles.contributionImage}
        resizeMode="contain"
        />
        <Text style={styles.imageText}>TESTING</Text>
        </View>
        
        <View style={[styles.card, styles.cardMiddle]}>
        <Image
        source= {require('./../../assets/contribution/research_outreach.png')}
        style={styles.contributionImage}
        resizeMode="contain"
        />
        <Text style={styles.imageText}>OUTREACH/RESEARCH</Text>
        </View>
        
        
        <View style={[styles.card, styles.cardLast]}>
        <Image
        source= {require('./../../assets/contribution/project_management.png')}
        style={styles.contributionImage}
        resizeMode="contain"
        />
        <Text style={styles.imageText}>PROJECT MANAGEMENT</Text>
        </View>
        </View>
        </View>
        );
    }
    
    
    export default Home;