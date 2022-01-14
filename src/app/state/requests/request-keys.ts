import upperFirst from 'lodash/upperFirst';

type RequestEvents = 'init' | 'clear' | 'error' | 'update';
type RequestEvent<
  GivenKey extends RequestModelKey,
  GivenEvent extends RequestEvents
> = `@request/${GivenEvent}/${GivenKey}`;

/**
 * The KeyNames class is a centralization convenience that lets us turn a
 * validation model key into a series of messages we reuse across the
 * factory functions in the form chart space.
 *
 * @class KeyNames
 */
export class RequestKeys<
  GivenKey extends RequestModelKey,
  Id extends Capitalize<GivenKey>
> {
  public static from<PotentialKey extends RequestModelKey>(
    potentialKey: PotentialKey
  ) {
    return new RequestKeys(potentialKey);
  }
  constructor(private content: GivenKey) {}

  get id(): Id {
    return upperFirst(this.content) as Id;
  }

  get service(): `handle${Id}Request` {
    return `handle${this.id}Request`;
  }

  get clear(): RequestEvent<GivenKey, 'clear'> {
    return `@request/clear/${this.content}`;
  }

  get error(): RequestEvent<GivenKey, 'error'> {
    return `@request/error/${this.content}`;
  }

  get init(): RequestEvent<GivenKey, 'init'> {
    return `@request/init/${this.content}`;
  }

  get handler(): `handle${Id}Request` {
    return `handle${this.id}Request`;
  }

  get request(): InitRequest<GivenKey> {
    return `${this.content}Request`;
  }

  get update(): RequestEvent<GivenKey, 'update'> {
    return `@request/update/${this.content}`;
  }

  toString() {
    return this.content;
  }
}
