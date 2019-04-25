## 获取合约空头总持仓量

`context.get_short_tot(instrument_id, exchange_id)`

**参数**

| 参数          | 类型 | 说明     |
| ------------- | ---- | -------- |
| Instrument_id | str  | 合约ID   |
| exchange_id   | str  | 交易所ID |

**返回**

| 返回   | 类型 | 说明     |
| ------ | ---- | -------- |
| volume | int  | 持仓数量 |

**范例**

获取策略rb1906空头总持仓量：

`context.get_short_tot("rb1906", Exchange.SHFE)`

## 