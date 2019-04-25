**限价单**

`context.insert_limit_order(instrument_id, exchange_id, account_id, volume, side, offset)`

**参数**

| 参数          | 类型  | 说明     |
| ------------- | :---: | -------- |
| instrument_id |  str  | 合约ID   |
| exchange_id   |  str  | 交易所ID |
| account_id    |  str  | 交易账号 |
| limit_price   | float | 价格     |
| volume        |  int  | 数量     |
| side          |  str  | 买卖方向 |
| offset        |  str  | 开平方向 |

**返回**

|   返回   | 类型 |  说明  |
| :------: | ---- | :----: |
| order_id | long | 订单ID |

**范例**

- 通过交易账户acc_1以12.0的价格买200股浦发银行：

`context.insert_limit_order("600000", Exchange.SSE, "acc_1", 12.0, 200, Side.Buy, Offset.Open)`

- 通过交易账户acc_2以3500的价格开仓买入2手上期所rb1906合约：

`context.insert_limit_order("rb1906", Exchange.SHFE, "acc_2", 3500.0, 2, Side.Buy, Offset.Open)`



**市价单**

`context.insert_market_order(instrument_id, exchange_id, account_id, volume, side, offset)`

**参数**

| 参数          | 类型 | 说明     |
| ------------- | ---- | -------- |
| instrument_id | str  | 合约ID   |
| exchange_id   | str  | 交易所   |
| account_id    | str  | 账号ID   |
| volume        | int  | 数量     |
| side          | str  | 买卖方向 |
| offset        | str  | 开平方向 |

**返回**

| 返回     | 类型 | 说明   |
| -------- | ---- | ------ |
| order_id | long | 订单ID |

**范例**

通过交易账户acc_1以市价买200股浦发银行：

`context.insert_market_order("600000", Exchange.SSE, "acc_1", 200, Side.Buy, Offset.Open)`

**说明**

> 上期所不支持市价单。
>
> 不同交易所市价单撮合规则不同，上交所和深交所可以指定不同价格类型的市价单，目前功夫采用最优五档即时成交转撤销。

**FOK 订单**

`context.insert_fok_order(instrument_id, exchange_id, account_id, limit_price, volume, side, offset)`

**参数**

| 参数          | 类型  | 说明     |
| ------------- | ----- | -------- |
| instrument_id | str   | 合约ID   |
| exchange_id   | str   | 交易所ID |
| account_id    | str   | 账号ID   |
| limit_price   | float | 价格     |
| volume        | int   | 数量     |
| side          | str   | 买卖方向 |
| offset        | str   | 开平方向 |

**返回**

| 返回     | 类型 | 说明   |
| -------- | ---- | ------ |
| order_id | long | 订单ID |

**范例**

通过交易账户acc_2以3500的价格开仓买入2手上期所rb1906合约，立刻全部成交、否则自动撤销：

`context.insert_fok_order("rb1906", Exchange.SHFE, "acc_2", 3500.0, 2, Side.Buy, Offset.Open)`

**说明**

> 立刻全部成交、否则自动撤销。
>
> SHFE/DCE/CFFEX支持 FOK，ZCE 暂不支持。



**FAK 订单**

`context.insert_fak_order(instrument_id, exchange_id, account_id, limit_price, volume, side, offset)`

**参数**

| 参数          | 类型  | 说明     |
| ------------- | ----- | -------- |
| instrument_id | str   | 合约ID   |
| exchange_id   | str   | 交易所ID |
| account_id    | str   | 账号ID   |
| limit_price   | float | 价格     |
| volume        | int   | 数量     |
| side          | str   | 买卖方向 |
| offset        | str   | 开平方向 |

**返回**

| 返回     | 类型 | 说明   |
| -------- | ---- | ------ |
| order_id | long | 订单ID |

**范例**

通过交易账户acc_2以3500的价格开仓买入2手上期所rb1906合约，立刻全部成交剩余转撤销：

`context.insert_fak_order("rb1906", Exchange.SHFE, "acc_2", 3500.0, 2, Side.Buy, Offset.Open)`

**说明**

> 立刻成交剩余转撤销，交易所能够使全部或者部分订单在指定价位上立刻成交。国内交易所不支持设置最小成交手数。
>
> SHFE/DCE/CFFEX/DCE 均支持。



**撤单**

`context.cancel_order(order_id)`

**参数**

| 参数     | 类型 | 说明   |
| -------- | ---- | ------ |
| order_id | long | 订单ID |

**返回**

| 返回      | 类型 | 说明       |
| --------- | ---- | ---------- |
| action_id | long | 订单操作ID |

**范例**

撤销订单 1000111112

`context.cancel_order(1000111112)`