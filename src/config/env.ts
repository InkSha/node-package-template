import dotenv from 'dotenv'
// import dotenvExpand from 'dotenv-expand'
import path from 'path'

/**
 * @description init env
 * @date 2024-08-16
 * @author InkSha<inksha@inksha.com>
 */
;(function initEnv() {
  const customPath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`)
  dotenv.config({ path: customPath })
})()
