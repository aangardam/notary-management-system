
import { useSidebarContex } from "../contexts/sidebar-context"

const useSidebarCustom = () => {
    const { sidebarOpen, setSidebarOpen, isHovering, setIsHovering } = useSidebarContex();

    const handleMouseEnter = () => {
        
        if (!sidebarOpen) {
          setIsHovering(true)
          setSidebarOpen(true)
        }
    }
    
    const handleMouseLeave = () => {
        if (isHovering) {
            setIsHovering(false)
            setSidebarOpen(false)
        }
    }

    const dataMenu = [
        {
            id: 1,
            name: "Dashboard",
            url: "/dashboard",
            icon: "BsBarChartLineFill",
            parentId: 0,
            subMenu: []
        },
        {
            id: 2,
            name: "Client Management",
            url: "#",
            icon: "BsPeopleFill",
            parentId: 0,
            subMenu: [
                {
                    id: 3,
                    name: "Clients",
                    url: "/clients",
                    icon: "",
                    parentId: 2,
                }
            ]
        },
        {
            id: 4,
            name: "Document Management",
            url: "#",
            icon: "BsFileEarmarkTextFill",
            parentId: 0,
            subMenu: [
                {
                    id: 6,
                    name: " Document Types",
                    url: "/document/types",
                    icon: "",
                    parentId: 4,
                },
                {
                    id: 5,
                    name: "Documents",
                    url: "/documents",
                    icon: "",
                    parentId: 4,
                },
               
            ]
        },
        {
            id: 7,
            name: "Schedule Management",
            url: "#",
            icon: "BsCalendar3RangeFill",
            parentId: 0,
            subMenu: [
                {
                    id: 8,
                    name: "Appointments",
                    url: "/appointments",
                    icon: "",
                    parentId: 7,
                },
            ]
        },
        {
            id: 9,
            name: "Administration",
            url: "#",
            icon: "BsGearFill",
            parentId: 0,
            subMenu: [
                {
                    id: 10,
                    name: "Users",
                    url: "/users",
                    icon: "",
                    parentId: 9,
                },
                {
                    id: 11,
                    name: "Roles",
                    url: "/roles",
                    icon: "",
                    parentId: 9,
                },
                {
                    id: 12,
                    name: "Activity Logs",
                    url: "/activity-logs",
                    icon: "",
                    parentId: 9,
                },
            ]
        }
    ];


    return {
        sidebarOpen, 
        setSidebarOpen,
        handleMouseEnter,
        handleMouseLeave,
        dataMenu
    }
}

export default useSidebarCustom