import type { VNode } from 'vue'
import type { Store, StoreOptions } from 'vuex'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { ISSRMidwayKoaContext, ISSRNestContext, ISSRContext, ESMFeRouteItem } from 'ssr-types'
import type { Pinia } from 'pinia'
import type { Readable } from 'stream'

export interface ParamsKoa<T={}, U={}> {
  store: Store<T>
  router: RouteLocationNormalizedLoaded
  ctx?: ISSRMidwayKoaContext<U>
  pinia: Pinia
}

export interface ParamsNest<T={}, U={}> {
  store: Store<T>
  router: RouteLocationNormalizedLoaded
  ctx?: ISSRNestContext<U>
  pinia: Pinia
}

export interface Params<T={}, U={}> {
  store: Store<T>
  router: RouteLocationNormalizedLoaded
  ctx?: ISSRContext<U>
  pinia: Pinia
}
export type Fetch = (params: Params, ctx?: ISSRContext) => Promise<any>

export type ESMFetch = () => Promise<{
  default: Fetch
}>

export type IFeRouteItem = ESMFeRouteItem<{
  fetch?: ESMFetch
}>

export interface RoutesType {
  Layout: VNode
  App: VNode
  layoutFetch?: (params: Params, ctx?: ISSRContext) => Promise<any>
  FeRoutes: IFeRouteItem[]
  store?: StoreOptions<any>
}

export interface VueRouterOptions {
  base?: string
}

export type Vue3RenderRes = Readable | {
  html: string
  teleportsContext: {
    teleports?: Record<string, string> | undefined
  }
}
