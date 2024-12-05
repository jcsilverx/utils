import { mergeConfig } from "./index";

type UserConfig = {
  test?: {
    globals?: boolean;
    environment?: "node" | "jsdom";
  };
};

const configBase: UserConfig = {
  test: {
    globals: false,
    environment: "node",
  },
};

describe("mergeConfig fn", (): void => {
  it("should override _globals_ to true", (): void => {
    const config: UserConfig = mergeConfig(configBase, {
      test: {
        globals: true,
        environment: "node",
      },
    });

    expect(config).toEqual({
      test: {
        globals: true,
        environment: "node",
      },
    });
  });

  it("should override _environment_ from node to jsdom", (): void => {
    const config: UserConfig = mergeConfig(configBase, {
      test: {
        environment: "jsdom",
      },
    });

    expect(config).toEqual({
      test: {
        globals: false,
        environment: "jsdom",
      },
    });
  });

  it("should left as is", (): void => {
    const config: UserConfig = mergeConfig(configBase, {});

    expect(config).toEqual({
      test: {
        globals: false,
        environment: "node",
      },
    });
  });
});
