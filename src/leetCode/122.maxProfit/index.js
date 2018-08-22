

let maxProfit = function (prices) {
  let res = 0;
  for(let i = 1,len = prices.length;i<len; i++){
      if(prices[i] - prices[i - 1] > 0){
          res = res + prices[i] - prices[i - 1]
      }
  }
  return res;
};
