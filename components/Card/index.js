import{Text,View,Image} from 'react-native'
import estilo from './style'
export default function Card({porcentagem,titulo,imagem}){
    return(
        <View style={estilo.cardTarefa}>
            <Image style={estilo.imagemCard} source={{ uri: imagem }} />
            <View style={{  marginLeft: 15,width:150 }}>
                 <Text style={estilo.tituloCard}>{titulo}</Text>
                <Text style={estilo.textoCard}>Todos os domingos costumo jogar futebol com meus amigos do bairro das 09:00 às 11:00 da manhã</Text>
            </View>
            <Text style={{ fontSize: 25 }}>{porcentagem}</Text>
        </View>
    )
}