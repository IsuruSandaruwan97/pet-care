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

export const resolveHref = (
  target: { section: string; page?: string },
  pathname: string,
) => {
  if (target.section === "home") {
    return "/";
  }

  if (target.page && pathname === `/${target.page}`) {
    return pathname;
  }

  if (pathname === "/") {
    return `#${target.section}`;
  }

  return target.page ? `/${target.page}` : `/#${target.section}`;
};
