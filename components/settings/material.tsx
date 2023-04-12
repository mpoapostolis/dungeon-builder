import { useStore } from '@/store'
import * as Label from '@radix-ui/react-label'

export function Material() {
  const store = useStore()
  const selected = store.nodes.find((node) => node.uuid === store.selectedNode)
  return (
    <div className="grid grid-cols-2 items-center">
      <Label.Root className="text-black11 w-full text-sm font-medium">Material Color</Label.Root>
      <input
        onChange={(evt) => {
          if (!selected?.uuid) return
          store.updateNode(selected.uuid, { color: evt.target.value })
        }}
        value={selected?.color ?? '#999'}
        type="color"
        className="ml-auto h-10 w-10"
      />
    </div>
  )
}
