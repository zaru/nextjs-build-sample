import {DropDownMenu}  from './DropDownMenu'
interface Props {
params: {
  id: string
}
}
export default function Page(props: Props) {
  return (
    <div className="flex gap-4">
      <p>foo</p>
      <p>{props.params.id}</p>
      <DropDownMenu />
    </div>
  )
}
