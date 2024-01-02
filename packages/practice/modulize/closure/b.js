var app = app || {};

app.b = (function () {
  const moduleName = "B";

  return {
    getName() {
      return moduleName;
    },
  };
})();
