import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const workspaces = [
    {
        id: "1",
        name: "Acme Corp",
        avatar: "AC",
    },
    {
        id: "2",
        name: "Beta LLC",
        avatar: "BL",
    },
    {
        id: "3",
        name: "Gamma Inc",
        avatar: "GI",
    },
]

export default function WorkSpaceList() {
    return (
        <TooltipProvider>
            <div className="flex flex-col gap-2">
                {workspaces.map((ws) => (
                    <Tooltip key={ws.id}>
                        <TooltipTrigger asChild>
                            <Button size={'icon-sm'}>
                                {ws.avatar}
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side={'right'}>
                            {ws.name}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
}