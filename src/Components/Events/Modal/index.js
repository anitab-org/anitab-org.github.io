import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Linking,
  Modal,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { CloseOutlined } from "@ant-design/icons";

const EventInfoModal = ({
  isVisible,
  onRequestClose,
  animationType,
  data,
  links,
}) => {
  const { calendarIcon, timeIcon, locationIcon } = links;
  return (
    <Modal
      animationType={animationType}
      onRequestClose={onRequestClose}
      visible={isVisible}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.banner}>
            <Image source={data.highlights.source} style={styles.img} />
          </View>
          <View style={styles.badges}>
            <View style={styles.badge}>
              <Image style={styles.image} source={calendarIcon} />
              <Text style={styles.label}>{data.date}</Text>
            </View>
            <View style={styles.badge}>
              <Image style={styles.image} source={locationIcon} />
              <Text style={styles.label}>{data.location}</Text>
            </View>
            <View style={styles.badge}>
              <Image style={styles.image} source={timeIcon} />
              <Text style={styles.label}>{data.timings}</Text>
            </View>
          </View>
          <View style={styles.description}>
            {data.description.map((detail, index) => (
              <Text style={styles.detailStyles} key={index}>
                {detail.par}
              </Text>
            ))}
          </View>
          <View style={styles.closeBtn}>
            <CloseOutlined onClick={onRequestClose} size={22} />
          </View>
          <Text
            style={styles.know_moreStyles}
            onPress={() => {
              Linking.openURL(data.know_more.link);
            }}
          >
            {data.know_more.par}
          </Text>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS == "web" ? 50 : 20,
  },
  banner: {
    width: "100%",
    height: 400,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 30,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  closeBtn: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  detailStyles: {
    fontSize: 16,
  },
  badges: {
    flex: 1,
    flexDirection: Platform.OS == "web" ? "row" : "column",
    alignItems: "center",
    flexWrap: "wrap",
  },
  badge: {
    borderRadius: 5,
    backgroundColor: "rgb(16,59,129)",
    marginRight: 10,
    padding: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: 25,
    height: 25,
    tintColor: "#fff",
  },
  label: {
    fontSize: 16,
    color: "#fff",
    fontWeight: 200,
    marginLeft: 10,
  },
  description: {
    marginVertical: 32,
  },
  know_moreStyles: {
    color: "#103B81",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default EventInfoModal;
