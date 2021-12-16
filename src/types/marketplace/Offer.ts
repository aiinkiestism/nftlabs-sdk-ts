import { BigNumber, BigNumberish } from "ethers";
import { CurrencyValue } from "../../common/currency";

export interface Offer {
  /**
   * The id of the listing.
   */
  listingId: BigNumberish;

  /**
   * The address of the buyer who made the offer.
   */
  buyerAddress: string;

  /**
   * The quantity of tokens to be bought.
   */
  quantityDesired: BigNumberish;

  /**
   * The amount of tokens offered.
   */
  tokens: BigNumber;

  /**
   * The `CurrencyValue` of the listing. Useful for displaying the price information.
   */
  currencyValue: CurrencyValue;

  /**
   * The currency contract address of the offer token.
   */
  currencyContractAddress: string;
}
