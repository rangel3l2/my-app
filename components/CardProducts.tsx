import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
interface CardProductsProps {
  nome: string;
  setContador: (value: React.SetStateAction<number>) => void;
}
const CardProducts = ({ nome, setContador }: CardProductsProps) => {
  const [localContador, setLocalContador] = useState<number>(0);
  return (
    <View style={{ width: 200, height: 200 }}>
      <Pressable
        onPress={() => {
          setLocalContador(localContador + 1);
          setContador((prev) => prev + 1);
        }}
      >
        <Text>buttonComponente</Text>
      </Pressable>
      <Text>{localContador}</Text>
    </View>
  );
};

export default CardProducts;

const styles = StyleSheet.create({});
