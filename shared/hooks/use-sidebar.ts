
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