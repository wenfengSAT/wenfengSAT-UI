const pointCount = 7;
const circleRadius = 160;
const startAnimDelta = 5;
const circumference = Math.PI * circleRadius * 2;

var selectedItemIndex = -1;

var circlePath = document.getElementById("mask-circle");

/**
 * @description On Mouse Leave event handler for points
 */
const onMouseLeave = () => {
  let index = selectedItemIndex !== -1 ? selectedItemIndex : 0;
  calculateOffset(index);
};

/**
 * @description On Click event handler for points
 * @param {Number} index - Index of list item
 */
const onClick = (index) => {
  //If already selected, deselect
  selectedItemIndex = selectedItemIndex === index ? -1 : index;
  calculateOffset(index);

  //Find active item, deselect
  let activeListItem = document.querySelectorAll(
    ".navigation-circle-list-item.active"
  );
  if (activeListItem.length > 0) activeListItem[0].classList.remove("active");

  //Find new item by index, select
  let listItem = document.querySelectorAll(
    ".navigation-circle-list-item:nth-of-type(" + selectedItemIndex + ")"
  );
  if (listItem.length > 0) listItem[0].classList.add("active");
};

/**
 * @description - Calculate offset for circle path by index of list item
 * @param {Number} index - Index of list item
 */
const calculateOffset = (index = 0) => {
  let offset = 0;

  if (index !== 0) offset = (circumference / pointCount) * (pointCount - index);

  circlePath.style.strokeDashoffset = `${offset}px`;
};

// INTRO

let buffer = 500;
let delay =
  1000 * (1 + pointCount / startAnimDelta - 1 / startAnimDelta) + buffer;

setTimeout(() => onClick(1), delay);
