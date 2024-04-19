import Image from "next/image";

// Next.js는 리액트에 얹혀사는 프레임워크... 리액트 문법으로 만들어야 함
// return 안에 평행한 태그 여러개 x, 큰 하나의 빈 박스로 감싸야(리액트랑 같음)
// className 하는 이유...js class랑 겹치니까

export default function Home() {
  // 여기에 js 코드를
  // jsx 데이터바인딩
  // 쌩 js : document.getElementsByClassName('.title-sub')[0].innerHTML = name

  let name = "이승현";
  let link = "https://www.youtube.com";

  return (
    <div>
      <h4 className="text-3xl font-bold text-center mt-[150px]">
        Hello, Next.js
      </h4>
      {/* 쌩 스타일 태그 금지, 중괄호 두개 치고 style={{}} */}
      {/* 사실 객체 자료형이라 - 못 씀. font-size는 fontSize로 */}

      <p className="text-xl text-center mt-10">
        안녕 내 이름은 {name}{" "}
        <a href={link} className="text-blue-300">
          유튜브
        </a>
      </p>
    </div>
  );
}

// Next.js 자동 라우팅
