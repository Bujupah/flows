export function prefix(location, ...prefixes) {
  return prefixes.some(
    (prefix) => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function navbar(location) {
  return true;
}

// I am kinda lost D:
export function tab(location) {
  return prefix(location, "sometab");
}
