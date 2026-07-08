export const classNames = (
  ...classes: Array<string | false | null | undefined>
): string => {
  return classes.filter(Boolean).join(" ");
};

export const parseStatValue = (value: string) => {
  const match = value.match(/^([\d,]+)(.*)$/);

  if (!match) {
    return {
      target: 0,
      suffix: value,
    };
  }

  return {
    target: Number(match[1].replace(/,/g, "")),
    suffix: match[2],
  };
};

export const resolveHref = (slug: string, pathname: string) => {
  if (slug === "home") {
    return "/";
  }

  if (pathname === `/${slug}`) {
    return pathname;
  }

  return pathname === "/" ? `#${slug}` : `/#${slug}`;
};
