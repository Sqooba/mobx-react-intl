import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import flow from 'rollup-plugin-flow';

const env = process.env.NODE_ENV

const config = {
  entry: 'src/index.js',
  external: [
    'react',
    'format-message', 
    'mobx', 
    'react-intl', 
    'mobx-react', 
  ],
  globals: {
    'react': 'React',
    'format-message': 'FormatMessage',
    'mobx': 'Mobx', 
    'react-intl': 'ReactIntl', 
    'mobx-react': 'MobxReact', 
  },
  format: 'umd',
  moduleName: 'MobxReactIntl',
  plugins: [
    nodeResolve(),
    babel({
      exclude: '**/node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    commonjs(), 
    flow()
  ]
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        // screw_ie8: true,
        warnings: false
      }
    })
  )
}

export default config
