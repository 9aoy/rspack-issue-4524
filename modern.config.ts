import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
  tools: {
    bundlerChain: (chain, { CHAIN_ID, bundler }) => {
      // add comments avoid sourcemap abnormal
      if (bundler.BannerPlugin) {
        chain
          .plugin(CHAIN_ID.PLUGIN.BANNER)
          .use(bundler.BannerPlugin, [{ banner: 'Micro front-end' }]);
      }
    },
  },
});
