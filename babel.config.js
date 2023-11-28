module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      "react-native-classname-to-style",
      ["react-native-platform-specific-extensions", { extensions: ["css"] }],
      [
        "module-resolver",
        {
          alias: {
            "@api": "./src/api",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
          },
        },
      ],
    ],
  };
};
