import * as core from '@actions/core'

export async function run(): Promise<void> {
  try {
    // implementation
    core.setOutput('release-url', 'http://example.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
