## 구현 상세

- 지뢰찾기는 [http://minesweeperonline.com/](http://minesweeperonline.com/) 에서 해보실 수 있습니다.
- 처음에 화면에는 다음의 내용이 표시됩니다.
- 남은 지뢰 개수 (초기값은 적절한 난이도로 정하시면 됩니다.
- 닫혀있는 셀 8x8 (CSS 사용을 보려는 것이 아니기 때문에 최대한 간단하게 출력해주세요.)
- 닫혀있는 셀을 왼쪽 클릭하면 다음과 같이 진행됩니다.
- 지뢰인 경우: 지뢰가 표시되고 게임 종료 ⇒ 다시 시작하기 확인을 누르면 새로운 게임이 시작됨
- 지뢰가 아닌 경우: 해당 셀에 인접한 셀 중 지뢰가 있는 만큼의 숫자가 표시됨 ⇒ 숫자가 0인 경우 아무것도 표시하지 않음
- 닫혀있는 셀을 오른쪽 클릭하면 다음과 같이 진행됩니다.
- 화면에 표시된 남은 지뢰 개수에서 1이 줄어들고 클릭한 셀에 깃발이 표시됩니다.
- 남은 지뢰 개수가 0인 경우 아무일도 일어나지 않습니다.

## 선택사항

- 첫 클릭 후 소요된 시간을 표시하고 최고기록을 병기
- 기록이 좋은 순서로 순위표를 확인할 수 있는 인터페이스
