import Icon from "@/ui/components/Icon";
import Stack from "@/ui/components/Stack";
import Typography from "@/ui/components/Typography";
import { Papicons } from "@getpapillon/papicons";
import React from "react";
import { Linking, View } from "react-native";

export default function Soon() {
  return (
    <View
      style={{
        padding: 20,
        paddingBottom: 0,
      }}
    >
      <Stack
        padding={20}
        gap={10}
        vAlign="center"
        hAlign="center"
      >
        <Icon size={42}>
          <Papicons name="clock" color="#29947A" />
        </Icon>
        <Typography variant="h2" align="center">
          Onglet en développement
        </Typography>
        <Typography variant="body1" color="secondary" align="center">
          L'onglet est toujours en cours de développement. Il arrivera prochainement dans une prochaine version de Papillon.
        </Typography>
        <Typography variant="body1" color="primary" align="center" onPress={() => {
          Linking.openURL("https://www.instagram.com/thepapillonapp/");
        }} style={{
          textDecorationLine: "underline",
        }}>
          Pour rester à l'affût, tu peux nous suivre sur les réseaux !
        </Typography>
      </Stack>
    </View>
  );
}
