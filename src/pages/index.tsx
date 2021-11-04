import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente, 
    clientes, 
    clienteSelecionado, 
    salvarCliente, 
    clienteExcluido, 
    novoCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div>
      <Header></Header>
      <div className={`
        flex h-screen justify-center items-center
         bg-gray-50
        text-white
      `}>
        <Layout titulo="Cadastro Simples">
          {tabelaVisivel? (
            <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}></Tabela>
            </>
          ) : (
            <Formulario 
            cliente={cliente} 
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}></Formulario>
          )}
        </Layout>
      </div>
    </div>
  )
}
