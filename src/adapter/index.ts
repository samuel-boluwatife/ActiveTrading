/**
 * Public entry point for embedding ActiveTrading.
 *
 * Implement `ActiveTradingAdapter`, hand it to `<ActiveTradingProvider>`, and the
 * terminal runs against your backend — no fork, no patched files.
 */
export { ActiveTradingProvider } from "./provider.tsx";
export {
  getAdapter,
  hasAdapter,
  onAdapterChange,
  setAdapter,
} from "./registry.ts";
export type {
  Account,
  CandleRequest,
  Candle,
  ClosedPosition,
  ConnectionState,
  MarketDataSource,
  MarketEvent,
  ActiveTradingAdapter,
  Order,
  OrderModification,
  Page,
  PlaceOrderInput,
  Position,
  PositionModification,
  Quote,
  StorageDriver,
  Symbol,
  TradingEvent,
  TradingGateway,
  Unsubscribe,
} from "./types.ts";
