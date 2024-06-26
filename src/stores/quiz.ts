import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Quiz } from '@/core/services/QuizService'

export const useQuizStore = defineStore('quiz', () => {
  const quizState = ref<Quiz[]>([])
  const quizLoading = ref(false)

  const setLoading = (loading: boolean) => {
    quizLoading.value = loading
  }

  const setQuizzes = (chats: Quiz[]) => {
    quizState.value = chats
  }

  const appendQuiz = (chat: Quiz) => {
    quizState.value.push(chat)
  }

  const removeQuiz = (quizId: string) => {
    quizState.value = quizState.value.filter((q) => q.id !== quizId)
  }

  return { quizState, setQuizzes, setLoading, appendQuiz, removeQuiz }
})
