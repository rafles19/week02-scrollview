import { Image, StyleSheet, Platform, ScrollView, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ScrollView>
            <View>
            <Profile nim= "8000000222" nama= "John Smith" image = "https://randomuser.me/api/portraits/men/75.jpg"/>
            <Profile nim= "8000000222" nama= "Jane Doe" image = "https://randomuser.me/api/portraits/women/75.jpg"/>
            <Profile nim= "8000000222" nama= "Michael Johnson" image = "https://randomuser.me/api/portraits/men/76.jpg"/>
            <Profile nim= "8000000222" nama= "Emily Williams" image = "https://randomuser.me/api/portraits/men/77.jpg"/>
            <Profile nim= "8000000222" nama= "William Brown" image = "https://randomuser.me/api/portraits/women/77.jpg"/>
            <Profile nim= "8000000222" nama= "Olivia Jones" image = "https://randomuser.me/api/portraits/men/78.jpg"/>
            <Profile nim= "8000000222" nama= "James Miller" image = "https://randomuser.me/api/portraits/women/78.jpg"/>
            <Profile nim= "8000000222" nama= "Sophia Davis" image = "https://randomuser.me/api/portraits/men/79.jpg"/>
            <Profile nim= "8000000222" nama= "Ethan Garcia" image = "https://randomuser.me/api/portraits/women/79.jpg"/>
            <Profile nim= "8000000222" nama= "Ava Rodriguez" image = "https://randomuser.me/api/portraits/men/80.jpg"/>
            <Profile nim= "8000000222" nama= "David Wilson" image = "https://randomuser.me/api/portraits/women/80.jpg"/>
        </View>
        </ScrollView>
  );
}


const Profile = props => {
  return (
      <View style = {{ alignItems: 'center', margin : 50}}>
      <Image
          source={{
          uri: props.image,
          }}
          style={{ width: 100, height: 100, margin: 10 }} />
      <Text>{props.nama}</Text>
      <Text>{props.nim}</Text>
      </View>
  )
  } 


