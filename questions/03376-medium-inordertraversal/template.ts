interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<
  T extends TreeNode | null,
  TL = T extends TreeNode ? T['left'] : null,
  TR = T extends TreeNode ? T['right'] : null,
  R extends number[] = [],
> = T extends TreeNode
  ? [
      ...(TL extends TreeNode ? InorderTraversal<TL> : []),
      T['val'],
      ...(TR extends TreeNode ? InorderTraversal<TR> : []),
    ]
  : R
