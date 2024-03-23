type AwardProps = {
  img: string
  alt: string
  title: string
  description: string
  link: string
}

export const Bootcamp = ({
  img,
  alt,
  title,
  description,
  link
}: AwardProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
      <div
        className={`box bg-cSecondary h-full drop-shadow-customShadow px-8 flex flex-col gap-4 items-center border border-cStrokeBox rounded-[5px] py-8 w-full h-fit lg:max-h-[400px]`}
      >
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-3xl font-bold text-[#BEBEBE]">Desde 0</p>
            <p className="text-3xl">{title}</p>
          </div>
          <img src={`/images/rewards/${img}`} alt={alt} className="my-auto" />
        </div>
        <p className={`text-cWhite text-[20px] font-bold`}>{description}</p>
      </div>
    </a>
  )
}
