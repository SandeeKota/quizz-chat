import { store } from "@/store";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import RootNavigatore from "./rootNavigatore";



export default function RootLayout() {
  return (
    <Provider store={store} >
      <RootNavigatore />
    </Provider>
  )
}
