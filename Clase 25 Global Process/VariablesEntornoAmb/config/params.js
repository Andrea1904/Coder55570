import { Command } from 'commander'

const program = new Command()

program
.option('--mode <mode>', 'Modo de trabajo', 'prd')

program.parse()

console. log('Opciones de ejecucion ', program.opts())

console. log('Opciones de ejecucion ', program.args)

export default program.opts()

