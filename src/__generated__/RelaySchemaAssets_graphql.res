/* @generated */
@@ocaml.warning("-30")

@live
type enum_RequiredFieldAction_input = [
  | #NONE
  | #LOG
  | #THROW
]

@live
type rec input_FilterRawAlbum = {
  title: option<string>,
}

@live
and input_FilterRawAlbum_nullable = {
  title?: Js.Null.t<string>,
}
@live @obj
external make_FilterRawAlbum: (
  ~title: string=?,
  unit,
) => input_FilterRawAlbum = ""

