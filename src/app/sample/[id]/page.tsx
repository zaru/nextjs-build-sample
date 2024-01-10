import {DropDownMenu}  from './DropDownMenu'
import { v4 as uuidv4 } from 'uuid';

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
      <p>{uuidv4()}</p>
      <DropDownMenu />
    </div>
  )
}
