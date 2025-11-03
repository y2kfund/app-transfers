import { Transfer } from '@y2kfund/core/transfers';
import { TransfersProps } from './index';
declare const _default: import('vue').DefineComponent<TransfersProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "row-click": (row: Transfer) => any;
    minimize: () => any;
    maximize: () => any;
}, string, import('vue').PublicProps, Readonly<TransfersProps> & Readonly<{
    "onRow-click"?: ((row: Transfer) => any) | undefined;
    onMinimize?: (() => any) | undefined;
    onMaximize?: (() => any) | undefined;
}>, {
    accountId: string;
    highlightPnL: boolean;
    showHeaderLink: boolean;
    userId: string | null;
    window: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    transfersColumnsBtnRef: HTMLButtonElement;
    transfersColumnsPopupRef: HTMLDivElement;
    tableDiv: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
