import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Scroll() {
  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([1]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); //que대기
    let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setItemLists((lists) => lists.concat(items)); //concat : 배열에 다른 배열 추가
    setIsLoaded(false);
  };

  //callback async => 비동기 함수
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      console.log("entry", entry);
      // observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    console.log("itemlists", itemLists);
  }, [itemLists]);

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });

      console.log("observer", observer);
      observer.observe(target);
    }
    return () => observer && observer.disconnect(); // 추적 x
  }, [target]);

  return (
    <PageWrap>
      {itemLists.map((item, index) => {
        return <Item number={index + 1} key={index} />;
      })}
      <Target ref={setTarget}>{isLoaded && <Loader />}</Target>
    </PageWrap>
  );
}

const Target = styled.div`
  width: 100vw;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = ({ number }) => {
  return (
    <ItemWrap>
      <ItemWrapTop>{number}</ItemWrapTop>
      <ItemWrapBody>
        <ItemWrapTitle />
        <ItemWrapTitle />
        <ItemWrapTitle />
      </ItemWrapBody>
    </ItemWrap>
  );
};

const PageWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const ItemWrap = styled.div`
  width: 350px;
  height: 370px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: lrem;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  border-radius: 6px;
`;
const ItemWrapTop = styled.div`
  display: flex;
  width: 350px;
  height: 170px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #e2e5e7;
  color: #566270;
  font-size: 2.25rem;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const ItemWrapBody = styled.div`
  height: 200px;
  border-bottom-left-radius: 6px;
  border-bottom-right: 6px;
  padding: 10px;
`;
const ItemWrapTitle = styled.div`
  width: 300px;
  height: 35px;
  margin: 16px;
  border-radius: 5px;
  background-color: #e2e5e7;
`;
