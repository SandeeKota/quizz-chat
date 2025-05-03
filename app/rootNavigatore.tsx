import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, Stack, useRouter } from 'expo-router';
import EntryScreen from './components/entryScreen';
import { useDispatch } from 'react-redux';
import { logout, loadToken } from '@/store/authSlice';
import { isTokenExpired } from '@/utils/jwt';
import { removeToken } from '@/utils/storage/storage';
import { getToken } from '@/utils/tokenManager';
import useAuth from './hooks/useAuth';

const RootNavigatore = () => {

    return (
        <React.Fragment>
            <StatusBar
                backgroundColor="#000000" // Set your desired background color
                barStyle="light-content"
            />

            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </React.Fragment>
    )
}

export default RootNavigatore

const styles = StyleSheet.create({})