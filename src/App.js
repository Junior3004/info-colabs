import React from "react"
import { useState,useEffect } from "react"
import Instagram from "./assets/mdi_instagram.svg"
import Zap from "./assets/zap.svg"
import Telegran from "./assets/telegran.svg"
import Logo from "./assets/logo.svg"
import "./style.css";

const App = () =>{

  const [usuario,setUsuario] = useState([]);

  const [nome,setNome] = useState([]);

  const getDados = () =>{
    fetch("https://randomuser.me/api/?results=21")
      .then((r)=>{
        return r.json() 
      })
        .then((r2)=>{
          setUsuario(r2.results)
         console.log(r2.results)
        })
  }

  // Executa a funcao assim que a pagine e carregada
  useEffect(()=>{
    getDados()
  },[])

  // monitora o state "nome" e toda vez que um item de card de colaborador é clicado, da um console.log no valor em array retornado
  useEffect(()=>{
    // funcao que direciona ao topo da pagina
    // window.scrollTo(0,0);

  },[nome])


  const tituloPagina = "Informações dos Colaboradores"


  return(
    <>
       <nav className="navBar">
       <h3 className="ttPage">{tituloPagina.toUpperCase()}</h3>
        <span className="ttSub">Para mais detalhes click na no card</span>
       </nav>

        <br />
        {/* MODAL COM INFORMACOES DOS COLABORADORES */}
        <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"><span className="spanNomeModal">Nome:</span> <span className="spanNomeArray">{nome[1]} - {nome[2]} anos</span></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 divImgModal">
                <img src={nome[0]} alt="user" className="imgModalUser"/>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-6 col-lg-6">
                      <span className="spanDadoColab">Cidade:</span>
                      <br />
                      {nome[5]}
                    </div>
                    <div className="col-6 col-lg-6">
                      <span className="spanDadoColab">Telefone:</span>
                      <br />
                      {nome[4]}
                    </div>
                    <div className="col-6 col-lg-6">
                      <span className="spanDadoColab">Naturalidade:</span>
                      <br />
                      {nome[6]}
                    </div>
                    <div className="col-6 col-lg-6">
                      <span className="spanDadoColab">País:</span>
                      <br />
                      {nome[7]}
                    </div>
                    <div className="col-lg-12">
                      <span className="spanDadoColab">Email:</span>
                      <br />
                      {nome[3]}
                    </div>

                  </div>
                
                </div>
              </div>
            </div>

            
            
          </div>

        </div>
      </div>
    </div>

        
        <div className="divWrap">
          
          
          {usuario.map((item,index)=> (
              <div key={index} className="divItem" data-toggle="modal" data-target="#modalExemplo" onClick={()=>setNome([item.picture.large,item.name.first,item.dob.age,item.email,item.phone,item.location.city,item.nat,item.location.country])}>
               
                <div className="divImgNome">
                  <div className="divBackColab">
                  <img src={item.picture.large} alt="user1" className="imgColab"/>
                  </div>
                
                  <div className="divName">
                    <p><span className="titleName">{item.name.title}</span>
                    <span className="spanNome">{item.name.first}</span>
                    </p>
                    <div className="divSocial">
                      <img src={Instagram} alt="social1" className="imgSocial social_1"/>
                      <img src={Zap} alt="social2" className="imgSocial social_2"/>
                      <img src={Telegran} alt="social3" className="imgSocial social_3"/>
                    </div>

                    
                  </div>
                </div>
              </div>
          ))
          }
          </div>
          <div className="container-fluid footer">
            <div className="row">
              <div className="col text-center">
              <a href="https://junioroliveira-dev.com.br/" target="_blank" className="linkFooter">
              <img src={Logo} alt="logo" /> 
                <p className="pFooter">Júnior Oliveira - Front-End Developer </p> </a>
              </div>
            </div>
          </div>
    </>
  )
}

export default App