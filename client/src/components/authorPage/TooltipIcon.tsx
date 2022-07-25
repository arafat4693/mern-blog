interface Props {
  Icon: any
  tooltip: string
  link: string
}

export default function TooltipIcon({ Icon, tooltip, link }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      data-title={tooltip}
      className="tooltip relative inline-block"
    >
      <Icon className="text-4xl text-violet-800 hover:text-gray-800 transition-all duration-300" />
    </a>
  )
}
