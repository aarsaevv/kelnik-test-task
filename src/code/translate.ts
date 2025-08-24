import ru from "../locales/ru.json";

const ruDictionary: Record<string, string> = ru;

export const t = (key: string) => {
  return ruDictionary[key];
};
