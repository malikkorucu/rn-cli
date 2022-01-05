module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@config": "./src/config",
          "@pages": "./src/pages",
          "@icons": "./src/components/icons",
          "@lang": "./src/lang",
          "@data": "./src/data",
          "@service": "./src/base/service",
          "@reducers": "./src/base/store/reducers",
          "@validation": "./src/utility/Validation",
          "@actions": "./src/store/actions",
          "@store": "./src/store",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
