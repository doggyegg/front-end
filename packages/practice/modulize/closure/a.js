var app = app || {};

app.a = (function () {
  const moduleName = "A";

  return {
    getName() {
      return moduleName;
    },
  };
})();
