interface Props {
params: {
  id: string
}

}
export default function Page(props: Props) {
  return (
    <div>
      <p>foo</p>
      <p>{props.params.id}</p>
    </div>
  )
}
