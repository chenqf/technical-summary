

let maxProfit = function (prices) {
  let res = 0;
  if(!prices.length){
      return res;
  }
  let buy = prices[0];
  for(let i = 0,len = prices.length; i < len; i++){
      let cur = prices[i];
      if(cur < buy){
          buy = cur;
      }else if(cur > buy){
          res = Math.max(res,cur - buy);
      }
  }
  return res;
};
