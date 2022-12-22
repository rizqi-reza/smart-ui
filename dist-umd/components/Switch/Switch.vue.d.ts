import { TColor } from '../../tokens/color';
import { TSize } from '../../tokens/size';
export interface ISwitchProps {
    label?: string;
    size?: TSize;
    color?: TColor;
    loading?: boolean;
    disabled?: boolean;
}
declare const _sfc_main: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: false;
    };
    size: {
        type: null;
        required: false;
    };
    color: {
        type: null;
        required: false;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
}, {
    props: {
        label?: string | undefined;
        size?: TSize | undefined;
        color?: TColor | undefined;
        loading?: boolean | undefined;
        disabled?: boolean | undefined;
    };
    size: TSize;
    color: TColor;
    disabled: boolean | undefined;
    checked: import("vue").Ref<boolean>;
    sizeClass: {
        [x: string]: boolean;
        'w-14': boolean;
        'w-16': boolean;
        'w-20': boolean;
    };
    wrapperClass: import("vue").ComputedRef<{
        [x: string]: boolean;
        'bg-slate-100': boolean;
    }>;
    markerClass: import("vue").ComputedRef<{
        'before:absolute before:top-0.5': boolean;
        'before:left-0.5': boolean;
        'before:right-0.5': boolean;
        'before:drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]': boolean;
        'before:rounded-full before:content-[""] before:bg-white': boolean;
        'before:h-6 before:w-6': boolean;
        'before:h-8 before:w-8': boolean;
        'before:h-10 before:w-10': boolean;
    }>;
    spinnerClass: import("vue").ComputedRef<{
        [x: string]: boolean;
        'absolute top-1': boolean;
        'left-1': boolean;
        'right-1': boolean;
    }>;
    disabledClass: {
        'opacity-50': boolean | undefined;
        'cursor-not-allowed': boolean | undefined;
        'cursor-pointer': boolean;
    };
    emit: (event: "toggle", ...args: any[]) => void;
    toggle: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "toggle"[], "toggle", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: false;
    };
    size: {
        type: null;
        required: false;
    };
    color: {
        type: null;
        required: false;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
}>> & {
    onToggle?: ((...args: any[]) => any) | undefined;
}, {
    loading: boolean;
    disabled: boolean;
}>;
export default _sfc_main;
