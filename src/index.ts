/**
 * @file src/index.ts
 * @descriptino entry file
 * @author InkSha<inksha@inksha.com>
 * @version 0.0.1
 * @license MIT
 * @createAt 2024-08-15
 * @modifyAt 2024-08-15
 */

import './config/env'

/**
 * @class Example
 * @description Template Example Class
 *
 * @example
 * ```ts
 * const hello = new Example("Hello World!")
 *
 * hello.say()
 * ```
 */
export class Example {
  /**
   * @param syntax need say syntax
   */
  constructor(
    /**
     * need say syntax
     *
     * @private
     */
    private readonly syntax: string,
  ) {}

  /**
   * say syntax
   *
   * @public
   */
  public say() {
    console.log(this.syntax, process.env)
  }
}

/**
 * @constant
 */
const hello = new Example('Hello World!')

hello.say()
