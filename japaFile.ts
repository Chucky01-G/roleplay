import { configure, run } from '@japa/runner'
import { specReporter } from '@japa/spec-reporter'

import 'reflect-metadata'

configure({
  files: ['tests/**/*.spec.ts'],
  reporters: [specReporter()],
})

run()
