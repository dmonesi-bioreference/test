import capitalize from 'lodash/capitalize';

/**
 * The KeyNames class is a centralization convenience that lets us turn a
 * validation model key into a series of messages we reuse across the
 * factory functions in the form chart space.
 *
 * @class KeyNames
 */
export class KeyNames<
  GivenKey extends ValidationModelKey,
  Id extends Capitalize<GivenKey>
> {
  public static from<PotentialKey extends ValidationModelKey>(
    potentialKey: PotentialKey
  ) {
    return new KeyNames(potentialKey);
  }
  constructor(private content: GivenKey) {}

  get id(): Id {
    return capitalize(this.content) as Id;
  }

  get change(): ChangeType<GivenKey> {
    return `${this.content}Change`;
  }

  get update(): `update${Id}` {
    return `update${this.id}`;
  }

  get validate(): `validate${Id}` {
    return `validate${this.id}`;
  }

  get errors(): `assign${Id}Errors` {
    return `assign${this.id}Errors`;
  }

  get clear(): `clear${Id}Errors` {
    return `clear${this.id}Errors`;
  }

  toString() {
    return this.content;
  }
}
