// home-shared-ui.tsx
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  FilterIcon,
} from "@repo/ui";

export const TAB_CLASS =
  "text-xs text-gray-600 data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-foreground rounded-none !bg-transparent flex-none !shadow-none cursor-pointer px-0 uppercase";

export const MOBILE_TAB_CLASS =
  "bg-gray-100 px-3 rounded-xl outline-none text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-blue-50 data-[state=active]:font-semibold whitespace-nowrap shrink-0";

export const CategorySelect = () => (
  <Select>
    <SelectTrigger className="w-36 !h-8">
      <SelectValue placeholder="All Categories" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Categories</SelectLabel>
        <SelectItem value="foodstuff">Foodstuff</SelectItem>
        <SelectItem value="school-items">School Items</SelectItem>
        <SelectItem value="appliances">Appliances</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);

export const FilterDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex gap-2 items-center border !bg-white text-gray-500 cursor-pointer h-8 px-2 py-1 rounded-lg text-sm">
      Filter <FilterIcon className="size-3.5" />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Low - High</DropdownMenuItem>
      <DropdownMenuItem>High - Low</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
