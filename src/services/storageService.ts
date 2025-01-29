export const setStorageItem = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value); // Преобразуем в строку

    localStorage.setItem(key, serializedValue);
  } catch {
    throw Error('This UnValid data');
  }
};

export const getStorageItem = <T>(key: string): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);

    return serializedValue ? JSON.parse(serializedValue) : null;
  } catch {
    throw Error('Could not get storage item');

    return null;
  }
};

export const removeStorageItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch {
    throw Error('Could not remove storage item');
  }
};

export const clearStorage = (): void => {
  try {
    localStorage.clear();
  } catch {
    throw Error('Could not clear storage');
  }
};
