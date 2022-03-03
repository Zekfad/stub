import * as commonjs from './commonjs.cjs';
import * as ecmaModule from './module.mjs';
import * as typescript from './typescript';


export default typescript.stubTs || commonjs.stubCjs || ecmaModule.stubMjs;
