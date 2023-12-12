import { Command } from 'commander'

const program = new Command()

program
.option('-p <port>', 'Puerto del Servidor', 3000)
.option('--mode <mode>', 'Modo de trabajo DEV, QA, PRD', 'QA')
.option('-q <qualuty>', 'Calidad', 'Test')

program.parse()

console. log('Opciones de ejecucion ', program.opts())

console. log('Opciones de ejecucion ', program.args)

