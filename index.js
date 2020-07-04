'use strict'

const ace = require('@adonisjs/ace')
ace.addCommand(require('./commands/assessment'))

ace.wireUpWithCommander()
ace.invoke()