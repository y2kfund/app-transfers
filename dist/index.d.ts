import { default as Transfers } from './Transfers.vue';
export { Transfers };
export default Transfers;
export interface TransfersProps {
    accountId: string;
    highlightPnL?: boolean;
    onRowClick?: (row: any) => void;
    showHeaderLink?: boolean;
    userId?: string | null;
    window?: string | null;
}
