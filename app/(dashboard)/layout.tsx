import CreateWorkspace from "./workspace/_components/create-workspace";
import UserNav from "./workspace/_components/user-nav";
import WorkSpaceList from "./workspace/_components/work-space-list";

export default function WorkspaceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex w-full h-screen">
            <div className="flex h-full w-16 flex-col items-center bg-secondary py-3 px-2 border-r border-border">
                <WorkSpaceList />
                <div className="mt-4">
                    <CreateWorkspace />
                </div>
                <div className="mt-auto">
                    <UserNav />
                </div>
            </div>
            {children}
        </div>
    )
}
