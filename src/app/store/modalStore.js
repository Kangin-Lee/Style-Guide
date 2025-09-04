// 📌 Zustand를 사용한 useModalStore 스토어
// 모달의 열림/닫힘 상태, 선택된 날짜, 입력값 등을 관리

// store/modalStore.js
import { create } from "zustand";

export const useModalStore = create((set) => ({
  isOpen: false,
  selectedDate: { from: undefined, to: undefined }, // ✅ 구조 보장
  inputValue: "",
  open: () => set({ isOpen: true }),
  close: () => set({
    isOpen: false,
    selectedDate: { from: undefined, to: undefined },
    inputValue: "",
  }),
  setDate: (date) => set({ selectedDate: date }),
  setInputValue: (value) => set({ inputValue: value }),
}));
