import { create } from "zustand";

//Multi Select에 필요한 상태들을 관리
export const useMultiSelectStore = create((set) => ({
  //set은 상태를 갱신할 때 사용
  options: [], //전체 태그 목록을 저장하는 배열로 초기값은 빈 배열이다.
  selected: [], //사용자가 선택한 태그들의 배열로 초기값은 빈 배열이다.

  //선택된 항목에 태그를 추가하는 함수
  addSelected: (tag) =>
    set(
      (state) =>
        state.selected.includes(tag)
          ? state // 만약 selected 배열에 이미 존재하는 태그라면 아무 것도 하지 않고 기존 상태 반환
          : { selected: [...state.selected, tag] } // 존재하지 않으면 해당 태그를 selected 배열에 추가
    ),

  //선택된 항목에서 태그를 제거하는 함수
  removeSelected: (tag) =>
    set((state) => ({
      selected: state.selected.filter((t) => t !== tag), // filter()를 통해 tag와 일치하지 않는 항목들만 남기고 새로운 배열을 생성해 상태를 업데이트
    })),

  // options 상태를 설정하는 함수
  setOptions: (opts) => set({ options: opts }),

  //선택한 항목을 초기화하는 함수
  clearSelected: () => set({ selected: [] }),
}));
