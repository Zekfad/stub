import { builtinModules as builtin, } from 'module';

import {
	resolve as resolvePath,
	join as joinPath,
} from 'path';

import { babel, } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';


const
	srcDir = resolvePath('./src'),
	distDir = resolvePath('./dist');

let plugins = [];

plugins.push(...[
	babel({
		exclude     : 'node_modules/**',
		babelHelpers: 'bundled',
		presets     : [
			[
				'@babel/preset-env',
				{
					targets: {
						node: '10',
					},
				},
			],
		],
	}),
	json(),
	resolve({
		extensions: [
			'.mjs', '.js', '.cjs', '.json', '.node',
		],
		preferBuiltins: true,
	}),
	typescript({
		noEmitOnError: true,
	}),
	commonjs(),
]);

if (!('dev' === (process.env.mode && process.env.mode.toLowerCase())))
	plugins.push(...[
		terser({
			compress: {
				arrows         : false,
				keep_classnames: true,
				keep_fnames    : true,
				keep_infinity  : true,
				typeofs        : false,
			},
			output: {
				comments: false,
			},
			mangle         : false,
			keep_classnames: true,
			keep_fnames    : true,
		}),
	]);

export default {
	input : joinPath(srcDir, 'index.js'),
	output: [
		{
			file     : joinPath(distDir, 'cjs', 'bundle.cjs'),
			format   : 'cjs',
			sourcemap: true,
		},
		{
			file     : joinPath(distDir, 'esm', 'bundle.mjs'),
			format   : 'es',
			sourcemap: true,
		},
	],
	plugins,
	external: [ ...builtin, ],
};
