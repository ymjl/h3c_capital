function generatePlot() {
  // 获取输入参数
  var fund_size = document.getElementById('fund-size').value;
  var profit = document.getElementById('profit').value;
  var step_size = document.getElementById('step-size').value;
  var baseline_return = document.getElementById('baseline-return').value;
  var management_fee_rate = document.getElementById('management-fee-rate').value;
  var performance_fee_rates = [
  parseFloat(document.getElementById('performance-fee-rate-1').value),
  parseFloat(document.getElementById('performance-fee-rate-2').value),
  parseFloat(document.getElementById('performance-fee-rate-3').value)
  ]; 
  // 定义绩效费率函数
  function performance_fee_rate(return_rate) {
    if (return_rate < 0.6) {
      return 0;
    } else if (return_rate < 2) {
      return (return_rate - baseline_return) * performance_fee_rates[0];
    } else if (return_rate < 4) {
      return 1.4 * performance_fee_rates[0] + (return_rate - 2) * performance_fee_rates[1];
    } else {
      
      return (1.4 * performance_fee_rates[0] + 2 * performance_fee_rates[1] + (return_rate - 4)* performance_fee_rates[2]);
    }
  }

  // 计算数据
  var return_rates = Array.from(Array(Math.floor(profit/step_size) - Math.floor(0/step_size)), (x, i) => (i + Math.floor(0/step_size)) * step_size); 
  
  var management_fees = Array(return_rates.length).fill(fund_size * management_fee_rate * 3);  // 管理费用列表

  var performance_fees = return_rates.map(r => fund_size * performance_fee_rate(r));  // 绩效费用列表

  var total_fees = performance_fees.map((p, i) => p + management_fees[i]);  // 总费用列表
  var investor_returns = return_rates.map((r, i) => fund_size * r - total_fees[i]);  // 投资人收益列表
 // var fund_returns = return_rates.map((r, i) => fund_size * r + management_fees[i] - investor_returns[i]); // 基金收益列表

  // 创建 DataFrame
  var df = {
    '投资金额': Array(return_rates.length).fill(fund_size),
    '基金收益率': return_rates,
    '绩效费率': return_rates.map(r => performance_fee_rate(r)),
    '管理费率': Array(return_rates.length).fill(management_fee_rate),
    '绩效费用': performance_fees,
    '管理费用': management_fees,
//    '总费用': total_fees,
    '投资人收益': investor_returns,
 //   '基金收益': fund_returns
  };

  // 可视化数据
  var data = [
    { x: df['基金收益率'], y: df['投资人收益'], name: '投资人收益' },
    { x: df['基金收益率'], y: df['管理费用'], name: '管理费用' },
    { x: df['基金收益率'], y: df['绩效费用'], name: '绩效费用' }
//    { x: df['基金收益率'], y: df['总费用'], name: '总费用' },
//    { x: df['基金收益率'], y: df['基金收益'], name: '基金收益' },
  ];

  var layout = {
    title: '投资人收益计算',
    xaxis: {
      title: '基金收益率',
      tickformat: ',.0%',
      range: [0, profit]
    },
    yaxis: {
      title: '费用（美元）'
    }
  };
  
  // 使用 Plotly 绘制折线图
  Plotly.newPlot('plot', data, layout);
}
