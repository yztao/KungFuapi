**获取期初权益**

`context.get_initial_equity()`

**参数**

无

**返回**

| 返回           | 类型  | 说明     |
| -------------- | ----- | -------- |
| initial_equity | float | 期初权益 |



**获取静态权益**

`context.get_static_equity()`

**参数**

无

**返回**

| 返回          | 类型  | 说明     |
| ------------- | ----- | -------- |
| static_equity | float | 静态权益 |



**获取动态权益**

`context.get_dynamic_equity()`

**参数**

无

**返回**

| 返回           | 类型  | 说明     |
| -------------- | ----- | -------- |
| dynamic_equity | float | 动态权益 |

**获取累计盈亏**

`context.get_accumulated_pnl()`

**参数**

无

**返回**

| 返回 | 类型  | 说明     |
| ---- | ----- | -------- |
| pnl  | float | 累计盈亏 |

**获取累计盈亏比例**

`context.get_accumulated_pnl_ratio()`

**参数**

无

**返回**

| 返回  | 类型  | 说明         |
| ----- | ----- | ------------ |
| ratio | float | 累计盈亏比例 |

**获取日内盈亏**

`context.get_intraday_pnl()`

**参数**

无

**返回**

| 返回 | 类型  | 说明     |
| ---- | ----- | -------- |
| pnl  | float | 日内盈亏 |

**获取日内盈亏比例**

`context.get_intraday_pnl_ratio()`

**参数**

无

**返回**

| 返回  | 类型  | 说明         |
| ----- | ----- | ------------ |
| ratio | float | 日内盈亏比例 |



**获取合约多头总持仓量**

`context.get_long_tot(instrument_id, exchange_id)`

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

获取策略浦发银行600000持仓量：

`context.get_long_tot("600000", Exchange.SSE)`



**获取合约多头总可用持仓量**

`context.get_long_tot_avail(instrument_id, exchange_id)`

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

获取策略浦发银行600000总可用持仓量：

`context.get_long_tot_avail("600000", Exchange.SSE)`



**获取合约多头总冻结持仓量**

`context.get_long_tot_fro(instrument_id, exchange_id)`

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

获取策略浦发银行600000总冻结持仓量：

`context.get_long_tot_fro("600000", Exchange.SSE)`



**获取合约多头昨仓总持仓量**

`context.get_long_yd(instrument_id, exchange_id)`

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

获取策略浦发银行600000昨仓持仓量：

`context.get_long_yd("600000", Exchange.SSE)`



**获取合约多头昨仓可用持仓量**

`context.get_long_yd_avail(instrument_id, exchange_id)`

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

获取策略浦发银行600000昨仓可用持仓量：

`context.get_long_yd_avail("600000", Exchange.SSE)`



**获取合约多头昨仓冻结持仓量**

`context.get_long_yd_fro(instrument_id, exchange_id)`

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

`context.get_long_yd_fro("600000", Exchange.SSE)`



**获取合约多头已实现盈亏**

`context.get_long_realized_pnl(instrument_id, exchange_id)`

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

获取策略浦发银行600000已实现盈亏：

`context.get_long_realized_pnl("600000", Exchange.SSE)`



**获取合约多头浮动盈亏**

`context.get_long_unrealized_pnl(instrument_id, exchange_id)`

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

获取策略浦发银行600000浮动盈亏：

`context.get_long_unrealized_pnl("600000", Exchange.SSE)`



**获取合约空头总持仓量**

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

**获取合约空头总可用持仓量**

`context.get_short_tot_avail(instrument_id, exchange_id)`

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

获取策略rb1905空头总可用持仓量：

`context.get_long_tot_avail("rb1905", Exchange.SHFE)`

**获取合约空头总冻结持仓量**

`context.get_short_tot_fro(instrument_id, exchange_id)`

**参数**

| 参数          | 类型 | 说明     |
| ------------- | ---- | -------- |
| Instrument_id | str  | 合约ID   |
| exchange_id   | str  | 交易所ID |

**返回**

| 参数   | 类型 | 说明     |
| ------ | ---- | -------- |
| volume | int  | 持仓数量 |

**范例**

获取策略rb1905空头总冻结持仓量：

`context.get_short_tot_fro("600000", Exchange.SSE)`



**获取合约空头昨仓总持仓量**

`context.get_short_yd(instrument_id, exchange_id)`

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

获取策略rb1905空头昨仓持仓量：

`context.get_short_yd("600000", Exchange.SHFE)`



**获取合约空头昨仓可用持仓量**

`context.get_short_yd_avail(instrument_id, exchange_id)`

**参数**

| 参数          | 类型 | 说明     |
| ------------- | ---- | -------- |
| Instrument_id | str  | 合约ID   |
| exchange_id   | str  | 交易所ID |

**返回**

| 参数   | 类型 | 说明     |
| ------ | ---- | -------- |
| volume | int  | 持仓数量 |

**范例**

获取策略rb1905空头昨仓可用持仓量：

`context.get_short_yd_avail("600000", Exchange.SSE)`



**获取合约空头昨仓冻结持仓量**

`context.get_short_yd_fro(instrument_id, exchange_id)`

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

获取策略rb1905空头昨仓冻结持仓量：

`context.get_long_yd_fro("600000", Exchange.SSE)`



**获取合约空头已实现盈亏**

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



**获取合约空头浮动盈亏**

`context.get_short_unrealized_pnl(instrument_id, exchange_id)`

**参数**

| 参数          | 类型 | 说明     |
| ------------- | ---- | -------- |
| Instrument_id | str  | 合约ID   |
| exchange_id   | str  | 交易所ID |

**返回**

| 返回 | 类型  | 说明         |
| ---- | ----- | ------------ |
| pnl  | float | 空头浮动盈亏 |

**范例**

获取策略rb1905浮动盈亏：

`context.get_short_unrealized_pnl("600000", Exchange.SSE)`

