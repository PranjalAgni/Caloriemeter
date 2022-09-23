import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const CustomModal = ({ onCamera, onGallery, visible, onClose }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Choose from...</Text>
              <View style={{
                flexDirection: "row",
                width: "100%"
              }}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={onCamera}
                >
                  <Text style={styles.textStyle}>Camera</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose, {marginLeft: 25}]}
                  onPress={onGallery}
                >
                  <Text style={styles.textStyle}>Gallery</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
    height: 150
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 10,
    fontSize: 30,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    color: "black",
    fontSize: 25,
    width: "100%"
  }
});

export default CustomModal;