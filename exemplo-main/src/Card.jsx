export default function Card(props) {
  // props = propridades
  const Icon = props.icon;
  return (
    // forma reduzida de escrever <div>

    <>
      {/* código em jsx (html), conteúdo principal  */}

      <div className="e-card playing" onClick={props.onClick}>
        <div className="image">
          <img src={props.img} alt="" />
        </div>

        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>

        <div className="card">
          <div className="play-indicator">
            <span>▶</span>
          </div>

          <div className="infotop">
            {/* Renderiza o ícone só se houver */}
            {Icon && <Icon className="icon" />}

            <div className="name">
              <p>{props.texto}</p>
              {/* propriedade texto */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function CardOutro() {
  return <>isso é um Card</>;
}

// export default (por padrão)
// pode ficar no início ou no final do código
