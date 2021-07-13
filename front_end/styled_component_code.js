function styledTag(selector) {
  const styledEl = document.querySelector(selector);

  return function (cssText) {
    const cssStyles = cssText.toString().split(";");
    const cssKeyValues = cssStyles.map((style) => style.split(":"));
    cssKeyValues.forEach(([key, value]) => {
      if (key && value) {
        styledEl.style[key.trim()] = value.trim();
      }
    });
    return styledEl;
  };
}
