import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.font_manager import FontProperties
import matplotlib.ticker as mtick
# 定义参数
fund_size = 10000000  # 基金规模
step_size = 0.01  # 基金收益率步长
baseline_return = 0.6  # 基准收益率
management_fee_rate = 0.02  # 管理费率

# 定义绩效费率函数
def performance_fee_rate(return_rate):
    if return_rate <= 0.6:
        return 0
    elif return_rate < 2:
        return 0.15
    elif return_rate < 4:
        return 0.25
    else:
        return 0.45

# 计算数据
return_rates = [x * step_size for x in range(int(0/step_size), int(6/step_size))]  # 基金收益率列表
management_fees = [fund_size * management_fee_rate] * len(return_rates)  # 管理费用列表
performance_fees = [fund_size * (r - baseline_return) * performance_fee_rate(r) for r in return_rates]  # 绩效费用列表
total_fees = [p + m for p, m in zip(performance_fees, management_fees)]  # 总费用列表
investor_returns = [fund_size * r - f for r, f in zip(return_rates, total_fees)]  # 投资人收益列表
fund_returns = [fund_size * r + m - i for r, m, i in zip(return_rates, management_fees, investor_returns)] # 基金收益列表
# 创建 DataFrame
df = pd.DataFrame({
    '基金规模': [fund_size] * len(return_rates),
    '基金收益率': return_rates,
    '绩效费率': [performance_fee_rate(r) for r in return_rates],
    '管理费率': [management_fee_rate] * len(return_rates),
    '绩效费用': performance_fees,
    '管理费用': management_fees,
    '总费用': total_fees,
    '投资人收益': investor_returns,
    '基金收益': fund_returns
})

# 输出数据
print(df)

# 可视化数据

# 添加中文字体
font_path = 'simsun.ttf'  # 字体文件路径
font_prop = FontProperties(fname=font_path)
plt.rcParams['font.family'] = font_prop.get_name()

# 设置字体大小
plt.rcParams['font.size'] = 12

fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(df['基金收益率'], df['投资人收益'], label='投资人收益')
ax.plot(df['基金收益率'], df['总费用'], label='总费用')
ax.plot(df['基金收益率'], df['基金收益'], label='基金收益')
ax.plot(df['基金收益率'], df['管理费用'], label='管理费用')
ax.plot(df['基金收益率'], df['绩效费用'], label='绩效费用')

ax.legend()
ax.set_xlabel('基金收益率')
ax.set_ylabel('金额（美元）')
ax.set_title('基金费用和投资人收益计算')
# 设置
ax.ticklabel_format(style='plain', axis='y')


ax.xaxis.set_major_formatter(mtick.PercentFormatter(1.0))


plt.show()
