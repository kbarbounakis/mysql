/**
 * @license
 * MOST Web Framework 2.0 Codename Blueshift
 * Copyright (c) 2014, Kyriakos Barbounakis k.barbounakis@gmail.com
 *                     Anthi Oikonomou anthioikonomou@gmail.com
 *
 * Use of this source code is governed by an BSD-3-Clause license that can be
 * found in the LICENSE file at https://themost.io/license
 */
import { MySqlAdapter } from './MySqlAdapter';
import { MySqlFormatter } from './MySqlFormatter';

function createInstance(options) {
    return new MySqlAdapter(options);
}

export {
    MySqlAdapter,
    MySqlFormatter,
    createInstance
}