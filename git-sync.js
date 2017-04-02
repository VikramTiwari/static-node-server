'use strict'

const git = require('nodegit')
const path = require('path')

const debug = require('debug')('static-node-server:git-sync')
debug(`Starting sync..`)

const remoteUrl = 'https://github.com/VikramTiwari/static-html-git-sync.git'
const localPath = path.join(__dirname, 'public')
const cloneOptions = {}

/**
 * Clone remote to local path with options
 *
 * @param {string} remoteUrl
 * @param {string} localPath
 * @param {object} cloneOptions
 */
function clone (remoteUrl, localPath, cloneOptions) {
  git.Clone(remoteUrl, localPath, cloneOptions).then(function (repo) {
    debug(`Cloned ${path.basename(remoteUrl)} to ${repo.workdir()}`)
  }).catch(function (error) {
    debug(error)
  })
}

clone(remoteUrl, localPath, cloneOptions)
