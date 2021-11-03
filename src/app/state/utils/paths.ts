type XStateReservedKeys =
  | 'after'
  | 'context'
  | 'entry'
  | 'exit'
  | 'id'
  | 'initial'
  | 'invoke'
  | 'on'
  | 'onDone'
  | 'onExit'
  | 'type';

export type ProduceSchema<GivenType> = {
  [Key in keyof GivenType as Key extends XStateReservedKeys
    ? never
    : Key]: Key extends XStateReservedKeys
    ? never
    : ProduceSchema<GivenType[Key]>;
};

type GetKeypaths<GivenType, Filter extends string = '__!!PLACEHOLDER!!__'> = {
  [Key in keyof GivenType & string]: GivenType[Key] extends object
    ? Key extends Filter
      ? GetKeypaths<GivenType[Key], Filter>
      : Key | `${Key}.${GetKeypaths<GivenType[Key], Filter>}`
    : Key;
}[keyof GivenType & string];

export type GetStates<GivenType> = GetKeypaths<GivenType, 'states'>;
