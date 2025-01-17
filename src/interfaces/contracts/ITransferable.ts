import { TransactionReceipt } from "@ethersproject/providers";

export interface ITransferable {
  /**
   * Setter for transfer restriction.
   *
   * @param restrict - Boolean indicating whether to restrict transfer. (default: true)
   */
  setRestrictedTransfer(restrict: boolean): Promise<TransactionReceipt>;

  /**
   * Returns true if transfers are restricted. Otherwise returns false.
   *
   * @returns - True if transfers are restricted.
   */
  isTransferRestricted(): Promise<boolean>;
}
