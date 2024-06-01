import { create } from 'zustand';

export const usePageStore = create((set) => ({
  // 초기 상태 설정
  page: 0,
  // 상태 변경 함수
  setPage: (page) => set({ page }),
}));

// 사용 예시
// import { usePageStore } from '@/store/useStore';
//  const { page, setPage } = usePageStore();
//  setPage(1); // page 상태 변경
//  console.log(page);
