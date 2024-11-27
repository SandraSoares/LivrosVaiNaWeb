import s from './inicio.module.scss'
import community from '../../assets/community.png'
import balance from '../../assets/balance.png'
import reading from '../../assets/reading.png'
import transform from '../../assets/transform.png'

export default function Inicio(){
    return (
        <main>
          <section className={s.primeiraSessaoInicio}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section> 

            <section className={s.porqueDoar}>
                <h2>Porque devo doar?</h2>
            </section> 
                 <div className={s.containerCards}>
            <section>
                <img src={community} alt="Imagem ilustrando circulo com várias pessoas" />
                <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </section>

            <section>
                <img src={reading} alt="" />
                <p>Estimula o hábito da leitura e o aprendizado contínuo</p>
            </section>

            <section>
                 <img src={transform} alt="" />
                 <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
            </section>

            <section>
                <img src={balance} alt="" />
                <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
            </section>
                 </div>
        </main>
    )
}