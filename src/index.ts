import Transfers from './Transfers.vue'

export { Transfers }
export default Transfers

// Props interface
export interface TransfersProps {
  accountId: string
  highlightPnL?: boolean
  onRowClick?: (row: any) => void
  showHeaderLink?: boolean  // Whether to show the header as a router-link (for use in dashboard with routing)
  userId?: string | null    // Current user ID for access control
  window?: string | null    // Current window context for access control
}