import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {

  const {tabelaVisivel, exibirFormulario, exibirTabela} = useTabelaOuForm()
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const repo: ClienteRepositorio = new ColecaoCliente()

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    exibirFormulario()
  }

  async function clienteExcluido(cliente: Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }
  function novoCliente() {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  return {
    cliente,
    clientes,
    salvarCliente,
    novoCliente,
    clienteExcluido,
    clienteSelecionado,
    obterTodos,
    tabelaVisivel,
    exibirTabela
  }
}