# Summary

* [Introduction](README.md)

* [Beginner Tutorial](./tutorial/BeginnerTutorial.md)
* [函数定义](./functions/Functions.md)
  * [基本方法](./functions/Functions.md)
    *  [init 初始化](./functions/Functions.md#init)
    *  [pre_run 运行前](./functions/Functions.md#pre_run)
    *  [pre_quit 退出前](./functions/Functions.md#pre_quit)
    *  [on_quote 行情信息更新](./functions/Functions.md#on_quote)
    *  [on_order 订单信息更新](./functions/Functions.md#on_order)
    *  [on_trade 成交信息更新](./functions/Functions.md#on_trade)
    
  * [context 提供函数](./context/LogApi.md)
  
    * [设置相关函数](./context/Setting.md) 
  * [context.add_md(source_Id) 添加行情源](./context/Setting.md#add_md)
      * [context.add_account(source_id, account_id, cash_limit) 添加交易账户](./context/Setting.md#add_account)
      
  * [Log 相关函数](./context/LogApi.md)
    * [context.set_log_level(level) 设置Log级别](./context/LogApi.md#set_log_level)
    * [context.log_info(msg) 输出INFO级别Log信息](./context/LogApi.md#log_info)
      * [context.log_warn(msg) 输出WARN级别Log信息](./context/LogApi.md#log_warn)
      * [context.log_error(msg) 输出INFO级别Log信息](./context/LogApi.md#log_error)
      
    * [交易相关函数](./context/TradeApi.md)
  
      * [context.insert_limit_order(instrument_id, exchange_id, account_id, volume, side, offset) 限价单](./context/TradeApi.md#insert_limit_order)
    * [context.insert_market_order(instrument_id, exchange_id, account_id, volume, side, offset) 市价单](./context/TradeApi.md#insert_market_order)
      * [context.insert_fok_order(instrument_id, exchange_id, account_id, volume, side, offset) FOK单](./context/TradeApi.md#insert_fok_order)
       * [context.insert_fak_order(instrument_id, exchange_id, account_id, volume, side, offset) FAK单](./context/TradeApi.md#insert_fak_order)
       * [context.cancel_order(order_id)) 撤单](./context/TradeApi.md#cancel_order)
    
    * [仓位和资金管理相关函数](./context/QueryApi.md)
  * [context.get_initial_equity() 获取期初权益](./context/QueryApi.md#get_initial_equity)
      
  * [context.get_static_equity() 获取静态权益](./context/QueryApi.md#get_static_equity)
      
  * [context.get_dynamic_equity() 获取动态权益](./context/QueryApi.md#get_dynamic_equity)
      
  * [context.get_accumulated_pnl() 获取累计盈亏](./context/QueryApi.md#get_accumulated_pnl)
      
  * [context.get_accumulated_pnl_ratio() 获取累计盈亏比例](./context/QueryApi.md#get_accumulated_pnl_ratio)
      
  * [context.get_intraday_pnl() 获取日内盈亏](./context/QueryApi.md#get_intraday_pnl)
      
  * [context.get_intraday_pnl_ratio() 获取日内盈亏比例](./context/QueryApi.md#get_intraday_pnl_ratio)
      
  * [context.get_long_tot(instrument_id, exchange_id) 获取多头总持仓](./context/QueryApi.md#get_long_tot)
      
  * [context.get_long_tot_avail(instrument_id, exchange_id) 获取多头总可用持仓](./context/QueryApi.md#get_long_tot_avail)
      
  * [context.get_long_tot_frozen(instrument_id, exchange_id) 获取多头总冻结持仓](./context/QueryApi.md#get_long_tot_frozen)
      
  * [context.get_long_yd(instrument_id, exchange_id) 获取合约多头昨仓持仓量](./context/QueryApi.md#get_long_yd)
      
  * [context.get_long_yd_avail(instrument_id, exchange_id) 获取合约多头昨仓可用持仓量](./context/QueryApi.md#get_long_yd_avail)
      
  * [context.get_long_yd_frozen(instrument_id, exchange_id) 获取合约多头昨仓冻结持仓量](./context/QueryApi.md#get_long_yd_frozen)
      
  * [context.get_long_realized_pnl(instrument_id, exchange_id) 获取合约多头已实现盈亏](./context/QueryApi.md#get_long_realized_pnl)
      
  * [context.get_long_unrealized_pnl(instrument_id, exchange_id) 获取合约多头未实现盈亏](./context/QueryApi.md#get_long_unrealized_pnl)
      
  * [context.get_short_tot(instrument_id, exchange_id) 获取空头总持仓](./context/QueryApi.md#get_short_tot)
      
* [context.get_short_tot_avail(instrument_id, exchange_id) 获取空头总可用持仓](./context/QueryApi.md#get_short_tot_avail)
      
* [context.get_short_tot_frozen(instrument_id, exchange_id) 获取空头总冻结持仓](./context/QueryApi.md#get_short_tot_frozen)
      
* [context.get_short_yd(instrument_id, exchange_id) 获取合约空头昨仓持仓量](./context/QueryApi.md#get_short_yd)
      
* [context.get_short_yd_avail(instrument_id, exchange_id) 获取合约空头昨仓可用持仓量](./context/QueryApi.md#get_short_yd_avail)
      
* [context.get_short_yd_frozen(instrument_id, exchange_id) 获取合约空头昨仓冻结持仓量](./context/QueryApi.md#get_short_yd_frozen)
      
* [context.get_short_realized_pnl(instrument_id, exchange_id) 获取合约空头已实现盈亏](./context/QueryApi.md#get_short_realized_pnl)
      
* [context.get_short_unrealized_pnl(instrument_id, exchange_id) 获取合约空头未实现盈亏](./context/QueryApi.md#get_short_unrealized_pnl)
  

    * [其他函数](./context/UtilApi.md)
  
        * [context.get_nano() 获取当前时间纳秒时间戳](./context/UtilApi.md#get_nano)		
  
* 数据结构
  * [Quote 行情信息](./data_struct/Quote.md)
  * [Order 订单信息](./data_struct/Order.md)
  * [Trade 成交信息](./data_struct/Trade.md)
  
* [系统错误代码表](./sys_error/sys_error.md)
