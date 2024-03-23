import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { RegisterForm } from '../zod.schema'
import { useState } from 'react'
import { TermsPopup } from './TermsPopup'

type Props = {
  register: UseFormRegister<RegisterForm>
  errors: FieldErrors<RegisterForm>
}

export const TermsAndConditions: FC<Props> = ({ register, errors }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenPopup = () => {
    setIsOpen(true)
  }

  const handleClosePopup = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <p className="text-[18px] text-cTertiary">
        <input
          type="checkbox"
          className="mr-2"
          {...register('terms_and_conditions')}
        />
        Al enviar mi participación, confirmo que he leído y acepto los{' '}
        <a className="underline cursor-pointer" onClick={handleOpenPopup}>
          términos y condiciones
        </a>{' '}
        de privacidad.
      </p>
      <p>
        {errors.terms_and_conditions && (
          <span className="text-red-500 text-[14px]">
            {errors.terms_and_conditions.message}
          </span>
        )}
      </p>
      <TermsPopup isOpen={isOpen} onClose={handleClosePopup} />
    </div>
  )
}
