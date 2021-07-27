import React, {useState} from 'react';
import { Text, View, TextInput, Button} from 'react-native';
import{styles} from '../style/style';

export default function Calc(){

    const [calcs, setCalcs] = useState(
        {
            valor1: 0,
            valor2: 0,
            subtotal: 0,
        })
    const handleInputChange = (name, value) => {
        setCalcs({
            ...calcs, [name]:value
        })
    }
    const somar = () =>{
        setCalcs({
            ...calcs, subtotal:(calcs.valor1 + calcs.valor2)
        })
    }
    const subtrair = () =>{
        setCalcs({
            ...calcs, subtotal:(calcs.valor1 - calcs.valor2)
        })
    }
    const dividir = () =>{
        setCalcs({
            ...calcs, subtotal:(calcs.valor1 / calcs.valor2)
        })
    }
    const multiplicar = () =>{
        setCalcs({
            ...calcs, subtotal:(calcs.valor1 * calcs.valor2)
        })
    }
    const restoDiv = () =>{
        setCalcs({
            ...calcs, subtotal:(calcs.valor1 % calcs.valor2)
        })
    }
    const aElevb = () =>{
        setCalcs({
            ...calcs, subtotal:(calcs.valor1 ** calcs.valor2)
        })
    }
    return(
        <View style={styles.content}>
            <View style={styles.input}>
                <View >
                    <Text>Adicione valores, selecione a operação e veja o resultado {`\n`}</Text>
                    <TextInput style ={styles.box}
                    placeholder="valor 1"
                    onChangeText={(valor)=> handleInputChange("valor1", Number(valor))}
                    keyboardType="numeric"
                    />
                    <TextInput style ={styles.box}
                    placeholder="valor 2"
                    onChangeText={(valor)=> handleInputChange("valor2", Number(valor))}
                    keyboardType="numeric"
                    />
                    <Text style={styles.resultado} >{`\n`}Resultado : {calcs.subtotal}{`\n`}</Text>
                </View>
            </View>
            <View style = {styles.btns}>
                <View style={styles.btn}>
                    <Button     
                        title="SOMAR"
                        onPress={somar}
                    />
                    <Button
                        title="SUBTRAIR"
                        onPress={subtrair}
                    />
                    <Button
                        title="DIVIDIR"
                        onPress={dividir}
                    />
                </View>
                <View style={styles.btn}>
                    <Button
                        title="MULTIPLICAR"
                        onPress={multiplicar}
                    />
                    <Button
                        title="RESTO DIV."
                        onPress={restoDiv}
                    />
                    <Button
                        title="A ^ B"
                        onPress={aElevb}
                    />
                </View>
            </View>
        </View>
    )
}