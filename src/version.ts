import * as semver from 'semver'

export function isSemVer(version: string): boolean {
  return semver.valid(version) !== null
}

export function isPrelease(version: string): boolean {
  return semver.prerelease(version) !== null
}
