
type TitleProps = {
    children: string;
}

export const Title = ({children}: TitleProps) => {
  return (
    <h1 className="md:text-[80px] text-[50px] font-bold title-gradient">{children}</h1>
  )
}