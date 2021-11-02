//1
function areBothSame(para1, para2){
  if (para1 == para2) {
    return true;
  } else {
    return false;
  }
}

//2
function areBothEqual(para1, para2){
  if  (para1 === para2) {
    return true;
  } else {
    return false;
  }
}

//3
function areAllFourEqual(para1, para2, para3, para4){
  if (para1 === (para2 && para3 && para4)) {
    return true;
  } else {
    return false;
  }
}


//4
function areAllFourSame(para1, para2, para3, para4){
  if (para1 == (para2 && para3 && para4)) {
    return true;
  } else {
    return false;
  } 
}

//5
function areAllFourSameOrEqual(para1, para2, para3, para4){
  if (para1 == (para2 && para3 && para4)) {
    return "same"
  } else if (para1 === (para2 && para3 && para4)) {
    return "equal"
  } else {
    return null;
  }
}


//invoking functions

//console.log(areBothSame("5", 1));
//console.log(areBothEqual("2", 2));
//console.log(areAllFourEqual("2", "2", "2", 2));
//console.log(areAllFourSame(true, true, 1, "1"));
console.log(areAllFourSameOrEqual(true, false, 1, "1"));