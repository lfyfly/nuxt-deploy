/**
 * Input prompt example
 */

'use strict'
const inquirer = require('inquirer')

const questions = [
  {
    type: 'list',
    name: 'env',
    message: '请选择要发布的环境',
    choices: ['test', 'prod']
  },
  {
    type: 'input',
    name: 'branch',
    message: '请输入发布分支名',
    default() {
      return 'master'
    },
    validate(value) {
      if (value) return true
      return '发布分支名必填'
    }
  },
  {
    type: 'list',
    name: 'npmInstall',
    message: '是否执行 npm install',
    choices: ['yes', 'no']
  }
]

inquirer.prompt(questions).then((answers) => {
  runDeploySh(answers)
})

function runDeploySh(args) {
  // eslint-disable-next-line no-console
  console.log({ args })
  const { env, branch, npmInstall } = args
  const { spawn } = require('child_process')
  const ls = spawn('bash', ['deploy.sh', env, branch, npmInstall])

  ls.stdout.on('data', (data) => {
    // eslint-disable-next-line no-console
    console.log(`${data}`)
  })

  ls.stderr.on('data', (data, a) => {
    // eslint-disable-next-line no-console
    console.error(`${data}`)
  })

  ls.on('close', (code) => {
    // eslint-disable-next-line no-console
    console.log(`child process exited with code ${code}`)
  })
}
