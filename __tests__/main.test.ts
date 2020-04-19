import * as core from '@actions/core'
import { run } from '../src/main'
jest.mock('@actions/core')

describe('when running the action', () => {
  const fakeSetOutput = core.setOutput as jest.MockedFunction<typeof core.setOutput>
  test('it should set release-url output parameter', async () => {
    await run()
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything())
  })
})