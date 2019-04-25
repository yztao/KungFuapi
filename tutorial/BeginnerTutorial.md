# Beginner Tutorial

以下策略是简单的通过 **XTP** 柜台订阅浦发银行，并且在收到行情更新以后通过账号ACC_1以申卖价1买入500股浦发银行：

```python	 
def init(context):
  context.add_md(Source.XTP)
  context.add_account(Source.XTP, "ACC_1", 10000.0)
  context.subscribe(Source.XTP, ["600000"], Exchange.SSE)
  
def on_quote(context, quote):
  if quote.instrument_id.decode('utf-8') == "600000":
      context.insert_limit_order("600000", Exchange.SSE, "ACC_1", quote.ask_price[0], 500, Side.Buy, Offset.Open)
```









