import React from 'react';
import WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';
// files
import AmaranteText from './StyledText';
import Colors from '../constants/Colors';
import { ThemedText, ThemedView } from './Themed';

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});

type Props = {
  path: string;
};

export default function EditScreenInfo({ path }: Props): JSX.Element {
  async function handleHelpPress(): Promise<void> {
    await WebBrowser.openBrowserAsync(
      'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet',
    );
  }

  return (
    <ThemedView>
      <ThemedView style={styles.getStartedContainer}>
        <ThemedText
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Open up the code for this screen:
        </ThemedText>

        <ThemedView
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <AmaranteText>{path}</AmaranteText>
        </ThemedView>

        <ThemedText
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Change any of the text, save the file, and your app will automatically
          update.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <ThemedText
            style={styles.helpLinkText}
            lightColor={Colors.light.tint}>
            Tap here if your app does not automatically update after making
            changessssss
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}