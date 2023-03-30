
import { View,Image,Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import camera from '../assets/camera.png'
import fleche from '../assets/fleche.png'
import cloud from '../assets/nuage.png'
import facture from '../assets/facture.png'
import offre from '../assets/offre.png'
import user from '../assets/utilisateur.png'
import styles from '../styles/styleProfile';


export default function Profil() {
    const navigation = useNavigation();
   

    return (
        <View style={styles.container}>
            <View  style={styles.topBar}>
            <Image style={styles.imgBar} source = {require("../assets/logo.jpg")}/>
            </View>
            <Text style={styles.textInf}>Présenter votre QR code à la caisse pour ajouter votre ticket</Text>
            <View  style={styles.qrcode}>
            <QRCode  backgroundColor={'transparent'} value="https://aaron-tickets.fr/" size={170} />
            </View>
            <Text style={styles.choix}>Ou</Text>
            <View style={styles.option}>
                <View style={styles.bloc}>
                    <Text style={styles.choix}>Prendre{'\n'} en photo</Text>
            <TouchableOpacity style={styles.middleBarButton} >
            <Image source={camera} />
                </TouchableOpacity>
                </View>
                <View style={styles.bloc}>
                    <Text style={styles.choix}>Importer{'\n'}</Text>
                <TouchableOpacity style={styles.middleBarButton} >
                
            <Image source={fleche} />


                </TouchableOpacity>
                </View>
                </View>
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.bottomBarButton}  >
                <View style={{ alignItems: 'center' }}>
               
                    <Image source={cloud} />
               
                   
                        <Text>Empreinte</Text>
                </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBarButton}  >
                
                <View style={{ alignItems: 'center' }}>
                <Image source={facture} />
                
                    <Text>Tickets</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBarButton}>
                
                <View style={{ alignItems: 'center' }}>
                <Image source={offre} />
                
                   
                    <Text>Offres</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomBarButton}  >
                
                <View style={{ alignItems: 'center' }}>
                    <Image source={user} />
                    <Text>Profil</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

