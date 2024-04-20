// import Image from "next/image";
// import 사진 from "/public/food0.png";

export default function List() {
  // DB에서 데이터 뽑아왔다 치고
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];

  // 등호 = 오른쪽을 왼쪽에 넣어주세요
  // 상품이 1000개라면? for? jsx에선 안 됨
  // map - 함수 안의 코드 반복 실행 - array 길이만큼
  // map 함수 파라미터
  // (a, i) => {} a: array 안의 자료 출력, i: 0부터 시작되는 인덱스
  // return 하면 반복하는 수만큼 새로운 array 만듦
  // return 괄호 굳이 쓰는 이유? 안쓰면 html을 읽기만 하고 지나감

  return (
    <div>
      <h4 className="text-3xl font-bold text-center mt-[150px]">상품목록</h4>
      {상품.map((value, index) => {
        return (
          <div className="food" key={index}>
            {/* map 사용시 반복생성되는 요소마다 유니크한 key값 넣을 것 */}
            {/* 똑같은게 많으면 리액트가 헷갈려함, 보통은 index 넣음 */}

            {/* <Image src={사진} className="food-img" alt="토마토" /> */}
            {/* public폴더 안에 있는 것들은 root 경로로 이동 */}
            {/* 이미지 쌩으로 img 넣지말고 최적화? lazy loading, layout shift 방지 */}
            {/* Next의 Image 컴포넌트가 알아서 해줌, import로 가져온다음 해야함 */}
            {/* 외부 이미지는 width height 태그 안에 넣고 next.config.js 설정도 해야 */}
            {/* 최적화는 다 만들고 하는 게 낫다 */}

            <img src={`/food${index}.png`} className="food-img" alt="토마토" />
            {/* <h5>{상품[index]} 20,000원</h5> */}
            <h5>{value} 20,000원</h5>
          </div>
        );
      })}
    </div>
  );
}

// Next.js 자동 라우팅
