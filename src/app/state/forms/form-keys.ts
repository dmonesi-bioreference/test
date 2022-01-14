import capitalize from 'lodash/capitalize';

type FormEvents =
  | 'change'
  | 'clear'
  | 'commit'
  | 'error'
  | 'validate'
  | 'update';

type FormEvent<
  GivenKey extends ValidationModelKey,
  GivenEvent extends FormEvents
> = `@forms/${GivenEvent}/${GivenKey}`;

/**
 * The KeyNames class is a centralization convenience that lets us turn a
 * validation model key into a series of messages we reuse across the
 * factory functions in the form chart space.
 *
 * @class KeyNames
 */
export class FormKeys<
  GivenKey extends ValidationModelKey,
  Id extends Capitalize<GivenKey>
> {
  public static from<PotentialKey extends ValidationModelKey>(
    potentialKey: PotentialKey
  ) {
    return new FormKeys(potentialKey);
  }
  constructor(private content: GivenKey) {}

  get id(): Id {
    return capitalize(this.content) as Id;
  }

  get change(): FormChange<GivenKey> {
    return `${this.content}Change`;
  }

  get clear(): FormEvent<GivenKey, 'clear'> {
    return `@forms/clear/${this.content}`;
  }

  get commit(): FormEvent<GivenKey, 'commit'> {
    return `@forms/commit/${this.content}`;
  }

  get errors(): FormEvent<GivenKey, 'error'> {
    return `@forms/error/${this.content}`;
  }

  get validate(): FormEvent<GivenKey, 'validate'> {
    return `@forms/validate/${this.content}`;
  }

  get update(): FormEvent<GivenKey, 'update'> {
    return `@forms/update/${this.content}`;
  }

  toString() {
    return this.content;
  }
}
