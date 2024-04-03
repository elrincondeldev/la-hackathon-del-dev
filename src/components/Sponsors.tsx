import { Title } from './common/Title'

export const Sponsors = () => {
  return (
    <article
      id="sponsors"
      className="flex flex-col gap-y-[80px] mt-14 items-center w-full"
    >
      <Title>Patrocinadores</Title>
      <section className="grid md:grid-cols-[1fr_0.5fr_1fr_1fr] place-items-center gap-32 w-full">
        <img src="/images/sponsors/logitech.svg" alt="logitech logo" />
        <img
          src="/images/sponsors/getmagical_green.svg"
          alt="getmagical logo"
        />
        <a
          href="https://4geeksacademy.com/es/inicio?utm_source=influencers&utm_medium=referral&utm_campaign=elrincondeldev&utm_location=madrid-spain&utm_content=landing"
          target="_blank"
        >
          <img src="/images/sponsors/4geeks.svg" alt="4geeks logo" />
        </a>
        <img src="/images/sponsors/nuwe.svg" alt="nuwe logo" />
      </section>
    </article>
  )
}
