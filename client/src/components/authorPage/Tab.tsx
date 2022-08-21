interface Props {
  navigateTab: (e: any) => void
  name: string
  currentTab: "all" | "following" | "followers"
  isUser: boolean
}

export default function Tab({ navigateTab, name, currentTab, isUser }: Props) {
  return (
    <button
      onClick={() => navigateTab(name)}
      className={`${currentTab === name ? "activeLink" : "normalLink"} ${
        !isUser && name !== "all" && "hidden"
      } text-2xl capitalize`}
    >
      {name}
    </button>
  )
}
