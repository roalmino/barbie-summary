import Image from "next/image";
import mainBarbieImage from "../images/main-barbie.png";

export default function Card() {
  return (
    <div className="flex flex-row items-center justify-between bg-barbie space-x-16 text-white tracking-wide h-max">
      <Image
        src={mainBarbieImage.src}
        alt="Main Barbie"
        width="400"
        height="200"
      />
      <div className="flex flex-col h-full content-around">
        <h1 className="">Barbie</h1>
        <p>
          Margot Robbie é uma talentosa atriz australiana. Conhecida por papéis
          como Harley Quinn em "Esquadrão Suicida" e "Aves de Rapina", sua
          versatilidade a destacou em produções como "Eu, Tonya" e "O Lobo de
          Wall Street". Com seu carisma e habilidade, ela conquistou o público e
          a crítica.
        </p>
        <p>
          A Barbie Sereia é uma boneca da linha da Mattel, com cauda brilhante e
          colorida. Ela vive aventuras subaquáticas, faz amizades com criaturas
          marinhas e ensina sobre amizade e autoconfiança. Conquistou crianças
          ao redor do mundo, estimulando a imaginação em um mundo mágico sob as
          águas.
        </p>
      </div>
    </div>
  );
}
