import * as github from '@actions/github'
import * as version from './version'
import * as markdown from './markdown'
import * as core from '@actions/core'

export async function createReleaseDraft(
  versionTag: string,
  repoToken: string,
  changelog: string
): Promise<string> {
  const octokit = new github.GitHub(repoToken)

  const response = await octokit.repos.createRelease({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    tag_name: versionTag, // eslint-disable-line @typescript-eslint/camelcase
    name: version.removePrefix(versionTag),
    body: markdown.toUnorderedList(changelog),
    prerelease: version.isPrelease(versionTag),
    draft: true
  })

  if (response.status !== 201) {
    throw new Error(`Failed to create the release: ${response.status}`)
  }

  core.info(`Created release draft ${response.data.name}`)

  return response.data.html_url
}
