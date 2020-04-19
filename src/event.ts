import * as core from '@actions/core'
import * as github from '@actions/github'

// helper fn to read event data
export function getCreatedTag(): string | null {
  if (github.context.eventName !== 'create') {
    core.info(`The event name was ${github.context.eventName}`)
    return null
  }

  if (github.context.payload.ref_type != 'tag') {
    core.info(`The created reference was a branch, not a tag`)
    return null
  }

  return github.context.payload.ref
}
