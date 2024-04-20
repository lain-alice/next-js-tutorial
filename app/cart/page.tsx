import { age, name } from "./data";

export default function Cart() {
  // html 덩어리를 하나로 - 컴포넌트
  // 모든거 다 컴포넌트로? 단점 - 컴포넌트끼리 데이터 공유 귀찮음

  // Next는 서버 컴포넌트, 클라이언트 컴포넌트
  // 아무데서나 만든 건 서버 컴포넌트
  // 맨 위에 'use client' 하면 클라이언트 컴포넌트
  // 서버 컴포넌트 - html상에 js 기능넣기 불가능(onClick, useState 등)
  // 클라이언트 컴포넌트에서는 가능
  // 서버 컴포넌트: 로딩속도 빠름, 검색엔진 노출
  // 클라이언트: 로딩속도 느림(js 많이 필요). hydration 필요
  // hydration: html 유저에게 보내고 js로 html 다시 읽고 분석
  // 큰 페이지는 서버 컴포넌트로, js 동적 기능 필요한 컴포넌트는 client

  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
    </div>
  );
}

export function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명 {age}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
