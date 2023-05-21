import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useStore } from '@/store'
import { ChevronDownIcon } from 'lucide-react'
import { Select } from '../select'
import { SelectModel } from '../selectModal/selectModel'
import { Button } from '../ui/button'

export function Quest() {
  const store = useStore()
  const selectedNode = store?.nodes?.find((node) => node.uuid === store.selectedNode)

  return (
    <div className=" p-4 w-80 bg-card shadow-lg grid gap-2 h-fit border ">
      <Label className=" w-full text-xs font-medium">Name</Label>
      <Input type="text" className="bg-background" />

      <Label className=" w-full text-xs font-medium">NPC Text</Label>
      <textarea
        rows={4}
        className="flex w-full     py-2.5 pl-2.5 bg-background  text-xs ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />

      <Label className=" w-full text-xs font-medium">Required item to complete</Label>
      <Select className="bg-background" options={[]} onChange={(val) => {}} />

      <Label className=" w-full text-xs font-medium">Reward</Label>
      <SelectModel>
        <Button size={'sm'} className="flex w-full py-2.5 pl-2.5 bg-background  text-xs">
          <div>Select reward</div>
          <ChevronDownIcon className="w-4 h-4 ml-auto" />
        </Button>
      </SelectModel>
    </div>
  )
}

const y = [
  {
    name: 'Quest 1',
    initialDialog: 'Hello what do you want to eat',
    options: [
      {
        option: 'i want an ice cream',
        dialogue: 'What flavor do you want?',
        options: [
          {
            dialogue: 'Here is your ice cream with chocolate',
            option: 'Chocolate',
            reward: 'item:123',
          },
          {
            dialogue: 'Here is your ice cream with vanilla',
            option: 'Vanilla',
            reward: 'item:123',
          },
        ],
      },
      {
        option: 'i want a potato',
        dialogue: 'Ok here is your potato',
        reward: 'item:123',
      },
    ],
  },
]
