import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Box,
  Button,
  Stack,
  Input,
  Icon,
} from "native-base";

const Home = () => {
  const [show, setShow] = React.useState(false);
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Box bg="red" alignItems="center" justifyContent="center">
          <View style={{ margin: 30 }} />
          <Button size="md" onPress={() => console.log("hello world")}>
            Click Me
          </Button>
          <Stack space={4} w="100%" alignItems="center">
            <Input
              w={{
                base: "75%",
                md: "25%",
              }}
              InputLeftElement={
                <Icon
                  as={<AntDesign name="minuscircleo" size={24} color="black" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Name"
            />
            <Input
              w={{
                base: "75%",
                md: "25%",
              }}
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <AntDesign name="minuscircleo" size={24} color="black" />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              placeholder="Password"
            />
          </Stack>
          ;
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Home;

const styles = StyleSheet.create({});
