export function useLocalStorage() {
  function getValue(key: string) {
    if (!localStorage) return null;
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  function setValue(key: string, value: string) {
    if (!localStorage) return null;
    localStorage.setItem(key, value);
  }

  return {
    getValueFromLocalStorage: getValue,
    saveValueToLocalStorage: setValue,
  }
}