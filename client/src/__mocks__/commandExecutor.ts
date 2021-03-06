/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import * as Q from 'q';

interface IExecOptions {
    cwd?: string;
    stdio?: any;
    env?: any;
    encoding?: string;
    timeout?: number;
    maxBuffer?: number;
    killSignal?: string;
}

export namespace CommandExecutor {
    export function exec(command: string, args: string[] = [], options: IExecOptions = {}): Q.Promise<string> {
        console.log(command, args, options);

        return Q(`Python 3.6.3 :: Anaconda custom (64-bit)`);
    }

    export function execPythonActiveEditor(): Q.Promise<string> {
        return Q.Promise(resolve => {
            return resolve(`Python active editor executed!`);
        });
    }

    export function execQasmActiveEditor(scriptPath: string): Q.Promise<string> {
        return Q.Promise(resolve => {
            return resolve(`OpenQASM executed! ${scriptPath}`);
        });
    }

    export function execPythonFile(scriptPath: string, options: string[]): Q.Promise<string> {
        return Q.Promise(resolve => {
            return resolve(`Python file executed! ${scriptPath}  ${options}`);
        });
    }
}
