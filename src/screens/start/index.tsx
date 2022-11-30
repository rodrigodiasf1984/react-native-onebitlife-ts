import React from 'react';
import { ScrollView, View, Image, Text, SafeAreaView } from 'react-native';

import LogoUrl from '~/assets/icons/logo3.png';

function Start() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <ScrollView>
        <View>
          <Image source={{ uri: LogoUrl }} />
          <Text>
            Vamos transformar sua vida /n em jogo, buscando sempre /n o melhor
            nível
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Start;
