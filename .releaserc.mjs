/**
 * @type { import('semantic-release').GlobalConfig }
 * @see https://semantic-release.gitbook.io/semantic-release/usage/configuration
 */
const config = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { type: "build", release: "patch" }
        ]
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        config: "conventional-changelog-cmyr-config",
      },
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "README.md"],
      },
    ],
    "@semantic-release/github",
  ],
}

export default config
