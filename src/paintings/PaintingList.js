import React from "react";
import PaintingListItem from "./PaintingListItem";

const PaintingList = ({ paintings, selectPainting }) => {
  // debugger;
  // paintings.length > 0 && selectPainting(paintings[0].id);
  const items = paintings.map(pntg => (
    <PaintingListItem key={pntg.id} painting={pntg} />
  ));
  return <div className="ui relaxed divided list scroll">{items}</div>;
};

export default PaintingList;
