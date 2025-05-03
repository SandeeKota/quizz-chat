import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppView from '../components/gloobal/AppView'
import AppText from '../components/gloobal/Apptext'
import QuizzHeader from '../components/quizz/quizz-header'
import { QuizQuestion, quizQuestions } from '@/lib/constanrs'
import AppButton from '../components/gloobal/AppButton'
import { COLORS } from '@/lib/colors'
import AppInput from '../components/gloobal/input'
import { LocalDimenstions } from '@/utils/window.util'
import { useRouter } from 'expo-router'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const QuizzScreen = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const router = useRouter();

    return (
        <AppView style={{ paddingHorizontal: 0 }} >
            <QuizzHeader />
            <View style={styles.mainContainer} >
                <AppText title={`Hi ${(user) && user.name || ""}! let's test your Iq`}
                    style={{ textAlign: "center" }}
                />
                <AppText title={`${quizQuestions[questionIndex].question || ""}`}
                    style={{ textAlign: "center" }}
                />
                <AppInput
                    placeholder='Enter your answer'
                    onChnageText={(text) => ""} value={''}
                    style={{ width: LocalDimenstions.windowWidth - 80 }}
                />
                <AppButton style={[styles.button]}
                    onPress={() => router.replace("/chat")}
                >
                    <AppText title={"Submit Answer"}
                        style={{ textAlign: "center" }}
                    />
                </AppButton>
            </View>
        </AppView>
    )
}

export default QuizzScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        overflow: "hidden",
        alignItems: 'center',
        justifyContent: "center",
        gap: 20
    },
    button: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.green,
        padding: 10,
        width: "60%"
    },
})