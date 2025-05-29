import { ArmaItf } from "./ArmaItf"


export interface TestesItf {
    id: string
    clienteId: string
    armaId: string
    arma: ArmaItf
    resultado: string
    observacoes: string
    createdAt: string
    updatedAt: string | null
}