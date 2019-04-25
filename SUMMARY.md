# Summary

* [Introduction](README.md)

* [Beginner Tutorial](./tutorial/BeginnerTutorial.md)
* [函数定义](./functions/init.md)
  * [基本方法](./functions/init.md)
    *  [init 初始化](./functions/init.md)
    *  [pre_run 运行前](./functions/pre_run.md)
    *  [pre_quit 退出前](./functions/pre_quit.md)
    *  [on_quote 行情信息更新](./functions/on_quote.md)
    *  [on_order 订单信息更新](./functions/Functions.md#on_order)
    *  [on_trade 成交信息更新](./functions/on_trade.md)
  * [context 提供函数](./context/context.add_md.md)
  * [设置相关函数](./context/context.add_md.md)
        * [context.add_md添加行情源](./context/context.add_md.md)
        * [context.add_account 添加交易账户](./context/context.add_account.md)
    * [Log 相关函数](./context/context.set_log_level.md)
      * [context.set_log_level 设置Log级别](./context/context.set_log_level.md)
      * [context.log_info 输出INFO级别Log信息](./context/context.log_info.md)
      * [context.log_warn 输出WARN级别Log信息](./context/context.log_warn.md)
      * [context.log_error 输出INFO级别Log信息](./context/contex.log_error.md#log_error)
    * [交易相关函数](./context/context.insert_limit_order.md)
        * [context.insert_limit_order 限价单](./context/context.insert_limit_order.md)
        * [context.insert_market_order 市价单](./context/context.insert_market_order.md)
        * [context.insert_fok_order FOK单](./context/context.insert_fok_order.md)
        * [context.insert_fak_order FAK单](./context/context.insert_fak_order.md)
        * [context.cancel_order 撤单](./context/context.cancel_order.md)
    * [仓位和资金管理相关函数](./context/context.get_initial_equity.md)
        * [context.get_initial_equity 获取期初权益](./context/context.get_initial_equity.md)
        * [context.get_static_equity 获取静态权益](./context/context.get_static_equity.md)
        * [context.get_dynamic_equity 获取动态权益](./context/context.get_dynamic_equity.md)
        * [context.get_accumulated_pnl 获取累计盈亏](./context/context.get_accumulated_pnl.md)
        * [context.get_accumulated_pnl_ratio 获取累计盈亏比例](./context/context.get_accumulated_pnl_ratio.md)
        * [context.get_intraday_pnl 获取日内盈亏](./context/context.get_intraday_pnl.md)
        * [context.get_intraday_pnl_ratio 获取日内盈亏比例](./context/context.get_intraday_pnl_ratio.md)
        * [context.get_long_tot  获取多头总持仓](./context/context.get_long_tot.md)
        * [context.get_long_tot_avail 获取多头总可用持仓](./context/context.get_long_tot_avail.md)
        * [context.get_long_tot_frozen 获取多头总冻结持仓](./context/context.get_long_tot_frozen.md)
        * [context.get_long_yd 获取合约多头昨仓持仓量](./context/context.get_long_yd.md)
        * [context.get_long_yd_avail 获取合约多头昨仓可用持仓量](./context/context.get_long_yd_avail.md)
        * [context.get_long_yd_frozen 获取合约多头昨仓冻结持仓量](./context/context.get_long_yd_frozen.md)
        * [context.get_long_realized_pnl 获取合约多头已实现盈亏](./context/context.get_long_realized_pnl.md)
        * [context.get_long_unrealized_pnl 获取合约多头未实现盈亏](./context/context.get_long_unrealized_pnl.md)
        * [context.get_short_tot 获取空头总持仓](./context/context.get_short_tot.md)
    
        * [context.get_short_tot_avail 获取空头总可用持仓](./context/context.get_short_tot_avail.md)
          
        * [context.get_short_tot_frozen  获取空头总冻结持仓](./context/context.get_short_tot_frozen.md)
          
        * [context.get_short_yd 获取合约空头昨仓持仓量](./context/context.get_short_yd.md)
          
        * [context.get_short_yd_avail 获取合约空头昨仓可用持仓量](./context/context.get_short_yd_avail.md)
          
        * [context.get_short_yd_frozen 获取合约空头昨仓冻结持仓量](./context/context.get_short_yd_frozen.md)
          
        * [context.get_short_realized_pnl 获取合约空头已实现盈亏](./context/context.get_short_realized_pnl.md)
          
        * [context.get_short_unrealized_pnl 获取合约空头未实现盈亏](./context/context.get_short_unrealized_pnl.md)
    * [其他函数](./context/UtilApi.md)
        * [context.get_nano 获取当前时间纳秒时间戳](./context/UtilApi.md)		
  
* 数据结构
  * [Quote 行情信息](./data_struct/Quote.md)
  * [Order 订单信息](./data_struct/Order.md)
  * [Trade 成交信息](./data_struct/Trade.md)
  
* [系统错误代码表](./sys_error/sys_error.md)
