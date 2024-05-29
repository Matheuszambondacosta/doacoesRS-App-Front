import React, { useState } from 'react';
import styles from './styles';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function DetalhesPets() {
    const [quantidade, setQuantidade] = useState(1);

    const incrementarQuantidade = () => {
        setQuantidade(quantidade + 1);
    };

    const decrementarQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };

    const navigation = useNavigation();

    return (
        <ScrollView>
        <LinearGradient
            colors={['#1DC59C', '#0E415F']}
            style={styles.container}
        >
            <View style={styles.tituloContainer}>
                <Text style={styles.primeiraLetra}>P</Text>
                <Text style={styles.titulo1}>ETS</Text>
            </View>

            <View style={styles.linhaLaranja} />

            <View style={styles.subtitulocontainer}>
                <Text style={styles.subtitulo}>DOAÇÕES</Text>
            </View>

            <View style={styles.linhaLaranja2} />

            <View style={styles.containerProdutos}>
                <Image source={require('../../../assets/racaoAdulto.png')} style={styles.imagem} />
            
                <View style={styles.desc}>
                    <Text style={styles.tituloDesc}>Ração - adulto</Text>
                    <Text style={styles.preco}>R$56</Text>
                    <View style={styles.quantidadeProdutos}>
                        <TouchableOpacity onPress={incrementarQuantidade} style={styles.mais} >
                            <Text style={styles.maisButton}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantidade}>{quantidade}</Text>
                        <TouchableOpacity onPress={decrementarQuantidade} style={styles.menos}>
                            <Text style={styles.menosButton}>-</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.addcarrinho}>
                        <Text style={styles.addcarrinhoText}>Adicionar ao carrinho</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerProdutos}>
                <Image source={require('../../../assets/racaoAdulto.png')} style={styles.imagem} />
            
                <View style={styles.desc}>
                    <Text style={styles.tituloDesc}>Ração - filhote </Text>
                    <Text style={styles.preco}>R$80</Text>
                    <View style={styles.quantidadeProdutos}>
                        <TouchableOpacity onPress={incrementarQuantidade} style={styles.mais} >
                            <Text style={styles.maisButton}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantidade}>{quantidade}</Text>
                        <TouchableOpacity onPress={decrementarQuantidade} style={styles.menos}>
                            <Text style={styles.menosButton}>-</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.addcarrinho}>
                        <Text style={styles.addcarrinhoText}>Adicionar ao carrinho</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
        </ScrollView>
    );
}
