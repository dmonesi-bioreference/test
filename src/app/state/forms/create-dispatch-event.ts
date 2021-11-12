import isObject from 'lodash/isObject';

import { KeyNames } from './key-names';

/**
 * CreateDispatchEvent is a class handler meant to wrap around a model,
 * a payload, and an app chart send function, and allow only typesafe,
 * appropriate messages to pass through.
 *
 * You use the CreateDispatchEvent by calling it like so:
 *
 *     const payload = { type: "changeEventName", field: string, valud: string }
 *     const event = CreateDispatchEvent.from(send)
 *     event.perform(validationModel, payload)
 */
export class CreateDispatchEvent<
  GivenModel extends ValidationModels[ValidationModelKey]
> {
  public static from(send: AppService['send']) {
    return {
      perform: (
        model: ValidationModels[ValidationModelKey],
        payload: unknown
      ) => new CreateDispatchEvent(model, send).perform(payload),
    };
  }

  constructor(private contents: GivenModel, private send: AppService['send']) {}

  /**
   * perform takes an unknown argument, and if that argument is a change event
   * payload appropriate for the specific CreateDispatchEvent instance, then
   * it will send the event.
   *
   * @param payload {unknown} You could give this literally anything, safely.
   */
  perform(payload: unknown) {
    if (this.isChangePayload(payload)) {
      this.send(payload);
    }
  }

  /**
   * isChangePayload is a type guard, meant to take a look at the hard code
   * structure of a given payload and assert that it has the correct type.
   * It checks that the object shape is correct, makes sure the field is
   * appropriate for the given model of the instance, and makes sure that the
   * message type itself is accurate. If any of these are wrong, it fails
   * the type.
   *
   * @param givenPayload An unknown payload, which will be measured against
   * the given model of the CreateDispatchEvent instance.
   * @returns {boolean} If the given payload matches a change payload, then
   * true; else, false.
   */
  private isChangePayload(
    givenPayload: unknown
  ): givenPayload is ChangeEventMap[keyof ChangeEventMap] {
    const validFields = Object.keys(this.contents.init);
    const isPotentialPayload =
      typeof givenPayload !== 'undefined' &&
      isObject(givenPayload) &&
      'type' in givenPayload &&
      'field' in givenPayload &&
      'value' in givenPayload;

    const fieldName = Reflect.get(givenPayload as object, 'field');
    const typeName = Reflect.get(givenPayload as object, 'type');

    const hasChangeType = typeName === KeyNames.from(this.contents.key).change;
    const hasValidField = validFields.includes(fieldName);

    return isPotentialPayload && hasValidField && hasChangeType;
  }
}
