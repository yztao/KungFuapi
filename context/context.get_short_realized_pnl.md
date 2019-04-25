## 获取合约空头已实现盈亏

`context.get_short_realized_pnl(instrument_id, exchange_id)`

**参数**

| 参数          | 类型 | 说明     |
| ------------- | ---- | -------- |
| Instrument_id | str  | 合约ID   |
| exchange_id   | str  | 交易所ID |

**返回**

| 返回 | 类型  | 说明       |
| ---- | ----- | ---------- |
| pnl  | float | 已实现盈亏 |

**范例**

获取策略rb1905已实现盈亏：

`context.get_short_realized_pnl("600000", Exchange.SSE)`



## 