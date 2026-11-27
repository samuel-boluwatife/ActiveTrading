/**
 * ActiveTrading — an embeddable trading terminal.
 *
 * ```tsx
 * import { ActiveTradingProvider, Terminal } from "activetrading";
 * import { createDemoAdapter } from "activetrading/demo";
 * import "activetrading/style.css";
 *
 * <ActiveTradingProvider adapter={createDemoAdapter()}>
 *   <Terminal />
 * </ActiveTradingProvider>;
 * ```
 *
 * Point it at your own backend by implementing `ActiveTradingAdapter`, and compose
 * your own layout from the individual panels. Neither requires forking.
 */
export * from "./adapter/index.ts";
export * from "./terminal/index.ts";
export type { ActiveTradingProviderProps } from "./adapter/provider.tsx";
export { onNotification, type Notification } from "./notifications.ts";
export type { Candle, Order, Position, Symbol, PlaceOrderInput } from "./services/schemas.ts";
