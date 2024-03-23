import { ButtonLink } from './common/ButtonLink'
import { Title } from './common/Title'

export const CTASection = () => {
  return (
    <article className="w-full flex flex-col items-center justify-center gap-8 text-center">
      <Title>¡Regístrate gratis!</Title>
      <ButtonLink to="register">Registrarme</ButtonLink>
    </article>
  )
}
