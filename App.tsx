import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

const App: React.FC = () => {
  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const cameraPermission = Camera.getCameraPermissionStatus();
    const microphonePermission = Camera.getMicrophonePermissionStatus();

    if (cameraPermission !== 'granted') {
      await Camera.requestCameraPermission();
    }

    if (microphonePermission !== 'granted') {
      await Camera.requestMicrophonePermission();
    }
  };

  const device = useCameraDevice('back');

  return (
    <View style={{flex: 1}}>
      <Camera style={{flex: 0.5}} device={device} isActive={true} />
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        Que pessoa linda mds ☠️
      </Text>
    </View>
  );
};

export default App;
