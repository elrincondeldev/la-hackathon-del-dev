import { AWARD_TYPE } from '../constants'
import { Award } from './common/Award'
import { Title } from './common/Title'
import { Bootcamp } from './common/Bootcamp'

export const Awards = () => {
  return (
    <section
      id="awards"
      className="flex flex-col w-full items-center gap-y-[80px]"
    >
      <Title>Premios</Title>

      <article className="award-container gap-8 xl:gap-x-16 h-fit">
        <Award
          img="silver_medal.svg"
          alt="silver medal logo"
          title="250€"
          awardType={AWARD_TYPE.PRICE}
        />
        <Award
          img="gold_medal.svg"
          alt="gold medal logo"
          title="400€"
          awardType={AWARD_TYPE.PRICE}
        />
        <Award
          img="bronze_medal.svg"
          alt="bronze medal logo"
          title="150€"
          awardType={AWARD_TYPE.PRICE}
        />
      </article>

      <p className="font-bold text-[24px] text-cWhite">
        Solo por participar, entrarás automaticamente en el sorteo de los
        siguientes productos
        <span className="font-italic text-[#BEBEBE] text-[24px]">
          *solo residentes en España*
        </span>
      </p>
      <article className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8 h-fit">
        <Award
          img="webcam_mx_brio.webp"
          alt="webcam mx brio logo"
          title="Webcam MX BRIO"
          awardType={AWARD_TYPE.GIFT}
        />
        <Award
          img="mx_master_3s.webp"
          alt="mx master 3s logo"
          title="MX Master 3S"
          awardType={AWARD_TYPE.GIFT}
        />
        <Award
          img="mx_keys.webp"
          alt="mx keys S logo"
          title="MX Keys S"
          awardType={AWARD_TYPE.GIFT}
        />
        <Award
          img="alfombrilla_logitech.webp"
          alt="alfombrilla logitech logo"
          title="Alfombrilla Logitech"
          awardType={AWARD_TYPE.GIFT}
        />
      </article>
      <p className="font-bold text-[24px] text-cWhite">
        Y también entrarás al sorteo de una plaza del bootcamp de Full-Stack
        Developer o Data Science y Machine Learning de 4Geeks Academy.
        <span className="font-italic text-[#BEBEBE] text-[24px]">
          *Sorteo internacional*
        </span>
      </p>
      <article className="grid  md:grid-cols-2 lg:grid-cols-2 gap-8 h-fit">
        <Bootcamp
          img="bootcamp_image.svg"
          alt="Bootcamp full-stack developer"
          title="Full-Stack Developer"
          description="Conviértete en un programador que utiliza las tecnologias más búscadas, mentoria personalizada y un plan de estudios y career support para conseguir tu primer trabajo."
          link="https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack"
        />
        <Bootcamp
          img="bootcamp_image.svg"
          alt="Bootcamp data science & machine learning"
          title="Data Science & Machine Learning"
          description="Conviértete en un científico de datos, desarrolla modelos de predicción y uneté a una de las profesiones mejores pagadas del mundo."
          link="https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning"
        />
      </article>
    </section>
  )
}
