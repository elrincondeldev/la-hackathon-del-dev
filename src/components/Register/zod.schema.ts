import { z } from 'zod'

const ParticipantSchema = z.object({
  participant_name: z.string().min(1, { message: 'Campo requerido' }),
  participant_country: z.string().min(1, { message: 'Campo requerido' }),
  participant_email: z
    .string()
    .email({ message: 'Email no válido' })
    .min(1, { message: 'Campo requerido' })
})

type Participant = z.infer<typeof ParticipantSchema>

export const RegisterFormSchema = z.object({
  project_name: z.string().min(1, { message: 'Campo requerido' }),
  project_description: z.string().min(12, { message: 'Campo requerido' }),
  project_url: z
    .string()
    .min(1, { message: 'Campo requerido' })
    .url()
    .includes('github.com', { message: 'URL de GitHub no válida' }),
  participants: z.preprocess(
    (participants) => {
      return (participants as Participant[]).filter((participant) => {
        return ParticipantSchema.safeParse(participant).success
      })
    },
    z
      .array(ParticipantSchema)
      .min(1, { message: 'Se necesita al menos un participante' })
  ),
  terms_and_conditions: z.boolean().refine((value) => value === true, {
    message: 'Debes aceptar los términos y condiciones'
  })
})

export type RegisterForm = z.infer<typeof RegisterFormSchema>
export type RegisterFormParticipants = z.infer<
  typeof RegisterFormSchema
>['participants'][0]
