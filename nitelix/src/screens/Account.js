import React, {useRef, useContext} from 'react';

import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../context/AuthContext';
import AccountIcon from '../assets/Icons/accountIcon.png';
import HistoryIcon from '../assets/Icons/historyIcon.png';
import logoutIcon from '../assets/Icons/logoutIcon.png';
import MissedIcon from '../assets/Icons/missedIcon.png';
import Background from '../assets/Icons/background.png';


const PageContainer = styled.View`
  background-color: white;
  height: 100%;
  margin-right: 3px;
  margin-left: 3px;
  border-radius: 30px;
`;

const Wrapper = styled.View`
  margin: 6px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const TextWrapper = styled.View`
  margin: 10px;
  display: flex;
`;

const NameText = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: black;
`;
const NumbText = styled.Text`
  font-size: 15px;
  margin-top: 5px;
  color: black;
`;

const CardList = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(81, 89, 101, 0.1);
  width: 170px;
  height: 180px;
  border-radius: 12px;
  margin: 5px;
`;

const CardTitle = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: 600;
`;
const CardDesc = styled.Text`
  font-size: 12px;
  margin-right: 10px;
  margin-left: 10px;
  color: black;
  text-align: center;
  font-weight: 400;
`;

export default function Account({navigation}) {
  const win = Dimensions.get('window');
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  return (
    <View style={{display: 'flex'}}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={{height: win.height, width: win.width}}>
        <Header
          title="Hesabım"
          subtitle="Seçim yaparak işleme devam ediniz"
          onPressBack={() => navigation.goBack()}
        />
        <PageContainer>
          <Wrapper>
            <TextWrapper>
              <NameText>Volkan Aslan</NameText>
              <NumbText>Dahili No: 1001</NumbText>
            </TextWrapper>

            <CardList>
              <CardContainer
                onPress={() => navigation.navigate('SystemSettings')}>
                <Image source={AccountIcon} />
                <CardTitle>Sistem Ayarları</CardTitle>
                <CardDesc>
                  Detaylı raporlama için internet sitesinden giriş
                  yapabilirsiniz
                </CardDesc>
              </CardContainer>
              <CardContainer onPress={() => navigation.navigate('CallHistory')}>
                <Image source={HistoryIcon} />
                <CardTitle>Arama Geçmişim</CardTitle>
                <CardDesc>
                  Detaylı raporlama için internet sitesinden giriş
                  yapabilirsiniz
                </CardDesc>
              </CardContainer>

              <CardContainer onPress={() => navigation.navigate('MissedCalls')}>
                <Image source={MissedIcon} />
                <CardTitle>Cevapsız Çağrılar</CardTitle>
                <CardDesc>
                  Detaylı raporlama için internet sitesinden giriş
                  yapabilirsiniz
                </CardDesc>
              </CardContainer>
              <CardContainer onPress={logout}>
                <Image source={logoutIcon} />
                <CardTitle>Oturumu Kapat</CardTitle>
                <CardDesc>Hesabımdan çıkış yap</CardDesc>
              </CardContainer>
            </CardList>
          </Wrapper>
        </PageContainer>
      </ImageBackground>
    </View>
  );
}
