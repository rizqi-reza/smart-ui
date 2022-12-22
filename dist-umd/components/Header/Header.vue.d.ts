export interface IHeaderProps {
    user?: {
        name: string;
    };
}
declare const _sfc_main: import("vue").DefineComponent<{
    user: {
        type: ObjectConstructor;
        required: false;
    };
}, {
    props: {
        user?: {
            name: string;
        } | undefined;
    };
    emit: (event: "login" | "logout" | "createAccount", ...args: any[]) => void;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
    Button: import("vue").DefineComponent<{
        label: {
            type: StringConstructor;
            required: false;
        };
        size: {
            type: null;
            required: false;
        };
        variant: {
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
            size?: import("../../tokens/size").TSize | undefined;
            variant?: import("../../tokens/variant").TVariant | undefined;
            color?: import("../../tokens/color").TColor | undefined;
            loading?: boolean | undefined;
            disabled?: boolean | undefined;
        };
        size: import("../../tokens/size").TSize;
        color: import("../../tokens/color").TColor;
        isSolid: import("vue").ComputedRef<boolean>;
        isOutline: import("vue").ComputedRef<boolean>;
        emit: (event: "click", ...args: any[]) => void;
        onClick: () => void;
        sizeClass: {
            [x: string]: boolean;
        };
        backgroundClass: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        borderClass: import("vue").ComputedRef<{
            [x: string]: boolean;
            'border-2': boolean;
        }>;
        textClass: import("vue").ComputedRef<{
            [x: string]: boolean;
            'text-white': boolean;
            'hover:underline': boolean;
            'hover:opacity-100': boolean;
        }>;
        disabledClass: import("vue").ComputedRef<{
            'disabled:opacity-50': boolean | undefined;
            'disabled:cursor-not-allowed': boolean | undefined;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        label: {
            type: StringConstructor;
            required: false;
        };
        size: {
            type: null;
            required: false;
        };
        variant: {
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
        onClick?: ((...args: any[]) => any) | undefined;
    }, {
        loading: boolean;
        disabled: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("login" | "logout" | "createAccount")[], "login" | "logout" | "createAccount", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    user: {
        type: ObjectConstructor;
        required: false;
    };
}>> & {
    onLogin?: ((...args: any[]) => any) | undefined;
    onLogout?: ((...args: any[]) => any) | undefined;
    onCreateAccount?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
