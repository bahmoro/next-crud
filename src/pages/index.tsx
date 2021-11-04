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
    <div className=" h-screen w-full">
      <Header></Header>
      <div className={`
        flex h-3/4 justify-center items-center
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
