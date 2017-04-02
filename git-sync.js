'use strict'

const git = require('nodegit')
const path = require('path')
const fs = require('fs-extra')

const debug = require('debug')('static-node-server:git-sync')
debug(`Starting sync..`)

const remoteUrl = 'https://github.com/VikramTiwari/static-html-git-sync.git'
const localPath = path.join(__dirname, 'public')
const cloneOptions = {
  checkoutBranch: 'master'
}

/**
 * Clone remote to local path with options
 *
 * @param {string} remoteUrl
 * @param {string} localPath
 * @param {object} cloneOptions
 */
function clone(remoteUrl, localPath, cloneOptions) {
  // first cleanup the local directory
  fs.removeSync(localPath)
  // then clone remote into local
  git.Clone(remoteUrl, localPath, cloneOptions).then(function (repo) {
    debug(`Cloned ${path.basename(remoteUrl)} to ${repo.workdir()}`)
  }).catch(function (error) {
    debug(error)
  })
}

clone(remoteUrl, localPath, cloneOptions)
