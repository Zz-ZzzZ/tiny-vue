import '@opentiny/vue-theme/input/index.css';
declare const _default: import("vue").DefineComponent<{
    emitter: ObjectConstructor;
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "select-change" | "dodestroy")[], "pick" | "select-change" | "dodestroy", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    emitter: ObjectConstructor;
}>> & {
    onPick?: ((...args: any[]) => any) | undefined;
    "onSelect-change"?: ((...args: any[]) => any) | undefined;
    onDodestroy?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;