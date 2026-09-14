// 새 기능은 이 목록에 등록한 뒤 app.js의 해당 화면에 연결하세요.
export const modules = [
  { id: 'collection', title: '수합 공간', description: '흩어진 응답과 자료를 한곳에.', icon: 'folder', tone: 'pink', label: '수합 공간 둘러보기' },
  { id: 'simulation', title: '시뮬레이션', description: '다양한 조건을 바꾸며 결과를 살펴보세요.', icon: 'sliders', tone: 'blue', label: '시뮬레이션 둘러보기' }
];
export const navigation = [ ['home', '홈', 'grid'], ['collection', '수합 공간', 'folder'], ['simulation', '시뮬레이션', 'sliders'], ['guide', '이용 가이드', 'book'] ];
