export function getDirtyFieldsUtil<T extends object>(
  values: T,
  dirtyFields: Partial<Readonly<{ [key in keyof T]: boolean | undefined }>>
) {
  const payload: Partial<T> = {};

  for (const key in values) {
    if (Reflect.has(dirtyFields, key)) {
      payload[key] = values[key];
    }
  }

  return payload;
}
