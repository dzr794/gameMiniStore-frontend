
export type HeaderData = {
  buttons: ButtonData[]
}

export type ButtonData = {
  componentType: 'navLink' | 'navDropdown'
  buttonData: NavLinkData | DropdownData
}

export type NavLinkData = {
  name: string
  url: string
}

export type DropdownData = {
  name: string,
  links: NavLinkData[]
}