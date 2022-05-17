export { default as RegistryProxyMixin } from './lib/mixins/registry_proxy';
export { default as ContainerProxyMixin } from './lib/mixins/container_proxy';
export { default as compare } from './lib/compare';
export { default as isEqual } from './lib/is-equal';
export {
  default as Array,
  NativeArray,
  A,
  MutableArray,
  removeAt,
  uniqBy,
  isArray,
} from './lib/mixins/array';
export { default as Comparable } from './lib/mixins/comparable';
export { default as ArrayProxy } from './lib/system/array_proxy';
export { default as ObjectProxy } from './lib/system/object_proxy';
export { default as ActionHandler } from './lib/mixins/action_handler';
export { default as _ProxyMixin, contentFor as _contentFor } from './lib/mixins/-proxy';
export { default as MutableEnumerable } from './lib/mixins/mutable_enumerable';
export { default as TargetActionSupport } from './lib/mixins/target_action_support';
export { default as PromiseProxyMixin } from './lib/mixins/promise_proxy';

export { default as RSVP, onerrorDefault } from './lib/ext/rsvp'; // just for side effect of extending Ember.RSVP
export { typeOf } from './lib/type-of';
