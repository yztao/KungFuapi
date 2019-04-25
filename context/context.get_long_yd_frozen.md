## 获取合约多头昨仓冻结持仓量

`context.get_long_yd_frozen(instrument_id, exchange_id)`

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

获取策略浦发银行600000昨仓冻结持仓量：

`context.get_long_yd_frozen("600000", Exchange.SSE)`

