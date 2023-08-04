import { useEffect, useState } from "react";

type updateThemeType = (value?: string) => boolean;

export default function useDarkTheme(): [boolean, updateThemeType] {
  const [darkThemeIs, setDarkThemeIs] = useState<boolean>(false);

  const updateTheme: updateThemeType = (value) => {
    enum Theme {
      key = "theme",
      light = "light",
      dark = "dark",
    }

    if (value) {
      localStorage.setItem(Theme.key, value);
    } else if (!localStorage.getItem(Theme.key)) {
      localStorage.setItem(
        Theme.key,
        window.matchMedia(`(prefers-color-scheme: ${Theme.dark})`).matches
          ? Theme.dark
          : Theme.light
      );
    }

    const DOMElement: HTMLElement = document.documentElement;
    const isDarkTheme: boolean = localStorage.getItem(Theme.key) === Theme.dark;

    isDarkTheme
      ? DOMElement.classList.add(Theme.dark)
      : DOMElement.classList.remove(Theme.dark);

    setDarkThemeIs(isDarkTheme);

    return isDarkTheme;
  };

  useEffect(() => {
    updateTheme();
  }, []);

  return [darkThemeIs, updateTheme];
}
